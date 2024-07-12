import { Injectable, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AOSService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkViewportWidth();
      window.addEventListener('resize', this.checkViewportWidth.bind(this));
    }
  }

  initAos() {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
      anchorPlacement: 'top-bottom',
    });
  }

  checkViewportWidth() {
    if (window.innerWidth < 750) {
      this.initAos();
    } else {
      AOS.refreshHard(); 
    }
  }
}
