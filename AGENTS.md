# Architecture rules
- Keep industry content in shared JSON consumed by React and the static SEO generator, so dynamic industry URLs ship matching metadata and content before JavaScript runs.
- Use shared SEO content helpers for CMS image labels, editorial internal-link normalization, and search-description formatting at runtime and prerender time, so crawler and visitor output agree.