# Rangreja - Educational Website

A modern, responsive educational platform built with React, Vite, and Tailwind CSS. Rangreja offers comprehensive online courses, expert instructors, and interactive learning experiences.

## 🚀 Features

- **Modern Design**: Clean, responsive UI with gradient elements and smooth animations
- **Course Catalog**: Comprehensive courses in Web Development, Data Science, UI/UX Design, and Mobile Development
- **Student Testimonials**: Real success stories from our community
- **Interactive Components**: Engaging user interface with hover effects and animations
- **Mobile Responsive**: Optimized for all device sizes
- **Newsletter Subscription**: Stay updated with latest courses and offers
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 6.0.5
- **Styling**: Tailwind CSS 3.4.0
- **Icons**: Lucide React
- **Routing**: React Router DOM 7.1.1
- **Animations**: Framer Motion 11.15.0

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rangreja-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🚀 Deployment

### Render Deployment

This project is configured for easy deployment on Render:

1. Connect your GitHub repository to Render
2. Use the following settings:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Environment**: Static Site

The `render.yaml` file is included for automatic configuration.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to your hosting service

## 📁 Project Structure

```
rangreja-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── About.jsx
│   │   ├── Stats.jsx
│   │   ├── Courses.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Newsletter.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── render.yaml
└── README.md
```

## 🎨 Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue shades (used for main branding)
- Secondary: Purple shades (used for accents)

### Components

All components are modular and can be easily customized:
- **Header**: Navigation and branding
- **Hero**: Main landing section with CTA
- **Features**: Platform benefits showcase
- **About**: Company information and values
- **Stats**: Key metrics and achievements
- **Courses**: Course catalog display
- **Testimonials**: Student success stories
- **Newsletter**: Email subscription
- **Footer**: Links and contact information

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Performance

- Optimized bundle splitting
- Lazy loading of components
- Minified CSS and JavaScript
- Optimized images and assets

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For any questions or suggestions, please contact the development team.

---

Built with ❤️ for modern education
