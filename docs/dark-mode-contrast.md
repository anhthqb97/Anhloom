# Dark Mode Contrast Audit

Verified against WCAG 2.2 AA body text requirement (4.5:1 minimum).

## Semantic tokens (`.dark`)

| Foreground | Background | Ratio | Pass |
|------------|------------|-------|------|
| `--color-text-primary` (#f1f5f9) | `--color-bg` (#0a0a0b) | ~17:1 | Yes |
| `--color-text-secondary` (#cbd5e1) | `--color-bg` (#0a0a0b) | ~12:1 | Yes |
| `--color-text-secondary` (#cbd5e1) | `--color-bg-subtle` (#111113) | ~11:1 | Yes |
| `--color-text-muted` (#94a3b8) | `--color-bg-subtle` (#111113) | ~6.5:1 | Yes (captions) |

## Notes

- Body copy uses `text-text-secondary` on section backgrounds (`bg-bg`, `bg-bg-subtle`).
- Muted text is reserved for captions and meta labels.
- Primary CTA buttons use `text-white` on `primary-600` (>4.5:1).
