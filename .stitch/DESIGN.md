---
name: Industrial Energy
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
  on-surface-variant: '#d5c4ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9e8f78'
  outline-variant: '#514532'
  surface-tint: '#ffba20'
  primary: '#ffdca1'
  on-primary: '#412d00'
  primary-container: '#ffb800'
  on-primary-container: '#6b4c00'
  inverse-primary: '#7c5800'
  secondary: '#c8c6c6'
  on-secondary: '#303030'
  secondary-container: '#474747'
  on-secondary-container: '#b6b5b4'
  tertiary: '#e2e0e0'
  on-tertiary: '#303030'
  tertiary-container: '#c6c4c4'
  on-tertiary-container: '#515151'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea8'
  primary-fixed-dim: '#ffba20'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5e4200'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Bebas Neue
    fontSize: 80px
    fontWeight: '900'
    lineHeight: '1.0'
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  subtitle-md:
    fontFamily: Barlow Semi Condensed
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  body-rg:
    fontFamily: Barlow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Barlow
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin: 64px
  section-padding: 120px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is engineered for a premium, high-performance fitness environment. It evokes an **Industrial Energy** aesthetic, blending the raw, structural feel of a modern training facility with a professional, high-end finish. The brand personality is powerful, disciplined, and uncompromising.

The visual style leans heavily into **High-Contrast / Bold** movements. It utilizes heavy geometric forms, sharp intersections, and a dominant dark-mode foundation to create an environment that feels both exclusive and intensely motivating. The user experience should feel fast, efficient, and physically grounded.

## Colors

The palette is rooted in a high-contrast industrial spectrum. **Primary Yellow (#FFB800)** serves as the high-visibility "caution" and "action" color, drawing immediate focus to conversion points and critical brand elements. 

The background architecture uses **Deep Black (#1A1A1A)** as the base, with **Dark Graphite (#2D2D2D)** and **Medium Gray (#555555)** creating structural depth and UI layering. **White (#FFFFFF)** is reserved exclusively for high-readability text and primary icons, ensuring a crisp, professional finish against the darker foundations.

## Typography

This design system utilizes a tiered typographic hierarchy to reinforce the industrial theme. 

- **Display & Titles:** Use high-impact, condensed sans-serifs (Bebas Neue or Barlow Condensed Black). These should be set in uppercase with tight line heights to mimic architectural signage.
- **Subtitles:** Utilize Barlow Semi Condensed Bold. The increased tracking and semi-condensed nature provide a professional, structured transition between headlines and body content.
- **Body Text:** Lexend or Barlow Regular is employed for maximum readability. The geometric clarity of these fonts ensures that even technical training information is easily digestible.

## Layout & Spacing

The layout follows a **Fixed Grid** model centered on a 12-column system. The spacing philosophy is rhythmic and "mechanical," utilizing increments of 4px to maintain geometric alignment. 

Large-scale section padding (120px) is used to create moments of intense focus, while tighter gutters (24px) between cards and components evoke a sense of density and efficiency. Layouts should favor asymmetrical alignments that suggest movement and energy, anchored by heavy vertical and horizontal lines.

## Elevation & Depth

In keeping with the industrial aesthetic, depth is conveyed through **Tonal Layers** and **Bold Borders** rather than soft shadows. 

Surfaces are stacked using color values: the background is Deep Black, while elevated components like cards or navigation bars use Dark Graphite. Visual separation is reinforced by 1px solid borders in Medium Gray or Primary Yellow highlights. Interaction states (hover/active) should rely on hard-edged color shifts and high-contrast outlines to maintain a tactile, mechanical feel.

## Shapes

The shape language is strictly **Geometric**. A conservative roundedness level is applied to prevent the UI from feeling "soft." 

- **Buttons:** 4px border radius for a sharp, precision-tooled appearance.
- **Cards:** 8px border radius to provide a slight structural distinction from smaller interactive elements.
- **Containers:** Hard 0px corners are encouraged for large section containers to emphasize the "built" nature of the layout.

## Components

### Logo Construction
The monogram 'A2' is the focal point. The 'A' is rendered in #333333 and the '2' in #FFB800, using a geometric overlap that suggests strength and integration. The secondary text 'ACADEMIA' must be uppercase with wide tracking (200-300 range) positioned beneath or beside the monogram.

### Buttons
- **Primary:** #FFB800 background, #1A1A1A text, uppercase, 4px radius. Bold, 16px weight.
- **Secondary:** Transparent background, #FFFFFF 2px border, uppercase, 4px radius.
- **Hover States:** Immediate color inversion or 100% brightness increase; no soft transitions.

### Cards
Cards use a #2D2D2D background with an 8px border radius. Every card must feature a **4px solid yellow (#FFB800) left border highlight** to create a vertical "striping" effect across the layout.

### Input Fields
Inputs are Dark Graphite with a 1px Medium Gray border. Upon focus, the border shifts to Primary Yellow with a sharp, 2px weight.

### Additional Components
- **Progress Bars:** Heavy, blocky indicators using the primary yellow for "completion" states.
- **Data Callouts:** Large Bebas Neue numbers for "Membership Stats" or "Class Times" to emphasize the "Energy" aspect of the brand.
