import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    @if (variant() === 'mark') {
      <svg
        [class]="className()"
        viewBox="0 0 48 48"
        fill="none"
        role="img"
        [attr.aria-label]="ariaLabel()"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="logo-mark-clip">
            <rect width="48" height="48" rx="12" />
          </clipPath>
        </defs>
        <g clip-path="url(#logo-mark-clip)">
          <g opacity="0.18" stroke="var(--color-primary)" stroke-width="0.5">
            <line x1="0" y1="12" x2="48" y2="12" />
            <line x1="0" y1="24" x2="48" y2="24" />
            <line x1="0" y1="36" x2="48" y2="36" />
            <line x1="12" y1="0" x2="12" y2="48" />
            <line x1="24" y1="0" x2="24" y2="48" />
            <line x1="36" y1="0" x2="36" y2="48" />
          </g>
          <path
            d="M6 16 L3 24 L6 32"
            stroke="var(--color-primary)"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.45"
          />
          <path
            d="M42 16 L45 24 L42 32"
            stroke="var(--color-primary)"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.45"
          />
          <path
            d="M11 34 V14 L17.5 25 L24 14 V34"
            stroke="var(--color-on-surface)"
            stroke-width="2.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.5 22.5 C28.5 17.5 32.5 14 37 14 C41.5 14 44.5 17.5 44.5 22 C44.5 28 40 32 34.5 32 H28.5"
            stroke="var(--color-primary)"
            stroke-width="2.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="34.5"
            y1="22"
            x2="44.5"
            y2="22"
            stroke="var(--color-primary)"
            stroke-width="2.75"
            stroke-linecap="round"
          />
          <circle cx="38" cy="8" r="2" fill="var(--color-primary)" />
        </g>
        <rect
          x="0.75"
          y="0.75"
          width="46.5"
          height="46.5"
          rx="11.25"
          stroke="var(--color-outline-variant)"
          stroke-width="1.5"
          opacity="0.55"
        />
      </svg>
    } @else {
      <svg
        [class]="className()"
        viewBox="0 0 240 48"
        fill="none"
        role="img"
        [attr.aria-label]="ariaLabel()"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="logo-full-mark-clip">
            <rect width="48" height="48" rx="12" />
          </clipPath>
        </defs>
        <g clip-path="url(#logo-full-mark-clip)">
          <g opacity="0.18" stroke="var(--color-primary)" stroke-width="0.5">
            <line x1="0" y1="12" x2="48" y2="12" />
            <line x1="0" y1="24" x2="48" y2="24" />
            <line x1="0" y1="36" x2="48" y2="36" />
            <line x1="12" y1="0" x2="12" y2="48" />
            <line x1="24" y1="0" x2="24" y2="48" />
            <line x1="36" y1="0" x2="36" y2="48" />
          </g>
          <path
            d="M6 16 L3 24 L6 32"
            stroke="var(--color-primary)"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.45"
          />
          <path
            d="M42 16 L45 24 L42 32"
            stroke="var(--color-primary)"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
            opacity="0.45"
          />
          <path
            d="M11 34 V14 L17.5 25 L24 14 V34"
            stroke="var(--color-on-surface)"
            stroke-width="2.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.5 22.5 C28.5 17.5 32.5 14 37 14 C41.5 14 44.5 17.5 44.5 22 C44.5 28 40 32 34.5 32 H28.5"
            stroke="var(--color-primary)"
            stroke-width="2.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="34.5"
            y1="22"
            x2="44.5"
            y2="22"
            stroke="var(--color-primary)"
            stroke-width="2.75"
            stroke-linecap="round"
          />
          <circle cx="38" cy="8" r="2" fill="var(--color-primary)" />
        </g>
        <rect
          x="0.75"
          y="0.75"
          width="46.5"
          height="46.5"
          rx="11.25"
          stroke="var(--color-outline-variant)"
          stroke-width="1.5"
          opacity="0.55"
        />
        <text
          x="58"
          y="31"
          font-family="var(--font-headline)"
          font-size="20"
          font-weight="600"
          letter-spacing="-0.03em"
        >
          <tspan fill="var(--color-on-surface)">Michal </tspan>
          <tspan fill="var(--color-primary)">Galas</tspan>
        </text>
        <line
          x1="58"
          y1="38"
          x2="118"
          y2="38"
          stroke="var(--color-primary)"
          stroke-width="2"
          stroke-linecap="round"
          opacity="0.55"
        />
      </svg>
    }
  `,
})
export class LogoComponent {
  readonly variant = input<'full' | 'mark'>('full');
  readonly className = input('h-8 w-auto', { alias: 'class' });
  readonly ariaLabel = input('Michal Galas');
}
