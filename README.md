# 🎨 React Task Manager - Modern Full-Stack Application

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.6-cyan.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A comprehensive React application demonstrating modern development practices with Tailwind CSS, API integration, and responsive design. Built for PLP Academy Full-Stack Development Program.

## 🚀 Live Demo

🔗 **[View Live Application](https://your-deployment-url.vercel.app)** *(Replace with actual deployment URL)*

## 📸 Screenshots

### Desktop View (Light Theme)
![Desktop Light Theme](./screenshots/desktop-light.png)

### Desktop View (Dark Theme)
![Desktop Dark Theme](./screenshots/desktop-dark.png)

### Mobile Responsive Design
![Mobile View](./screenshots/mobile-view.png)

*Screenshots will be added after deployment*

## ✨ Features

### 🎯 Core Functionality
- **Task Management**: Create, complete, delete, and filter tasks
- **API Integration**: Real-time data fetching from multiple APIs
- **Search & Pagination**: Advanced data exploration capabilities
- **Responsive Design**: Mobile-first, works on all devices
- **Dark/Light Theme**: System-aware theme switching with persistence

### 🛠️ Technical Features
- **Modern React**: Hooks, Context API, and functional components
- **TypeScript Support**: Full type safety (optional enhancement)
- **Performance Optimized**: Debounced searches, lazy loading, memoization
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Local Storage**: Persistent data across browser sessions

### 🎨 UI/UX Features
- **Smooth Animations**: CSS transitions and keyframe animations
- **Loading States**: Skeleton screens and spinners
- **Interactive Elements**: Hover effects, focus states, and micro-interactions
- **Professional Design**: Modern card-based layout with consistent spacing
- **Custom Components**: Reusable, configurable UI components

## 🏗️ Architecture

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Multi-variant button component
│   ├── Card.jsx        # Compound card component
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Loading.jsx     # Loading states and skeletons
│   ├── Navbar.jsx      # Navigation with mobile support
│   ├── Footer.jsx      # Site footer
│   └── TaskManager.jsx # Task management component
├── pages/              # Page-level components
│   ├── HomePage.jsx    # Landing page
│   ├── TasksPage.jsx   # Task management page
│   ├── ApiDataPage.jsx # API data exploration
│   └── AboutPage.jsx   # Project information
├── hooks/              # Custom React hooks
│   └── index.js        # useLocalStorage, useDebounce, etc.
├── context/            # React context providers
│   └── ThemeContext.jsx# Theme management
├── api/                # API service functions
│   └── index.js        # API clients and utilities
├── utils/              # Utility functions
│   └── index.js        # Helper functions
├── assets/             # Static assets
│   └── animations.css  # Custom animations
└── App.jsx             # Main application component
```

### Component Architecture
- **Compound Components**: Card with Header, Content, Footer sub-components
- **Render Props**: Flexible component composition patterns
- **Higher-Order Components**: Layout and theme providers
- **Custom Hooks**: Reusable stateful logic
- **Context API**: Global state management for themes

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (or yarn/pnpm)
- **Git**: For cloning the repository

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Github-Emmi.git
   cd react-js-jsx-and-css-mastering-front-end-development-Github-Emmi
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run format` | Format code with Prettier |

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# API Configuration (optional)
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
VITE_DUMMY_API_URL=https://dummyjson.com

# Application Settings
VITE_APP_NAME=React Task Manager
VITE_APP_VERSION=1.0.0

# Development Settings
VITE_DEBUG=true
```

### Customization

#### Theme Colors
Modify `tailwind.config.js` to customize the color palette:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Custom primary color scale
          500: '#your-color',
        },
      },
    },
  },
}
```

#### API Endpoints
Update `src/api/index.js` to use different APIs:

```javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://your-api.com';
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

### Features by Device
- **Mobile**: Collapsible navigation, touch-optimized controls
- **Tablet**: Optimized grid layouts, hover states
- **Desktop**: Full feature set, keyboard shortcuts

## 🎨 Design System

### Color Palette
```css
/* Light Theme */
--color-primary: #3b82f6;
--color-secondary: #64748b;
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;

/* Dark Theme */
--color-bg-primary: #0f172a;
--color-bg-secondary: #1e293b;
--color-text-primary: #f8fafc;
--color-text-secondary: #cbd5e1;
```

### Typography
- **Primary Font**: Inter (400, 500, 600, 700)
- **Monospace Font**: Fira Code
- **Scale**: 14px, 16px, 18px, 20px, 24px, 32px, 48px

### Spacing System
- **Base Unit**: 4px
- **Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Task creation, completion, and deletion
- [ ] API data fetching and search
- [ ] Theme switching persistence
- [ ] Responsive design breakpoints
- [ ] Accessibility with screen readers
- [ ] Error handling for network failures

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Internet Explorer (not supported)

## 🚢 Deployment

### Vercel (Recommended)
1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Deploy** automatically on push to main branch

### Netlify
1. **Build settings**:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
2. **Environment variables**: Add your `.env` variables in Netlify dashboard

### Other Platforms
The application is compatible with any static hosting service:
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- Surge.sh

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Process
1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Code Standards
- **ESLint**: Follow the configured linting rules
- **Prettier**: Use consistent code formatting
- **Commits**: Use conventional commit messages
- **Testing**: Add tests for new features

## 📚 API Documentation

### JSONPlaceholder API
Used for posts, users, and comments data.

**Base URL**: `https://jsonplaceholder.typicode.com`

**Endpoints**:
- `GET /posts` - Fetch all posts
- `GET /users` - Fetch all users
- `GET /comments` - Fetch all comments

### DummyJSON API
Used for products, quotes, and enhanced data sets.

**Base URL**: `https://dummyjson.com`

**Endpoints**:
- `GET /products` - Fetch products with search and pagination
- `GET /quotes` - Fetch inspirational quotes
- `GET /users` - Fetch user profiles

## 🐛 Known Issues

- [ ] **Search delay**: Debounced search may feel slow on fast typing
- [ ] **Image loading**: Product images may occasionally fail to load
- [ ] **iOS Safari**: Minor animation performance issues on older devices

## 🔄 Changelog

### Version 1.0.0 (2024-11-07)
- ✨ Initial release
- 🎉 Complete task management system
- 🌐 API integration with search and pagination
- 🎨 Dark/light theme support
- 📱 Fully responsive design
- ♿ Accessibility improvements

## 🏆 Acknowledgments

- **PLP Academy** - Full-Stack Development Program
- **React Team** - For the amazing React library
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite Team** - For the lightning-fast build tool
- **API Providers** - JSONPlaceholder and DummyJSON for free APIs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **Developer**: PLP Academy Student
- **Program**: Full-Stack Development - Week 3 Assignment
- **Institution**: PLP Academy
- **Year**: 2024

### Get Help
- 📖 **Documentation**: Check this README and inline code comments
- 🐛 **Bug Reports**: Open an issue on GitHub
- 💡 **Feature Requests**: Open a feature request issue
- 📧 **Direct Contact**: [your-email@example.com]

---

<div align="center">
  <strong>Built with ❤️ for PLP Academy</strong>
  <br>
  <sub>Demonstrating modern React development practices</sub>
</div>

---

## 🎯 Assignment Requirements Fulfilled

### ✅ Task 1: Project Setup
- [x] React project with Vite
- [x] Tailwind CSS configuration
- [x] Proper project structure
- [x] React Router setup

### ✅ Task 2: Component Architecture
- [x] Reusable Button component with variants
- [x] Card component with compound pattern
- [x] Navbar with responsive navigation
- [x] Footer with comprehensive links
- [x] Layout component integration

### ✅ Task 3: State Management & Hooks
- [x] TaskManager with full CRUD operations
- [x] useState, useEffect, useContext implementation
- [x] Custom useLocalStorage hook
- [x] ThemeContext for dark/light mode

### ✅ Task 4: API Integration
- [x] JSONPlaceholder API integration
- [x] Loading and error states
- [x] Pagination implementation
- [x] Search functionality
- [x] Multiple API endpoints

### ✅ Task 5: Tailwind CSS Styling
- [x] Responsive design (mobile, tablet, desktop)
- [x] Dark/light theme implementation
- [x] Utility classes for layout and styling
- [x] Hover effects and animations
- [x] Consistent design system

### 🎉 Additional Enhancements
- [x] TypeScript-ready architecture
- [x] Advanced error handling
- [x] Performance optimizations
- [x] Accessibility features
- [x] Professional documentation
- [x] Deployment-ready configuration