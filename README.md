# TechCorp Solutions - Company Profile Theme

A modern, professional company profile website built with Next.js 14, TypeScript, and Tailwind CSS. Optimized for performance, SEO, and Core Web Vitals.

## ✨ Features

- 🚀 **Next.js 14 App Router** - Latest React framework with server components
- 🎨 **Tailwind CSS** - Modern utility-first CSS framework
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Performance Optimized** - LCP, CLS, and INP optimizations
- 🔍 **SEO Ready** - Complete SEO setup with metadata and structured data
- 🎯 **Core Web Vitals** - Optimized for Google PageSpeed Insights
- 🧩 **Component-Based** - Reusable and maintainable code structure
- 📝 **Easy Customization** - Content managed through configuration files
- 🌐 **Semantic HTML** - Accessible and SEO-friendly markup

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/company-profile-theme.git
cd company-profile-theme
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
company-profile-theme/
├── app/                          # Next.js App Router
│   ├── (site)/                  # Route group
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── projects/           # Projects page
│   │   ├── services/           # Services page
│   │   └── page.tsx            # Home page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   ├── robots.ts               # SEO robots
│   └── sitemap.ts              # SEO sitemap
├── components/                  # React components
│   ├── layout/                 # Layout components
│   ├── sections/               # Page sections
│   └── ui/                     # Reusable UI components
├── lib/                        # Utility libraries
│   ├── data.ts                 # Static content
│   ├── seo.ts                  # SEO helpers
│   └── utils.ts                # Utility functions
├── public/                     # Static assets
├── documentation/              # Theme documentation
└── package.json               # Dependencies
```

## 🎨 Customization

### Content Management

All website content is managed through `lib/data.ts`. Update this file to customize:

- Company information
- Navigation menu
- Services and projects
- Contact details
- Social media links

### Color Scheme

Update colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
      }
    }
  }
}
```

### Adding New Pages

1. Create a new folder in `app/(site)/`
2. Add a `page.tsx` file
3. Update navigation in `lib/data.ts`
4. Add to sitemap in `app/sitemap.ts`

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Static Hosting

1. Build the project: `npm run build`
2. Deploy the `.next` folder to any static hosting service

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🎯 Performance Features

### Core Web Vitals Optimization

- **LCP (Largest Contentful Paint)**: Optimized hero section with priority images
- **CLS (Cumulative Layout Shift)**: Explicit image dimensions and stable layouts
- **INP (Interaction to Next Paint)**: Server components and minimal client-side JavaScript

### Image Optimization

- Next.js Image component with automatic format conversion
- Responsive images with proper sizing
- Lazy loading for below-the-fold images
- WebP/AVIF format support

### SEO Features

- Automatic sitemap generation
- Robots.txt configuration
- Structured data (JSON-LD)
- Open Graph and Twitter Card meta tags
- Semantic HTML5 markup

## 🧩 Components

### Layout Components

- `Header` - Navigation with mobile menu
- `Footer` - Site footer with links and information

### Section Components

- `Hero` - Optimized hero section
- `ServicesPreview` - Services overview
- `ProjectsPreview` - Portfolio preview
- `CTA` - Call-to-action section

### UI Components

- `Button` - Reusable button with variants
- `Card` - Flexible card component
- `Input` - Form input with validation

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This theme is licensed under the MIT License.

## 🤝 Support

For support and questions:

- 📧 Email: support@techcorp.example.com
- 📖 Documentation: Check the `documentation/` folder
- 💬 Issues: Report via ThemeForest comments

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**TechCorp Solutions** - Transform your digital presence with our professional company profile theme.
