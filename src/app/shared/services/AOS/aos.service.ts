import { Injectable } from '@angular/core';
import AOS from 'aos';

@Injectable({
  providedIn: 'root'
})
export class AOSService {
  initAos() {
    AOS.init({
      duration: 1200,
    });
  }
  constructor() { }
}
