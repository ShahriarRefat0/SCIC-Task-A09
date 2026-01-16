# 🍰 SweetCakes - Premium Online Bakery

A modern, feature-rich e-commerce web application for ordering custom cakes, built with Next.js 15 and the latest web technologies.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 🌟 Live Demo

- **Live Site:** [SweetCakes Demo](https://scic-task-a09.vercel.app)
- **GitHub Repository:** [https://github.com/ShahriarRefat0/SCIC-Task-A09.git](https://github.com/ShahriarRefat0/SCIC-Task-A09.git)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Authentication](#-authentication)
- [API Routes](#-api-routes)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### Core Functionality

- **🏠 Landing Page** - Fully responsive homepage with 7+ sections
  - Hero section with call-to-action
  - Featured products showcase
  - Product categories
  - Why Choose Us section
  - How It Works process timeline
  - Customer testimonials carousel
  - Special offers & newsletter subscription

- **🔐 Authentication System**
  - Mock login with hardcoded credentials
  - Cookie-based session management
  - Protected routes with middleware
  - NextAuth.js integration (optional)
  - Google OAuth support (optional)

- **🛍️ Product Features**
  - Browse all cakes with filtering
  - Detailed product view pages
  - Dynamic routing (`/items/[id]`)
  - Real-time search functionality
  - Category-based filtering

- **➕ Admin Features** (Protected)
  - Add new products
  - Form validation
  - Image upload support
  - Toast notifications on success

- **📄 Static Pages**
  - About page with company story
  - Contact page with form and map
  - FAQ section

### UI/UX Features

- **🎨 Modern Design**
  - Framer Motion animations
  - Lucide React icons
  - Gradient backgrounds
  - Glassmorphism effects
  - Smooth transitions

- **📱 Fully Responsive**
  - Mobile-first approach
  - Tablet optimization
  - Desktop layouts

- **♿ Accessibility**
  - Semantic HTML
  - ARIA labels
  - Keyboard navigation

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Form Handling:** React Hooks

### Backend
- **API:** Express.js
- **Data Storage:** JSON files / MongoDB (optional)
- **Authentication:** NextAuth.js (optional)

### Development Tools
- **Package Manager:** npm / yarn / pnpm
- **Code Formatting:** Prettier
- **Linting:** ESLint
- **Version Control:** Git

---

## 📁 Project Structure

```
SCIC-Task-A09/
├── app/
│   ├── (public)/
│   │   ├── page.jsx                 # Landing page
│   │   ├── about/
│   │   │   └── page.jsx             # About page
│   │   ├── contact/
│   │   │   └── page.jsx             # Contact page
│   │   ├── items/
│   │   │   ├── page.jsx             # Items list
│   │   │   └── [id]/page.jsx        # Item details
│   │   └── login/
│   │       └── page.jsx             # Login page
│   ├── (protected)/
│   │   └── add-item/
│   │       └── page.jsx             # Add item (protected)
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/route.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── CategoriesSection.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonials.jsx
│   │   ├── SpecialOffers.jsx
│   │   └── ItemCard.jsx
│   ├── middleware.js                # Route protection
│   └── layout.jsx                   # Root layout
├── public/
│   ├── images/
│   └── icons/
├── server/                          # Express.js backend
│   ├── index.js
│   ├── routes/
│   │   └── items.js
│   └── data/
│       └── cakes.json
├── .env.local
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🚀 Installation

### Prerequisites

- Node.js 18.17 or later
- npm / yarn / pnpm
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/ShahriarRefat0/SCIC-Task-A09.git
cd SCIC-Task-A09
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

### Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# NextAuth Configuration (if using)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Step 4: Run the Development Server

**Frontend (Next.js):**
```bash
npm run dev
```

**Backend (Express.js):**
```bash
cd server
npm install
npm start
```

The application will be available at:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

---

## ⚙️ Configuration

### Tailwind CSS

Tailwind is pre-configured. To customize, edit `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EC4899',
        secondary: '#8B5CF6',
      },
    },
  },
  plugins: [],
}
```

### Next.js Config

Modify `next.config.js` for additional configurations:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
}

module.exports = nextConfig
```

---

## 📖 Usage

### Browsing Products

1. Visit the homepage
2. Browse featured products or navigate to "All Items"
3. Click on any product to view details
4. Filter by category or search

### User Authentication

#### Mock Login Credentials:
- **Email:** `admin@sweetcakes.com`
- **Password:** `admin123`

#### Login Process:
1. Click "Login" in the navigation
2. Enter credentials
3. Upon successful login, you'll be redirected to the items page
4. Access protected routes like "Add Item"

### Adding Products (Protected Route)

1. Log in with valid credentials
2. Navigate to "Add Item" page
3. Fill in product details:
   - Name
   - Price
   - Description
   - Category
   - Image URL
4. Submit the form
5. Product will be added to the database

---

## 🔐 Authentication

### Mock Authentication

The application uses a simple cookie-based authentication system:

```javascript
// Login logic
if (email === 'admin@sweetcakes.com' && password === 'admin123') {
  // Set cookie
  document.cookie = 'auth=true; path=/';
  router.push('/items');
}
```

### Protected Routes

Middleware checks authentication status:

```javascript
// middleware.js
export function middleware(request) {
  const authCookie = request.cookies.get('auth');
  
  if (!authCookie && request.nextUrl.pathname.startsWith('/add-item')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
```

### NextAuth.js Integration (Optional)

For production-ready authentication:

```bash
npm install next-auth
```

Configure providers in `/app/api/auth/[...nextauth]/route.js`

---

## 🌐 API Routes

### Items API

**Base URL:** `http://localhost:5000/api`

#### Get All Items
```http
GET /items
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Chocolate Truffle Cake",
    "price": 1200,
    "offerPrice": 950,
    "discount": 20,
    "image": "https://...",
    "description": "Rich chocolate cake...",
    "category": "Birthday"
  }
]
```

#### Get Single Item
```http
GET /items/:id
```

#### Create Item (Protected)
```http
POST /items
Content-Type: application/json

{
  "name": "New Cake",
  "price": 1500,
  "description": "Delicious cake",
  "category": "Birthday",
  "image": "https://..."
}
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Import to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure environment variables
   - Deploy

3. **Environment Variables on Vercel:**
   - Add all `.env.local` variables in Vercel dashboard
   - Save and redeploy

### Deploy Backend

**Option 1: Railway**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
cd server
railway login
railway init
railway up
```

**Option 2: Render**
- Connect GitHub repository
- Select `server` folder
- Configure build command: `npm install`
- Start command: `npm start`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Shahriar Refat**

- GitHub: [@ShahriarRefat0](https://github.com/ShahriarRefat0)
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn URL]

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Unsplash](https://unsplash.com) for images
- [Lucide Icons](https://lucide.dev)

---

## 📞 Support

For support, email shahriarrefat@example.com or open an issue in the GitHub repository.

---

<div align="center">
  <p>Made with ❤️ by Shahriar Refat</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>