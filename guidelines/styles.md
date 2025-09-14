# The Creative Horse — Website Brand & Design Guidelines

## 1. Website Visual Identity

### Color Palette
Expanded digital palette:

| Role             | HEX      | RGB                | CMYK               | Usage |
|------------------|----------|--------------------|--------------------|-------|
| **Primary Blue** | #007BFF  | 0, 123, 255        | 100, 52, 0, 0      | Buttons, CTAs, links |
| **Deep Navy**    | #0A1F44  | 10, 31, 68         | 100, 88, 44, 52    | Headers, background sections |
| **Sky Blue**     | #00CFFF  | 0, 207, 255        | 60, 0, 10, 0       | Accents, gradients |
| **Dark Gray**    | #333333  | 51, 51, 51         | 0, 0, 0, 80        | Body text |
| **Light Gray**   | #F5F7FA  | 245, 247, 250      | 2, 1, 0, 0         | Backgrounds, cards |
| **White**        | #FFFFFF  | 255, 255, 255      | 0, 0, 0, 0         | Backgrounds, text contrast |
| **Accent Lime**  | #A3FF12  | 163, 255, 18       | 38, 0, 93, 0       | Highlights, hover states |

Approved Combinations:
- Primary Blue (#007BFF) on White for CTA buttons.
- White text on Deep Navy backgrounds.
- Accent Lime used sparingly (hover states, icons, highlight text).

### Typography
- **Primary Font:** Roboto (Headings, CTAs)
- **Secondary Font:** Inter (Body, UI text, captions)
- **Backup Fonts:** Arial, sans-serif

| Usage       | Font   | Weight/Style | Example |
|-------------|--------|--------------|---------|
| H1          | Roboto | Bold, 48–60px | Hero headline |
| H2          | Roboto | Semi-Bold, 32–40px | Section titles |
| H3          | Roboto | Medium, 24–28px | Subtitles, cards |
| Body Text   | Inter  | Regular, 16–18px | Paragraphs |
| Small Text  | Inter  | Regular, 14px | Captions, disclaimers |
| CTA Buttons | Roboto | Bold, 16–18px (all caps) | “Get a Free Audit” |

### Logo Usage Rules
- Safe Zone: Clear space = height of the “C” around all sides.
- Minimum Size: 120px width (digital).
- Backgrounds:
  - Primary logo on white/light backgrounds.
  - Inverted (white text, blue horse) on dark/navy backgrounds.
- Misuse Examples:
  - Don’t stretch or skew.
  - Don’t change colors.
  - Don’t place on busy imagery without a solid background/overlay.

### Icons & Visuals
- **Style:** Line-based with geometric angles (to match polygonal horse).
- **Icon Sets:** Use Feather Icons or Heroicons.
- **Photography:** Conceptual/abstract (technology, creativity, motion). No stocky smiling office teams.
- **Illustrations:** Abstract geometric, gradient overlays, or AI-themed minimal vectors.
- **Imagery Dimensions:**
  - Hero image: 1920x1080 px
  - Section banners: 1600x600 px
  - Card images: 600x400 px

---

## 2. Gradients & Visual Assets

### Gradient Palette
- **Blue → Navy:** `linear-gradient(135deg, #00CFFF 0%, #0A1F44 100%)`
- **Blue → Lime:** `linear-gradient(90deg, #007BFF 0%, #A3FF12 100%)`

Usage:
- Hero backgrounds, CTA section backgrounds, hover overlays, subtle dividers.

### Asset Requirements
| Asset Type   | Preferred Format | Dimensions | Optimization |
|--------------|------------------|------------|--------------|
| Logo         | SVG + PNG        | Scalable   | <100kb |
| Icons        | SVG              | 24–64px    | Inline or sprite |
| Buttons      | CSS (preferred) / PNG backup | Flexible | Minimal shadow |
| Illustrations| SVG / WebP       | 800x600 px | <150kb |
| Hero Images  | JPG / WebP       | 1920x1080 px | <400kb |
| Videos       | MP4 / WebM       | 1920x1080 px | <2MB, lazy-load |

---

## 3. Layout, Navigation & Structure

### Layout Grid
- **Desktop:** 12-column, 1440px max width, 80px side padding.
- **Tablet:** 8-column, 1024px width, 40px padding.
- **Mobile:** 4-column, 375–768px width, 20px padding.

Spacing Rules:
- Section padding: 80px desktop / 40px mobile.
- Component spacing: 24–32px.
- Consistent white space for minimal, classy feel.

### Site Structure
**Header/Nav:**
- Logo (left)
- Nav items: Home, Services, Portfolio, About, Blog, Contact
- CTA Button: **Get a Free Audit**

**Footer:**
- Quick Links (same as nav)
- Services list
- Contact info (phone, email, address)
- Social links (LinkedIn, Instagram)
- Small disclaimer + copyright

### User Journey Guidelines
- **Primary CTA:** “Get a Free Audit” (sticky in header + hero section).
- **Secondary CTAs:** “Book a Call,” “View Portfolio,” “Download Case Study.”
- **Forms:**
  - Input fields: Rounded corners 6px, 16px padding.
  - Error messages: Red (#FF3B30), concise (“Please enter a valid email”).
  - Success: Green highlight (#00C853), message “Thanks! We’ll be in touch within 24h.”

---

## 4. UX/UI, Functionality & Content

### Page Templates
- **Home:** Hero → Services overview → Case studies → Testimonials → CTA.
- **Services:** Individual service pages with problem → solution → proof → CTA.
- **Portfolio:** Grid of projects, filterable by category.
- **About:** Story + values + team (minimalistic).
- **Blog:** SEO-friendly, featured images, clean cards.
- **Contact:** Short form + map + contact info.

### Reusable UI Components
- **Cards:** Rounded corners 8px, drop shadow subtle (#0000001A).
- **Lists:** Bulleted with blue accent icons.
- **Buttons:**
  - Primary: Solid Blue (#007BFF), white text.
  - Secondary: Outline Blue, hover fill.
  - Tertiary: Text-only links with underline on hover.

### Microcopy Standards
- **Buttons:** Always action-oriented → “Start Your Audit,” “See Portfolio,” “Get Started.”
- **Form Labels:** Short & direct → “Email,” “Company Name.”
- **Error Messages:** Human tone → “Oops, that email doesn’t look right.”
- **Navigation Labels:** One-word if possible → Services, Portfolio, Blog.

### Content Rules
- **Headings:** Max 10 words, benefit-driven.
- **Paragraphs:** Max 60–80 words, scannable.
- **CTAs:** Every page ends with one clear CTA.
- **Contact Info:** Always visible in footer + contact page.
