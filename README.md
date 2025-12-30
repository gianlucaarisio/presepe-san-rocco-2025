# 🎄 Presepe San Rocco 2025

An interactive audio guide web application for the Nativity scene at San Rocco Church. This mobile-first web app provides visitors with a rich multimedia experience, combining beautiful narrative text with an integrated audio guide to explore the story of the Angels in the Nativity.

<p align="center">
  <img src="./public/San-Rocco-2025-Angelo.webp" alt="Presepe San Rocco 2025" width="300">
</p>

## ✨ Features

- 📱 **Mobile-First Design** - Optimized for smartphone viewing during church visits
- 🎵 **Integrated Audio Player** - Sticky audio player with full playback controls (play, pause, seek, duration)
- 📖 **Rich Narrative Content** - Beautifully formatted story sections with multiple content types:
  - Main title and introduction
  - Chapters with visual accents
  - Biblical quotes with elegant styling
  - Prayers and reflections
  - Smooth transitions and outro
- ⚡ **Server-Side Rendering (SSR)** - Fast initial page loads and SEO-friendly
- 🚀 **Modern Tech Stack** - Built with Vite, React 19, TypeScript, and TailwindCSS
- 📊 **Analytics Integration** - Vercel Analytics and Cloudflare Web Analytics
- 🎨 **Premium Design** - Custom CSS variables, smooth animations, and glassmorphism effects
- ♿ **Accessible** - Semantic HTML, proper ARIA labels, and keyboard navigation

## 🛠️ Tech Stack

### Core Technologies

- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Routing & Navigation

- **[React Router v6](https://reactrouter.com/)** - Client-side routing with SSR support

### Server & Deployment

- **[Express.js](https://expressjs.com/)** - Node.js server for SSR
- **[Vercel](https://vercel.com/)** - Serverless deployment platform
- **Custom SSR Setup** - Separate client and server entry points for optimal performance

### Analytics

- **Vercel Analytics** - Performance and usage metrics
- **Cloudflare Web Analytics** - Privacy-friendly visitor tracking

## 📁 Project Structure

```
presepe-san-rocco-2025/
├── public/                          # Static assets
│   ├── Presepe_2025_audio.m4a      # Audio guide file (~4MB)
│   └── San-Rocco-2025-Angelo.webp  # Favicon and OG image
├── src/
│   ├── components/                  # React components
│   │   ├── AudioPlayer.tsx         # Sticky audio player component
│   │   ├── Header.tsx              # Page header
│   │   └── Layout.tsx              # Main layout wrapper
│   ├── pages/                       # Page components
│   │   ├── Home.tsx                # Main narrative page
│   │   └── NotFound.tsx            # 404 page
│   ├── constants/                   # Content and configuration
│   │   └── index.ts                # Narrative content data
│   ├── hooks/                       # Custom React hooks
│   ├── assets/                      # Images and resources
│   ├── App.tsx                      # Main App component with routing
│   ├── index.css                    # Global styles and CSS variables
│   ├── entry-client.tsx            # Client-side entry point
│   └── entry-server.tsx            # Server-side entry point
├── api/
│   └── index.js                     # Vercel serverless function
├── server.js                        # Express SSR server
├── startServer.js                   # Development server starter
├── index.html                       # HTML template with SEO meta tags
├── vercel.json                      # Vercel deployment configuration
├── vite.config.ts                   # Vite configuration
├── tailwind.config.js               # TailwindCSS configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json                     # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended 20+)
- **npm** 7+ (or yarn/pnpm)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/presepe-san-rocco-2025.git
   cd presepe-san-rocco-2025
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## 📜 Available Scripts

| Script                 | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start development server with HMR at port 5173      |
| `npm run build`        | Build both client and server bundles for production |
| `npm run build:client` | Build client bundle only                            |
| `npm run build:server` | Build SSR server bundle only                        |
| `npm run preview`      | Preview production build locally                    |
| `npm run lint`         | Run ESLint with zero warnings policy                |
| `npm run lint:fix`     | Auto-fix linting issues                             |
| `npm run type-check`   | Run TypeScript type checking                        |
| `npm run format`       | Format code with Prettier                           |
| `npm run format:check` | Check code formatting                               |
| `npm run test`         | Run all checks (lint + type-check + format)         |
| `npm run clean`        | Remove dist and node_modules directories            |

## 🏗️ Build & Production

### Build Process

The application uses a dual-build approach for SSR:

1. **Client Build** - Creates optimized client bundle with code splitting
2. **Server Build** - Creates SSR entry point for server-side rendering

```bash
npm run build
```

This generates:

- `dist/client/` - Static assets and client-side JavaScript
- `dist/server/` - Server-side rendering bundle

### Local Preview

To test the production build locally:

```bash
npm run preview
```

This starts the Express server with the production build.

## 🌐 Deployment

### Vercel (Recommended)

The app is configured for Vercel deployment with SSR support:

1. **Connect your repository** to Vercel
2. **Configure build settings** (already set in `vercel.json`):

   - Build Command: `npm run build`
   - Output Directory: `dist/client`
   - Install Command: `npm install`

3. **Deploy**:
   ```bash
   npx vercel
   ```

The `vercel.json` configuration handles serverless function routing and includes the necessary build artifacts.

### Environment Variables

The application uses the following environment variables in production:

- `NODE_ENV=production` - Automatically set by hosting platforms
- `PORT` - Server port (default: 5173 in dev, dynamic in production)

## 🎨 Design System

### CSS Custom Properties

The application uses a custom design system with CSS variables for consistent theming:

```css
--color-bg-primary: #f8fafc; /* Light background */
--color-text-primary: #1e293b; /* Dark text */
--color-accent-start: #fecaca; /* Gradient start (soft red) */
--color-accent-end: #dc2626; /* Gradient end (vibrant red) */
```

### Content Types

The narrative content supports multiple block types for rich storytelling:

- **main-title** - Page title with decorative accent
- **intro** - Introduction paragraph
- **chapter** - Section with border accent
- **transition** - Italic bridge text
- **quote** - Styled blockquote with attribution
- **prayer** - Centered prayer with gradient background
- **reflection** - Bordered reflection section
- **outro** - Footer with emoji and message

## 🔧 Configuration Files

### TypeScript Configuration

- `tsconfig.json` - Main TypeScript config for the app
- `tsconfig.node.json` - TypeScript config for Node.js scripts

### ESLint

The project uses strict ESLint rules with:

- TypeScript ESLint plugin
- React hooks rules
- React Refresh plugin
- Zero warnings policy (`--max-warnings=0`)

### Prettier

Code formatting is enforced with Prettier for consistent style across the codebase.

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- ES2020+ JavaScript support required

## ⚡ Performance

- **Server-Side Rendering** - Fast Time to First Byte (TTFB)
- **Code Splitting** - Optimized bundle sizes
- **Compression** - Gzip compression enabled
- **Static Asset Caching** - Long-term caching for public assets
- **Image Optimization** - WebP format for images

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm run test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Standards

- Follow the existing code style
- Run `npm run format` before committing
- Ensure `npm run test` passes
- Add TypeScript types for all new code
- Update documentation as needed

## 📄 License

This project is created for San Rocco Church. All rights reserved.

## 🙏 Acknowledgments

- **San Rocco Church** - For the beautiful Nativity scene
- **Content Authors** - For the narrative and audio guide
- **Open Source Community** - For the amazing tools and libraries

## 📞 Contact

For questions or support, please contact the San Rocco Church office.

---

**Made with ❤️ for the San Rocco community**
