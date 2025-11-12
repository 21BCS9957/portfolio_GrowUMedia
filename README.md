# GrowU Media - Video Editor Hiring Platform

A modern, animated video editor hiring platform built with Next.js 14, TypeScript, and Tailwind CSS 4. Features three experience-based tiers with portfolio showcases and smooth animations.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## 🎬 Features

- **Three Editor Tiers**: Standard (6 months), Premium (1 year), Premium+ (2+ years)
- **Dynamic Pricing**: Monthly/Yearly toggle with animated price transitions
- **Portfolio Pages**: Detailed pages for each tier with content type examples
- **Smooth Animations**: Scroll-based reveals, particle effects, and motion graphics
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **TypeScript**: Type-safe codebase with zero errors
- **Modern Stack**: Next.js 14 App Router, Tailwind CSS 4, Framer Motion

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/21BCS9957/portfolio_GrowUMedia.git

# Navigate to project directory
cd portfolio_GrowUMedia

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
portfolio_GrowUMedia/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Main pricing page
│   │   ├── editors/
│   │   │   ├── standard/page.tsx       # Standard tier portfolio
│   │   │   ├── premium/page.tsx        # Premium tier portfolio
│   │   │   └── premium-plus/page.tsx   # Premium+ tier portfolio
│   │   └── globals.css                 # Global styles
│   ├── components/
│   │   └── ui/
│   │       ├── pricing-section-4.tsx   # Main pricing component
│   │       ├── card.tsx                # Card component
│   │       ├── sparkles.tsx            # Particle effects
│   │       ├── vertical-cut-reveal.tsx # Text animations
│   │       └── timeline-animation.tsx  # Scroll animations
│   └── lib/
│       └── utils.ts                    # Utility functions
├── public/                             # Static assets
└── package.json
```

## 💰 Pricing Tiers

| Tier | Monthly | Yearly | Experience |
|------|---------|--------|------------|
| **Standard** | $600 | $7,000 | 6 months |
| **Premium** | $1,200 | $14,000 | 1 year |
| **Premium+** | $2,200 | $21,000 | 2+ years |

## 🎨 Customization

### Update Pricing

Edit `src/components/ui/pricing-section-4.tsx`:

```tsx
const plans = [
  {
    name: "Standard",
    price: 600,        // Monthly price
    yearlyPrice: 7000, // Yearly price
    // ...
  }
];
```

### Add Content Types

Edit any editor page (e.g., `src/app/editors/standard/page.tsx`):

```tsx
const contentTypes = [
  {
    title: "Your Content Type",
    description: "Description here",
    examples: [
      { title: "Example 1", url: "youtube_url" },
      { title: "Example 2", url: "youtube_url" },
    ],
  },
];
```

### Change Colors

The project uses Tailwind CSS. Key color classes:
- Primary: `blue-500`, `blue-600`
- Background: `neutral-900`, `neutral-800`
- Text: `gray-300`, `white`

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: Custom components following shadcn/ui patterns
- **Particles**: [@tsparticles/react](https://particles.js.org/)
- **Number Animations**: [@number-flow/react](https://number-flow.barvian.me/)

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "framer-motion": "^11.0.0",
    "motion": "^10.0.0",
    "@number-flow/react": "^0.2.0",
    "@tsparticles/react": "^3.0.0",
    "@tsparticles/slim": "^3.0.0",
    "tailwindcss": "^4.0.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  }
}
```

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/21BCS9957/portfolio_GrowUMedia)

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Roadmap

- [ ] Add real video portfolio examples
- [ ] Implement contact/booking forms
- [ ] Add individual editor profiles
- [ ] Integrate payment processing (Stripe)
- [ ] Add client testimonials
- [ ] Implement search and filtering
- [ ] Add admin dashboard
- [ ] Create blog section
- [ ] Add analytics tracking

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Satyam Tripathi**
- GitHub: [@21BCS9957](https://github.com/21BCS9957)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS pricing pages
- Animation components adapted from various open-source projects
- Built with love for GrowU Media

---

Made with ❤️ by [GrowU Media](https://github.com/21BCS9957/portfolio_GrowUMedia)
