# ✈️ Viatours Voyage — Travel Landing Page

> A modern, responsive travel & tour booking landing page built with **Next.js 16** + **Tailwind CSS v4** + **Swiper.js**.

🌐 **Live Demo:** [viatours-voyage.vercel.app](https://viatours-voyage.vercel.app/)

---

## 📌 About The Project

**Viatours Voyage** is a feature-rich travel agency landing page built with Next.js 16 and the App Router. Users can explore trending destinations, browse featured trips across 16+ countries, discover popular tour categories, read travel articles, and plan their next trip — all in a fast, SEO-friendly, and fully responsive interface.

---

## 🗂️ Page Sections

| Section | Description |
|---|---|
| 🏠 **Hero / Banner** | Iceland's Golden Circle hero with starting price & tour route map |
| 🌍 **Trending Destinations** | 16 destinations — Paris, Tokyo, Dubai, Maldives & more |
| 🗺️ **Featured Trips** | 16 featured tours with ratings, duration, and prices |
| ✅ **Why Choose Us** | Ultimate flexibility, Memorable experiences, Quality at our core |
| 🎯 **Popular Activities** | 16 categories — City Tours, Adventure, Beach, Food, Desert Safari & more |
| 📊 **Our Footprints** | Stats — 932M donations, 24M campaigns, 10M happy people, 65M volunteers |
| 🏆 **Best of New York** | Curated top tours with ratings and prices |
| 💬 **Traveler Reviews** | 4.8★ rating, 1000+ TripAdvisor reviews, 16M happy customers |
| 🤝 **Trusted Brands** | Partner travel brand logos |
| 📰 **Travel Articles** | 16 blog posts across categories — Adventure, Culture, Food, Wellness |
| 📩 **Footer** | Newsletter signup, company links, support, payment methods |

---

## ✨ Features

- ⚡ **Next.js App Router** — File-based routing with server components
- 🖼️ **Next.js Image Optimization** — All images use `next/image` for fast loading
- 🎠 **Swiper Carousel** — Smooth sliders for featured tours and reviews
- 🔤 **Geist Font** — Optimized via `next/font`
- 🔐 **Auth Pages** — Sign Up and Log In pages included
- 💱 **Currency Selector** — USD currency toggle in navbar
- 📱 **Fully Responsive** — Optimized for all screen sizes
- 🔷 **React Icons** — Rich icon set throughout the UI
- 🔍 **SEO-Friendly** — Next.js server-side rendering for better search visibility

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | v16.2.1 | React Framework (App Router) |
| React | v19.2.4 | UI Library |
| Tailwind CSS | v4.2 | Styling |
| Swiper | v12 | Carousel / Slider |
| React Icons | v5.6 | Icon Library |
| PostCSS | v8 | CSS Processing |
| Autoprefixer | v10 | CSS Vendor Prefixing |
| ESLint | v9 | Code Linting |

---

## 📁 Project Structure

```
viatours-voyage/
├── public/                  # Static assets (images, icons)
├── app/                     # Next.js App Router
│   ├── layout.js            # Root layout (Navbar + Footer)
│   ├── page.js              # Home page (all sections)
│   ├── currency/            # Currency selector page
│   ├── signup/              # Sign Up page
│   └── login/               # Log In page
├── components/              # Reusable UI components
│   ├── Navbar/
│   ├── Hero/
│   ├── TrendingDestinations/
│   ├── FeaturedTrips/
│   ├── WhyChooseUs/
│   ├── PopularActivities/
│   ├── Footprints/
│   ├── TravelerReviews/
│   ├── TravelArticles/
│   └── Footer/
├── .gitignore
├── next.config.mjs          # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/basudevkumer/viatours-voyage.git
   cd viatours-voyage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

---

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

---

## 🌍 Deployment

This project is deployed on **Vercel**. To deploy your own version:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects it as a **Next.js** project
4. Click **Deploy** — done! ✅

---

## 📄 License

This project is private. All rights reserved © Viatours Voyage 2024.

---

⭐ If you like this project, give it a star!
