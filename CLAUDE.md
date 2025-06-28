# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload using tsx
- `npm run build` - Compile TypeScript and start production server
- `npm run lint` - Run ESLint on TypeScript files
- `npm run format` - Format code with Prettier
- `npm run check` - Run lint, format, and TypeScript compilation checks

## Architecture Overview

This is a Node.js/Express backend for the Lupylo application with a dual-database architecture:

### Database Configuration
- **PostgreSQL**: Primary database using Sequelize ORM for relational data (users, products, objectives, etc.)
- **MongoDB**: Secondary database using Mongoose for social features (posts, comments, reactions, notifications)
- Both databases configured in `src/config/` with environment variable support

### Project Structure
- **Models**: Split between `src/models/postgres/` (Sequelize) and `src/models/mongo/` (Mongoose)
- **Repositories**: Data access layer in `src/repositories/` with separation for each database
- **Services**: Business logic layer in `src/services/`
- **Controllers**: HTTP request handlers in `src/controllers/`
- **Routes**: API endpoints defined in `src/routes/`

### Authentication System
- JWT-based authentication with access and refresh tokens
- Email-based login (recently migrated from username)
- Password hashing with bcryptjs
- Token secrets hardcoded in `src/index.ts` (consider moving to environment variables)
- Access token expiration: 1 minute

### Key Technical Details
- TypeScript with ES modules (`"type": "module"` in package.json)
- Path aliases configured (`@/*` maps to `src/*`)
- CORS enabled for `http://localhost:3000`
- Server runs on port 3000
- Database connections established on startup with graceful error handling

### Current State
The project is in transition from username to email-based authentication. MongoDB connection is commented out in the main entry point, suggesting the social features may be in development or temporarily disabled.