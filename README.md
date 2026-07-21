# ITCFE4 - Maa Computer Training Center (মা কম্পিউটার ট্রেনিং সেন্টার)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

ITCFE4 is a modern, responsive, and dynamic educational platform built for **Maa Computer Training Center**. This project serves as the frontend interface for students to explore courses, view trainer profiles, read success stories, and manage admissions.

**Live Frontend (Vercel):** [https://itcfe4-frontend.vercel.app](https://itcfe4-frontend.vercel.app)  
**Live Backend (Vercel):** [https://backend-hznxwyc1u-tizul-islams-projects.vercel.app](https://backend-hznxwyc1u-tizul-islams-projects.vercel.app)

---

## 🎯 About The Project

This project was developed with a focus on seamless user experience (UI/UX) and high performance. Initially dependent on a live backend API, the project has been fully restructured to use a **Mock Data API Layer**. This allows the frontend to function perfectly as a standalone application while keeping the data architecture ready for seamless backend integration in the future.

### ✨ Key Features

- **Dynamic Data Rendering:** Uses a central Mock API (`src/mock/mockApi.js`) simulating async API calls for Banners, Courses, Instructors, Reviews, and Blogs.
- **Skeleton Loading & Shimmer Effects:** Smooth UI transitions and placeholders (using `react-shimmer-effects` and `react-loading-skeleton`) while data is fetching.
- **Responsive Design:** Fully mobile-responsive layout built with Tailwind CSS and DaisyUI.
- **Centralized Site Settings:** Global settings like site colors, logos, and meta information are fetched dynamically.
- **Vite Setup:** Lightning-fast HMR and optimized production build via Vite.

---

## 🚀 Topics & Tags (For GitHub)

`react`, `vite`, `tailwindcss`, `frontend`, `education-platform`, `mock-api`, `daisyui`, `responsive-design`, `spa`

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19 (Vite)
- **Routing:** React Router v7
- **Styling:** Tailwind CSS + DaisyUI
- **Animations/Effects:** Lottie React, CountUp.js, Slick Carousel
- **Deployment:** Vercel

---

## 📂 Project Architecture

```text
ITCFE4/
├── src/
│   ├── assets/          # Static images and icons
│   ├── components/      # Reusable UI components (Hero, Courses, Reviews, etc.)
│   ├── config/          # API base configuration (api.js, siteSettingsApi.js)
│   ├── layout/          # Root layout and Navbar/Footer wrappers
│   ├── mock/            # Mock Data Layer (mockData.js, mockApi.js)
│   ├── pages/           # Route-level page components (Home, CourseDetails, etc.)
│   ├── router/          # Application routing (react-router-dom)
│   ├── App.jsx
│   └── main.jsx
```

### 🔌 How the Mock API Works
To ensure the frontend development could proceed without a ready backend, all standard `fetch()` calls were abstracted out. 
- Real API endpoints like `fetch('/courses')` were replaced with `fetchCoursesMock()`.
- Data is served from `mockData.js` simulating standard JSON responses.
- **To switch to a real backend:** Simply update the functions in `mockApi.js` to point to actual `fetch()` URLs!

---

## 💻 Getting Started (Local Development)

Follow these steps to run the project locally on your machine.

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tizul-Islam/ITCFE4.git
   cd ITCFE4
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in Browser:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📝 Available Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the app for production (into the `dist` folder).
- `npm run preview` - Locally preview the production build.
- `npm run lint` - Runs ESLint to check for code issues.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/Tizul-Islam/ITCFE4/issues).
