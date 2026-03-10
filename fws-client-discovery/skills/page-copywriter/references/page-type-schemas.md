# Schema Markup by Page Type

## Schema Type Selection

| Page Type | Primary Schema | Additional Schema |
|-----------|---------------|-------------------|
| Homepage | `WebSite` + `Organization` | `SiteNavigationElement` |
| Service Pillar | `Service` | `FAQPage` (if FAQ section), `BreadcrumbList` |
| Service Child | `Service` | `FAQPage`, `BreadcrumbList` |
| About | `AboutPage` | `Organization` |
| Contact | `ContactPage` | `Organization` (with `contactPoint`) |
| FAQ | `FAQPage` | — |
| Case Study | `Article` | `Review` or `CreativeWork` |
| Testimonials | `WebPage` | `Review` (per testimonial) |
| Team | `WebPage` | `Person` (per team member) |
| Location | `LocalBusiness` | `PostalAddress`, `GeoCoordinates` |
| Blog Post | `Article` or `BlogPosting` | `FAQPage` (if FAQ section), `Person` (author) |
| Comparison | `WebPage` | `Table` |
| How We Work | `WebPage` | `HowTo` |
| Pricing | `WebPage` | `Offer` or `PriceSpecification` |

## Schema Implementation Notes

### Organization Schema (homepage + contact)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Business Name]",
  "url": "[Website URL]",
  "logo": "[Logo URL]",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "[Phone]",
    "contactType": "customer service",
    "email": "[Email]"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street]",
    "addressLocality": "[City]",
    "addressRegion": "[Region]",
    "postalCode": "[Postal Code]",
    "addressCountry": "[Country]"
  },
  "sameAs": ["[Social URL 1]", "[Social URL 2]"]
}
```

### Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service Name]",
  "description": "[Service description]",
  "provider": {
    "@type": "Organization",
    "name": "[Business Name]"
  },
  "areaServed": "[Service area]",
  "serviceType": "[Service category]"
}
```

### BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "[URL]"},
    {"@type": "ListItem", "position": 2, "name": "[Parent]", "item": "[URL]"},
    {"@type": "ListItem", "position": 3, "name": "[Current Page]"}
  ]
}
```

### FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text — plain text, no HTML]"
      }
    }
  ]
}
```

## Metadata Comment Format
In each markdown page file, schema info is noted as:
```html
<!-- schema_type: Service -->
<!-- schema_additional: FAQPage, BreadcrumbList -->
```
The developer will use these to inject the actual JSON-LD.
