import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';

/**
 * Blendet das Element beim Scrollen in den Viewport ein (CSS-Klassen
 * `reveal` / `reveal-visible` in styles.scss). Respektiert prefers-reduced-motion.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.element.nativeElement.classList.add('reveal-visible');
      return;
    }

    const el = this.element.nativeElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || typeof IntersectionObserver === 'undefined') return;

    el.classList.add('reveal');
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('reveal-visible');
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
