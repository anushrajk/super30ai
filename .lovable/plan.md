# Refine the homepage hero with a subtle 3D background

## Changes
- Remove the four client-work preview tiles from the hero.
- Add a full-width, lightweight 3D background behind the hero content using abstract glass-like forms and fine orbital lines.
- Keep the current headline, buttons, service links, and verified metrics intact.
- Use restrained charcoal, white, and small orange accents—no orange background.
- Add slow pointer-responsive movement, pause motion for reduced-motion users, and keep text contrast strong.
- Simplify the hero spacing after removing the gallery so the service and metric rows feel intentional rather than leaving a gap.

## Technical details
- Use React Three Fiber compatible with the current React 18 project.
- Keep the canvas decorative and inaccessible to pointer/keyboard focus so existing calls to action remain usable.
- Cap rendering quality for mobile performance and provide a CSS fallback if WebGL is unavailable.
- Verify desktop and mobile framing, motion, overflow, and console/build health.
