import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly theme = signal<ThemeMode>('dark');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      const preferred =
        stored ??
        (typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark');
      this.apply(preferred);
    }
  }

  toggle(): void {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark');
  }

  apply(mode: ThemeMode): void {
    this.theme.set(mode);
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(mode);
      localStorage.setItem(STORAGE_KEY, mode);
    }
  }
}
