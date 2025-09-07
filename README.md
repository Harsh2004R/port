# Harsh Sharma - Portfolio Website

A modern, responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion. Features dark/light mode, smooth animations, and a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional UI/UX
- **Dark/Light Mode**: Toggle between themes with persistent state
- **Responsive**: Fully responsive design for all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Performance Optimized**: Lazy loading, code splitting, and optimized builds
- **SEO Friendly**: Meta tags, semantic HTML, and accessibility features
- **Error Handling**: Error boundaries and graceful fallbacks

## 🛠️ Tech Stack

- **Frontend**: React.js 18 with functional components and hooks
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite for fast development and optimized builds
- **Icons**: Lucide React for consistent iconography
- **Intersection Observer**: React Intersection Observer for scroll animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshsharma/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- `src/sections/Hero.jsx` - Name, role, and description
- `src/sections/Expertise.jsx` - Skills and technologies
- `src/sections/Work.jsx` - Projects and portfolio items
- `src/sections/Experience.jsx` - Work experience and education
- `src/sections/Contact.jsx` - Contact information and social links

### Styling
- Modify `tailwind.config.js` for custom colors and themes
- Update `src/index.css` for global styles and custom utilities
- Customize component styles in individual component files

### Images
Replace placeholder images in the Work section with your actual project screenshots. Update the image URLs in `src/sections/Work.jsx`.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ErrorBoundary.jsx
│   ├── LoadingSpinner.jsx
│   └── Navbar.jsx
├── contexts/           # React contexts
│   └── ThemeContext.jsx
├── sections/           # Page sections
│   ├── Hero.jsx
│   ├── Expertise.jsx
│   ├── Work.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms
The build creates a static site in the `dist` folder that can be deployed to any static hosting service.

## 🎯 Performance Features

- **Code Splitting**: Lazy loading of sections for faster initial load
- **Image Optimization**: Optimized images with lazy loading
- **Bundle Optimization**: Manual chunks for vendor and animation libraries
- **Tree Shaking**: Unused code elimination
- **CSS Optimization**: Purged unused Tailwind classes

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Harsh Sharma - [@harshsharma](https://twitter.com/harshsharma) - harsh.sharma@example.com

Project Link: [https://github.com/harshsharma/portfolio](https://github.com/harshsharma/portfolio)

---

⭐ Star this repository if you found it helpful!