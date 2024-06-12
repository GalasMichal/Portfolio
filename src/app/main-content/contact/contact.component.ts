import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CheckboxControlValueAccessor, CheckboxRequiredValidator, FormsModule, NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  http = inject(HttpClient);

  agree = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  }


  

  post = {
    endPoint: 'https://michal-galas.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
            this.agree = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } 
  }

}
