---
name: Architectural Digitalist Light
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464554'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#904900'
  on-tertiary: '#ffffff'
  tertiary-container: '#b55d00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: Sora
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Sora
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Sora
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Sora
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  gutter-desktop: 32px
  margin-desktop: 64px
  gutter-mobile: 16px
  margin-mobile: 20px
  container-max: 1440px
---

## Brand & Style

The design system embodies an "Architectural Digitalist" aesthetic, transitioning into a high-performance, light-mode environment. It targets sophisticated tech platforms, architectural visualization tools, and premium SaaS products. 

The visual language is rooted in **Modern Minimalism** with a focus on structural integrity and precision. By utilizing expansive whitespace, rigorous grid alignment, and a "Digital Cobalt" accent, the UI evokes a sense of clarity, efficiency, and professional rigor. The atmosphere is airy and open, yet feels grounded by sharp-edged structural elements and deliberate typographic hierarchy.

## Colors

The palette is built upon a foundation of "Structural Whites" and "Technical Grays" to ensure maximum legibility and a clean, high-performance feel.

- **Primary (Digital Cobalt):** #6366f1. Used for primary actions, active states, and brand highlights.
- **Secondary (Obsidian):** #0f172a. Reserved for high-contrast typography and critical structural elements.
- **Surface (Foundation):** #ffffff. The primary background color to maintain an airy feel.
- **Sub-Surface (Gallery):** #f8fafc. Used for subtle grouping, background fills, and secondary containers.
- **Stroke (Draft):** #e2e8f0. Used for low-contrast borders and grid lines to maintain structure without clutter.

## Typography

This design system exclusively uses **Sora** to leverage its geometric precision and distinctive technological character. 

The typographic hierarchy is "bottom-heavy," where body text and labels are kept functional and clear, while headlines use tight tracking and bold weights to act as structural anchors for the page. Use `label-md` for navigation and section headers to reinforce the architectural feel through uppercase styling and increased letter-spacing.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content is housed within a 12-column grid system that centers on larger displays but scales proportionally on smaller ones.

- **Desktop (1440px+):** 12 columns, 32px gutters, 64px outside margins.
- **Tablet (768px - 1439px):** 8 columns, 24px gutters, 40px outside margins.
- **Mobile (Up to 767px):** 4 columns, 16px gutters, 20px outside margins.

Spacing follows a strict 4px/8px baseline rhythm. Internal padding for containers should be generous (typically 24px or 32px) to maintain the airy, "un-crowded" architectural vibe.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Micro-Shadows** rather than heavy diffusion. 

1.  **Level 0 (Canvas):** The base background (#ffffff).
2.  **Level 1 (Surface):** Subtle secondary containers using #f8fafc with a 1px #e2e8f0 border.
3.  **Level 2 (Float):** Used for cards and navigation bars. These use a white background with a very subtle, sharp shadow (0px 4px 12px rgba(15, 23, 42, 0.05)) and a 1px border.
4.  **Level 3 (Overlay):** Used for modals and dropdowns. These feature a more pronounced but still clean shadow (0px 12px 32px rgba(15, 23, 42, 0.1)).

Glassmorphism is used sparingly for persistent navigation bars, employing a backdrop-blur (12px) and 80% opacity white fill to maintain the sense of depth.

## Shapes

The shape language is **Soft-Geometric**. By using a `0.25rem` (4px) base corner radius, the UI maintains its professional, architectural edge while feeling contemporary and refined.

- **Buttons & Inputs:** 4px radius (Soft).
- **Cards & Containers:** 8px radius (rounded-lg).
- **Modals:** 12px radius (rounded-xl).
- **Status Pills:** Pill-shaped (999px) for immediate visual distinction from structural elements.

## Components

- **Buttons:** Primary buttons use a Digital Cobalt background with white text and no border. Secondary buttons use a transparent background with a 1px #e2e8f0 border and Obsidian text. The hover state for primary buttons involves a shift to #4338ca.
- **Input Fields:** Use a 1px #e2e8f0 border and #ffffff background. On focus, the border shifts to Digital Cobalt with a subtle 2px outer glow in the same color (20% opacity).
- **Cards:** Cards should be treated as "Frames." Use #ffffff with a 1px #e2e8f0 border. Avoid heavy shadows; instead, use a 4px vertical offset shadow on hover to indicate interactivity.
- **Chips/Badges:** Use #f1f5f9 (light gray) background with #475569 text for neutral states. Use a 10% opacity Digital Cobalt fill with Digital Cobalt text for active/highlighted states.
- **Lists:** Use horizontal separators in #f1f5f9. Ensure generous vertical padding (16px) between items to maintain the "airy" feel.
- **Data Tables:** Highly structured with #f8fafc header rows and #ffffff body rows. Use thin, light-gray vertical rules only when data density is high.