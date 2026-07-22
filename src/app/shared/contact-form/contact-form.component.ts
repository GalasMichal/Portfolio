import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormField, FormRoot, email, form, minLength, required } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

interface ContactData {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
  agree: boolean;
}

const INITIAL_DATA: ContactData = {
  name: '',
  email: '',
  company: '',
  topic: '',
  message: '',
  agree: false,
};

const TOPIC_KEYS = [
  'webapp',
  'modernization',
  'gis',
  'automation',
  'ai',
  'consulting',
  'other',
] as const;

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormRoot, FormField, RouterLink, TranslatePipe],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  private readonly http = inject(HttpClient);
  private readonly translate = inject(TranslateService);

  readonly status = signal<'idle' | 'success' | 'error'>('idle');
  readonly topicKeys = TOPIC_KEYS;
  private readonly model = signal<ContactData>({ ...INITIAL_DATA });

  readonly contactForm = form(
    this.model,
    (path) => {
      required(path.name);
      minLength(path.name, 2);
      required(path.email);
      email(path.email);
      required(path.message);
      minLength(path.message, 4);
      required(path.agree);
    },
    { submission: { action: () => this.send() } },
  );

  private async send(): Promise<void> {
    this.status.set('idle');
    const { agree: _agree, company, topic, ...rest } = this.model();
    const parts: string[] = [];
    if (company.trim()) {
      parts.push(`Unternehmen: ${company.trim()}`);
    }
    if (topic) {
      parts.push(`Thema: ${this.translate.instant('form.topics.' + topic)}`);
    }
    const contactData = {
      ...rest,
      message: parts.length ? `${parts.join('\n')}\n\n${rest.message}` : rest.message,
    };
    try {
      await firstValueFrom(
        this.http.post('https://michal-galas.de/sendMail.php', JSON.stringify(contactData), {
          headers: { 'Content-Type': 'text/plain' },
          responseType: 'text',
        }),
      );
      this.model.set({ ...INITIAL_DATA });
      this.contactForm().reset();
      this.status.set('success');
      setTimeout(() => this.status.set('idle'), 4000);
    } catch (err) {
      console.error(err);
      this.status.set('error');
    }
  }
}
