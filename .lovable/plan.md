# Clean homepage redesign

## Goal
Refine the homepage using the supplied reference as a visual benchmark: quieter composition, stronger spacing, smaller type, compact navigation, consistent content widths, and clearly separated conversion sections.

## What will change
- Simplify the opening area into a compact centered message with two clear actions, a restrained proof/work strip, service shortcuts, and one concise metrics row.
- Remove the oversized headline treatment, heavy visual effects, crowded carousels, duplicate proof, and competing card styles.
- Rework service storytelling into clean, evenly spaced image-and-copy sections where images remain fully visible.
- Standardize all homepage cards, banners, buttons, section headings, and widths so the page reads as one coherent system.
- Use more whitespace and shorter visual groupings, following the reference's calm page rhythm while retaining Super 30's orange, white, and black identity.
- Keep existing real services, case studies, metrics, links, CTA destinations, client logos, blog content, and FAQ content.
- Preserve the current FAQ-after-CTA order and responsive behavior.

## Technical details
- Update the homepage React sections and homepage-only CSS tokens/classes.
- Reuse existing real portfolio, service, report, logo, and process images; no invented proof or placeholder content.
- Use fixed image aspect ratios with `object-fit` chosen per asset to prevent cropping.
- Verify desktop and mobile layouts for overflow, image visibility, hierarchy, and CTA usability.
- Confirm typecheck and preview build are clean before completion.
