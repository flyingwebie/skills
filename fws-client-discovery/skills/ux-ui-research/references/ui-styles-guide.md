# UI Styles Guide, When to Use Each

## Style Descriptions and Applications

### 1. Minimalism
**What**: Clean layouts, ample white space, limited color palette, focus on content.
**Effects**: `border-radius: 0-4px`, subtle shadows, thin borders, monochrome with one accent.
**Best for**: Professional services, luxury, portfolio sites.
**Avoid when**: Brand needs energy, entertainment, or young audience appeal.

### 2. Flat Design
**What**: No shadows, gradients, or 3D effects. Pure color blocks and simple shapes.
**Effects**: Solid fills, no `box-shadow`, crisp edges, bold colors.
**Best for**: Mobile-first apps, dashboards, utility-focused sites.
**Avoid when**: Need to convey premium or depth.

### 3. Glassmorphism
**What**: Frosted glass effect with blur, transparency, and subtle borders.
**Effects**: `backdrop-filter: blur(10px)`, `background: rgba(255,255,255,0.1)`, light borders.
**Best for**: SaaS, fintech, modern tech products.
**Avoid when**: Accessibility is priority (contrast issues), older browser support needed.

### 4. Neumorphism
**What**: Soft, extruded shapes that appear to push out from the background.
**Effects**: Double `box-shadow` (light + dark), matching background color, soft curves.
**Best for**: Personal projects, experimental designs, dashboard widgets.
**Avoid when**: Any commercial site needing strong contrast and accessibility.

### 5. Neubrutalism
**What**: Bold borders, raw aesthetics, visible structure, intentionally "undesigned."
**Effects**: `border: 2-4px solid black`, offset shadows, bright accent colors, mono fonts.
**Best for**: Startups, creative tech, developer tools, Web3.
**Avoid when**: Conservative industries (law, finance, healthcare).

### 6. Dark Mode
**What**: Dark backgrounds with light text. Reduces eye strain, feels modern.
**Effects**: Background `#0D1117-#1A1A2E`, light text `#C9D1D9-#E0E0E0`, colored accents.
**Best for**: Creative agencies, developer tools, entertainment, portfolio.
**Avoid when**: Healthcare, finance, education (unless as optional toggle).

### 7. Bento Grid
**What**: Grid layout with varied card sizes, like a Japanese bento box.
**Effects**: CSS Grid with `grid-template` variations, `gap: 16-24px`, rounded cards.
**Best for**: Feature showcases, dashboards, Apple-style product pages.
**Avoid when**: Content-heavy text pages, blogs, simple service sites.

### 8. Corporate Modern
**What**: Clean, professional with subtle modern touches. Safe but not boring.
**Effects**: Light shadows, 4-8px radius, blue/gray palette, structured layouts.
**Best for**: B2B, enterprise, consulting, financial services.
**Avoid when**: Need to stand out in creative industry.

### 9. Card-Based
**What**: Content organized in distinct cards with consistent structure.
**Effects**: `border-radius: 8-12px`, `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`, hover lift.
**Best for**: E-commerce, directories, portfolios, blog listings.
**Avoid when**: Long-form content, narrative pages.

### 10. Swiss/International
**What**: Grid-based, typographic focus, asymmetric layouts, strong hierarchy.
**Effects**: Strict grid, generous white space, large type, minimal decoration.
**Best for**: Architecture, design agencies, high-end professional services.
**Avoid when**: Need warmth, approachability, or casual feel.

### Style Selection Matrix

| Industry | Primary Style | Secondary Style | Avoid |
|----------|--------------|----------------|-------|
| Law/Accounting | Corporate Modern | Minimalism | Neubrutalism, Dark Mode |
| Healthcare | Minimalism | Flat Design | Glassmorphism, Dark Mode |
| SaaS/Tech | Glassmorphism | Bento Grid | Neumorphism |
| E-commerce | Card-Based | Flat Design | Swiss |
| Restaurant | Warm Minimalism | Card-Based | Corporate Modern |
| Construction | Corporate Modern | Card-Based | Glassmorphism |
| Creative Agency | Swiss | Dark Mode | Corporate Modern |
| Education | Flat Design | Card-Based | Neubrutalism |
| Finance | Corporate Modern | Minimalism | Neubrutalism, Dark Mode |
| Luxury | Minimalism | Swiss | Flat Design, Neubrutalism |
