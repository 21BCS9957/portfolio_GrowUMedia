# Pricing Component Integration

## Overview
Successfully integrated a modern, animated pricing section component into your Next.js project with TypeScript and Tailwind CSS 4.

## Project Structure

```
src/
├── components/
│   └── ui/
│       ├── card.tsx                    # shadcn Card component
│       ├── sparkles.tsx                # Particle effects component
│       ├── vertical-cut-reveal.tsx     # Text animation component
│       ├── timeline-animation.tsx      # Scroll-based animation wrapper
│       └── pricing-section-4.tsx       # Main pricing component
├── lib/
│   └── utils.ts                        # Utility functions (cn helper)
└── app/
    ├── page.tsx                        # Main page (displays pricing)
    ├── demo/
    │   └── page.tsx                    # Demo page
    └── globals.css                     # Global styles with Tailwind 4

```

## Installed Dependencies

- `motion` - Animation library
- `@number-flow/react` - Animated number transitions
- `@tsparticles/slim` - Particle effects engine
- `@tsparticles/react` - React wrapper for particles
- `framer-motion` - Animation library
- `clsx` - Utility for conditional classNames
- `tailwind-merge` - Merge Tailwind classes

## Component Features

### Pricing Section
- **3 pricing tiers**: Starter, Business, Enterprise
- **Monthly/Yearly toggle**: Animated switch with smooth transitions
- **Animated pricing**: Numbers animate when switching between monthly/yearly
- **Scroll animations**: Elements fade in as you scroll
- **Particle effects**: Sparkles background effect
- **Gradient backgrounds**: Blue gradient overlays
- **Responsive design**: Works on mobile, tablet, and desktop

## Usage

### Main Page
The pricing component is already integrated on the home page at `/`:

```tsx
import PricingSection from "@/components/ui/pricing-section-4";

export default function Home() {
  return (
    <div className="w-full">
      <PricingSection />
    </div>
  );
}
```

### Demo Page
A separate demo page is available at `/demo`:

```tsx
import Component from "@/components/ui/pricing-section-4";

export default function DemoOne() {
  return (
    <div className="w-full">
      <Component />
    </div>
  );
}
```

## Running the Project

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit:
- Main page: http://localhost:3000
- Demo page: http://localhost:3000/demo

## Customization

### Modify Pricing Plans
Edit `src/components/ui/pricing-section-4.tsx` and update the `plans` array:

```tsx
const plans = [
  {
    name: "Your Plan Name",
    description: "Plan description",
    price: 12,              // Monthly price
    yearlyPrice: 99,        // Yearly price
    buttonText: "Get started",
    buttonVariant: "outline",
    popular: false,         // Set to true for highlighted plan
    includes: [
      "Feature category:",
      "Feature 1",
      "Feature 2",
      // ...
    ],
  },
  // Add more plans...
];
```

### Adjust Colors
The component uses Tailwind classes. Key colors:
- Background: `bg-black`
- Cards: `bg-neutral-900`, `bg-neutral-800`
- Accent: `blue-500`, `blue-600`
- Text: `text-white`, `text-gray-300`

### Animation Timing
Adjust animation delays in the `revealVariants` object:

```tsx
const revealVariants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.4,  // Change this value
      duration: 0.5,   // Change animation duration
    },
  }),
  // ...
};
```

## Component Architecture

### shadcn/ui Structure
The project follows shadcn/ui conventions:
- Components in `src/components/ui/`
- Utilities in `src/lib/utils.ts`
- Uses `cn()` helper for className merging

### Why `/components/ui`?
This structure is important because:
1. **Separation of concerns**: UI primitives separate from business logic
2. **Reusability**: Components can be used across the app
3. **shadcn compatibility**: Follows shadcn/ui conventions for easy integration
4. **Maintainability**: Clear organization makes updates easier

## Tailwind CSS 4 Configuration

The project uses Tailwind CSS 4 with the new `@import` syntax. Custom theme variables are defined in `src/app/globals.css`:

```css
@import "tailwindcss";

:root {
  --gradient-color: #8350e8;
  --sparkles-color: #8350e8;
}

@theme inline {
  --color-sparkles-color: var(----sparkles-color);
  --color-gradient-color: var(----gradient-color);
}
```

## Troubleshooting

### Component not rendering?
- Check that all dependencies are installed: `npm install`
- Verify the dev server is running: `npm run dev`
- Check browser console for errors

### Animations not working?
- Ensure `framer-motion` and `motion` are installed
- Check that the component is client-side: `"use client"` directive is present

### Particles not showing?
- Verify `@tsparticles/react` and `@tsparticles/slim` are installed
- Check browser console for initialization errors

## Next Steps

1. **Customize the pricing plans** to match your product
2. **Adjust colors** to match your brand
3. **Add real payment integration** (Stripe, PayPal, etc.)
4. **Connect to your backend** for dynamic pricing
5. **Add analytics tracking** for button clicks
6. **Implement A/B testing** for different pricing strategies

## Support

For issues or questions:
- Check Next.js docs: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs
- Check Framer Motion docs: https://www.framer.com/motion/
