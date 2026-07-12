# VoiceOver Walkthrough Checklist

Manual screen reader test for WCAG 2.2 AA flows.

## Homepage

1. Skip link announces and moves focus to `#main-content`
2. Navbar links read in logical order
3. Theme toggle announces current mode
4. Hero CTAs are reachable and labeled

## Navigation

1. Tab through Services/Solutions mega menus
2. Press Enter to open menu, Escape to close
3. Mobile drawer traps focus and closes with Escape

## Forms

1. Contact form labels are announced with fields
2. Validation errors are announced via `aria-live`
3. Careers application fields have associated labels

## Carousels

1. Testimonials previous/next buttons have `aria-label`
2. Dot indicators announce slide index

## Dark mode

1. Toggle theme — content remains readable
2. Focus rings visible on all interactive elements
