# Alt Text Audit

All visual media must include accessible names.

## Raster images

- Use `OptimizedImage` from `src/components/OptimizedImage.tsx` (requires `alt`)
- Use `SanityImage` for CMS assets with descriptive alt from content

## Placeholder media

Gradient project/blog covers use `PlaceholderMedia` with descriptive `alt` props.

## Decorative graphics

- Icon-only buttons include `aria-label`
- SVG icons inside labeled controls use `aria-hidden="true"`
- Logo carousel partner tiles expose `aria-label={name}`

## Audit result

- No raw `<img>` tags in `src/`
- Project and blog cards: descriptive preview alt text
- Hero/detail placeholders: `aria-label` on section hero blocks
