# Travalo - Travel Booking Application

Travalo is a modern, responsive travel booking web application built with **React** and **Vite**. It provides users with an intuitive interface to explore travel destinations, view trips, watch travel videos, and discover travel brands.

## 🌟 Features

- **Navigation Bar** - Responsive navigation with smooth scrolling
- **Hero Banner** - Eye-catching banner section with call-to-action
- **Destination Cards** - Browse popular travel destinations with detailed information
- **Video Section** - Embedded travel videos for inspiration
- **Brands Section** - Partner travel brands and services
- **Trips Section** - Featured trip packages with carousel navigation
- **Footer** - Comprehensive footer with links and information
- **Scroll Effects** - Dynamic theme switching based on scroll position
- **Responsive Design** - Fully responsive layout for all device sizes
- **Smooth Animations** - Beautiful animations powered by Framer Motion

## 🚀 Tech Stack

### Frontend
- **React 19.2** - UI library for building components
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Sass** - Advanced CSS preprocessing

### Data & State Management
- **React Query** - Server state management
- **Axios** - HTTP client for API requests
- **JSON Server** - Mock API server for development

### UI Components & Libraries
- **Swiper** - Touch-friendly carousel component
- **React Player** - Video player component
- **React Icons** - Icon library
- **React Spinners** - Loading spinners
- **React Hot Toast** - Toast notifications

### Form & Animation
- **Formik** - Form validation library
- **Framer Motion** - Animation library
- **React Fast Marquee** - Marquee component for scrolling text

### Development Tools
- **ESLint** - Code quality and linting
- **Babel** - JavaScript transpiler
- **React Compiler** - Performance optimization

## 📁 Project Structure

```
Travalo/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── arrowsBanner/     # Arrow navigation banner
│   │   ├── bannerSection/    # Main hero banner
│   │   ├── brandsSection/    # Partner brands showcase
│   │   ├── destinationCard/  # Individual destination card
│   │   ├── destinationSection/ # Destinations grid
│   │   ├── footer/           # Footer component
│   │   ├── headerSection/    # Header component
│   │   ├── navBar/           # Navigation bar
│   │   ├── paginationBanner/ # Pagination controls
│   │   ├── slideBanner/      # Slide carousel banner
│   │   ├── tripsCard/        # Individual trip card
│   │   ├── tripsSection/     # Trips carousel section
│   │   └── videoSection/     # Video player section
│   ├── pages/
│   │   └── HomePage/         # Main home page
│   ├── styles/               # Global styles
│   │   ├── main.scss         # Main stylesheet
│   │   ├── reset.scss        # CSS reset
│   │   └── components/       # Component-specific styles
│   ├── assets/               # Images and static files
│   │   ├── icons/            # Icon assets
│   │   └── video/            # Video assets
│   ├── App.jsx               # Main App component
│   └── main.jsx              # Application entry point
├── public/                   # Public static files
├── index.html                # HTML entry point
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Install Dependencies
```bash
npm install
```

## 📝 Available Scripts

### Development Server
```bash
npm run dev
```
Starts the Vite development server with Hot Module Replacement (HMR). Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production
```bash
npm run build
```
Compiles the React application for production and optimizes the build.

### Preview Production Build
```bash
npm run preview
```
Previews the production build locally before deployment.

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality and identify issues.

### Start Mock Server
```bash
npm run db
```
Starts JSON Server to serve mock data from `src/db.json`. Useful for development and testing without a real backend.

## 🎨 Styling

The project uses **Sass** for advanced styling capabilities:
- **Global Styles** - Located in `src/styles/main.scss` and `reset.scss`
- **Component Styles** - Modular styles in `src/styles/components/`
- **Responsive Design** - Mobile-first approach with media queries

## 🔄 Component Flow

```
App
└── HomePage
    ├── NavBar
    ├── BannerSection
    ├── DestinationSection (with DestinationCard)
    ├── VideoSection
    ├── BrandsSection
    ├── TripsSection (with TripsCard, Swiper)
    └── Footer
```

## 📱 Responsive Behavior

The application is fully responsive and includes:
- Mobile-friendly navigation
- Touch-friendly touch swiper carousels
- Responsive grid layouts
- Mobile-optimized component styling

## 🔧 Performance Optimizations

- React Compiler enabled for automatic optimization
- Vite for fast development and optimized builds
- Lazy loading components (where applicable)
- Efficient CSS with Sass

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.5 | UI Framework |
| vite | ^8.0.9 | Build Tool |
| react-router-dom | ^7.15.0 | Routing |
| @tanstack/react-query | ^5.100.10 | Data Fetching |
| axios | ^1.15.2 | HTTP Client |
| swiper | ^12.1.4 | Carousel |
| framer-motion | ^12.38.0 | Animations |
| formik | ^2.4.9 | Form Management |
| sass | ^1.99.0 | CSS Preprocessing |

## 🚀 Deployment

The project can be deployed to any static hosting service:
- **Vercel** - Recommended for Vite projects
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

Build command: `npm run build`
Output directory: `dist/`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📞 Support

For questions or support, please open an issue on the project repository.

---

**Happy Traveling! ✈️**
