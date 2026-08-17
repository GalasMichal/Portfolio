---
name: Obsidian Precision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
This design system embodies a "low-light" philosophy, prioritizing visual comfort and technical sophistication. The brand personality is precise, engineering-focused, and premium, evoking the feeling of a high-end physical workspace at dusk. 

The aesthetic style is a hybrid of **Minimalism** and **Tonal Glassmorphism**. It avoids pure black to prevent harsh contrast, instead utilizing a layered palette of gunmetal and charcoal. This approach creates a sense of physical depth through subtle color shifts and precise 1px "micro-borders" rather than traditional heavy shadows. The emotional response should be one of calm focus and professional reliability.

## Colors
The palette is rooted in a "Muted Dark" spectrum. The foundation is a deep Charcoal (#121212), which serves as the canvas. Surfaces and containers are built using progressively lighter shades of Gunmetal (#1A1A1A and #242424) to establish hierarchy.

The primary accent is a vibrant **Tech Cobalt (#6366F1)**, used sparingly for calls to action and critical interactive states. A secondary **Slate (#94A3B8)** is used for supportive elements. Semantic colors (success, error) should be slightly desaturated to maintain the "muted" atmosphere, with the exception of the Cobalt accent which provides the necessary "digital pulse" to the interface.

## Typography
Typography is sharp and geometric. **Sora** is utilized for all headlines to provide a distinct, high-tech character with its unique ink traps and wide apertures. 

For body copy, **Hanken Grotesk** offers a balanced, contemporary feel that remains highly legible in low-light environments. **Geist** is reserved for labels, data points, and technical metadata, leaning into a developer-centric aesthetic that reinforces the "Precision" aspect of the design system. All type should be rendered with `antialiased` smoothing to maintain clarity against the dark background.

## Layout & Spacing
The system uses a strictly enforced 8px grid. Layouts are constructed on a 12-column fluid grid for desktop and a 4-column grid for mobile. 

Spacing is intentionally generous to prevent the dark interface from feeling cramped. Use larger vertical gaps (e.g., 64px or 80px) between major sections to allow the "Obsidian" surfaces to breathe. Alignment should be rigid and mathematical; elements should feel "locked" into the grid.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Micro-outlines**. 
- **Level 0 (Background):** #121212.
- **Level 1 (Cards/Sections):** #1A1A1A with a 1px solid border of #2D2D2D.
- **Level 2 (Popovers/Modals):** #242424 with a 1px solid border of #3D3D3D and a very subtle, large-radius black shadow (0 20px 40px rgba(0,0,0,0.4)).

Avoid heavy drop shadows on standard UI components. Instead, use thin borders that are slightly lighter than the background they sit on to create a "sharp edge" effect.

## Shapes
Shapes are "Soft" (0.25rem / 4px) to maintain a sense of precision and technical rigor. Large radii (pill shapes) should be avoided except for specific tags or status indicators. The subtle rounding prevents the UI from feeling aggressive while maintaining the sharp, architectural look of the design system. Interactive elements like buttons and input fields must strictly follow the base radius.

## Components
### Buttons
Primary buttons use the Tech Cobalt accent with white text for maximum contrast. Secondary buttons use a transparent background with a 1px border (#2D2D2D) and Slate text. The hover state for primary buttons should be a subtle brightness increase; for secondary, a slight background fill of #1A1A1A.

### Input Fields
Inputs are dark-filled (#0D0D0D) with a #2D2D2D border. On focus, the border transitions to Tech Cobalt with a 0 0 0 2px glow of the same color at 20% opacity.

### Cards
Cards are the primary container. They should use the Level 1 surface color. Headers within cards should be separated by a subtle 1px horizontal rule (#2D2D2D).

### Chips & Lists
Chips use a low-contrast Slate background (#242424) with Label-sm typography. Lists should use "divider-less" spacing where possible, using white space and typography weight to distinguish items, or very faint dividers (#1F1F1F) if necessary.

### Navigation
Sidebars or top navigation should utilize a slight blur (backdrop-filter: blur(12px)) when overlaying content, creating a subtle glass effect that maintains the "low-light" depth.