# Shawarma Royale Restaurant Website

## Overview

This is a modern restaurant website for Shawarma Royale, built as a full-stack web application. The project features a React frontend with a sophisticated UI component system and an Express.js backend with PostgreSQL database integration. The site showcases the restaurant's menu, provides ordering integration with third-party delivery services, and includes a responsive design optimized for both desktop and mobile experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables for theming
- **Animations**: Framer Motion for smooth interactions and micro-animations
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Storage**: PostgreSQL sessions using connect-pg-simple
- **Build System**: esbuild for server bundling, tsx for development

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured for Neon serverless deployment
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Drizzle Kit for database schema management
- **Session Storage**: PostgreSQL-backed sessions for user state persistence
- **Development Fallback**: In-memory storage implementation for development/testing

### Authentication and Authorization
- **Session-based Authentication**: Using express-session with PostgreSQL store
- **User Schema**: Username/password authentication with unique constraints
- **Type Safety**: Zod schemas for validation and TypeScript types generated from database schema

### Design System and Styling
- **Component System**: shadcn/ui with "new-york" style variant
- **Theme Architecture**: CSS custom properties with light/dark mode support
- **Typography**: Custom font stack including DM Sans, Fira Code, and Geist Mono
- **Color System**: HSL-based color tokens with semantic naming (primary, secondary, accent, muted)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Development and Build Tools
- **Package Manager**: npm with lockfile version 3
- **TypeScript Configuration**: Strict mode with path mapping for clean imports
- **Linting and Formatting**: Built-in TypeScript checking
- **Development Server**: Vite with HMR and runtime error overlay
- **Replit Integration**: Cartographer plugin for Replit-specific development features

### Application Features
- **Restaurant Menu Display**: Dynamic menu cards with images and descriptions
- **Delivery Integration**: Direct links to Skip The Dishes and Uber Eats
- **Responsive Navigation**: Mobile-friendly header with collapsible menu
- **Smooth Animations**: Hover effects and page transitions using Framer Motion
- **Toast Notifications**: User feedback system with custom toast components

## External Dependencies

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL for production deployment
- **Environment Configuration**: DATABASE_URL required for database connectivity

### UI and Component Libraries
- **Radix UI**: Comprehensive set of accessible component primitives
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icons including social media (SiUber, SiTiktok)
- **Embla Carousel**: Carousel functionality for content display

### Development and Build Tools
- **Vite**: Fast build tool with React plugin and runtime error modal
- **Drizzle Kit**: Database schema management and migration tools
- **Class Variance Authority**: Type-safe variant API for component styling
- **clsx & tailwind-merge**: Conditional class name utilities

### Animation and Interaction
- **Framer Motion**: Animation library for smooth UI transitions
- **CMDK**: Command palette functionality
- **Date-fns**: Date manipulation utilities

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **Drizzle-Zod**: Integration between Drizzle ORM and Zod validation

### Third-party Service Integrations
- **Skip The Dishes**: Delivery service integration via direct linking
- **Uber Eats**: Food delivery platform integration
- **Google Fonts**: Typography loading (Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Unsplash**: Image hosting for menu item photography