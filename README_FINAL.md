# Jino Butaslac - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my work as a full-stack developer and designer.

## 🌟 Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Responsive Layout**: Optimized for all device sizes from mobile to desktop
- **Functional Contact Form**: Fully working contact form using EmailJS (free service)
- **Real Skill Icons**: Accurate technology logos using react-icons
- **Project Showcase**: Dynamic gallery with project details and images
- **Skills Display**: Comprehensive overview of technical skills with proficiency levels
- **Smooth Navigation**: Elegant scrolling between sections
- **Production Ready**: Optimized build configuration for deployment
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React, React Icons (Simple Icons)
- **Forms**: Custom validation with React hooks
- **Email Service**: EmailJS (free tier: 200 emails/month)
- **Deployment**: Vercel (free hosting)
- **State Management**: React hooks

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm (comes with Node.js)
- Git

### Installation

1. **Clone and setup**:
```bash
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio
npm install
```

2. **Set up EmailJS** (required for contact form):
```bash
# Copy environment template
cp .env.example .env

# Follow the setup guide
open EMAILJS_SETUP.md
```

3. **Start development**:
```bash
npm run dev
```

4. **Open** [http://localhost:5173](http://localhost:5173)

## 📧 Contact Form Setup

**The contact form is fully functional and ready to work with EmailJS's free service:**

✅ **Complete setup guide**: [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)
✅ **Form validation**: Client-side validation with error messages
✅ **Loading states**: Visual feedback during form submission
✅ **Success/Error handling**: Toast notifications and success messages
✅ **Mobile optimized**: Works perfectly on all devices

**Free EmailJS features:**
- 200 emails per month (free tier)
- No credit card required
- Professional email templates
- Spam protection

## 🚢 Deployment

**Ready for production deployment on Vercel:**

✅ **Optimized build**: Clean, fast production build
✅ **Environment variables**: Properly configured for Vercel
✅ **Static asset caching**: Optimized for performance
✅ **SPA routing**: All routes work correctly
✅ **Complete guide**: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### Deploy in 3 steps:

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables

## 📱 Portfolio Sections

### 🎯 Hero Section
- Professional introduction
- Call-to-action button
- Smooth scrolling navigation

### 💻 Skills Section
- **Real technology logos** (Python, React, Node.js, AWS, etc.)
- **Proficiency levels** (Beginner, Intermediate, Advanced, Expert)
- **Organized categories**: Backend, Frontend, Tools, Design
- **Hover animations**: Interactive skill cards

### 🎨 Work Section
- Project showcase with images
- Interactive gallery
- Project details and descriptions
- Live demo and GitHub links

### 👤 About Section
- Personal background
- Professional experience
- Education and interests

### 📬 Contact Section
- **Working contact form** with validation
- Professional contact information
- Social media links
- Location information

## ⚡ Performance & Quality

- **Fast loading**: Vite build optimization
- **Clean code**: TypeScript, ESLint, organized structure
- **Responsive design**: Mobile-first approach
- **Accessibility**: Semantic HTML, keyboard navigation
- **SEO ready**: Meta tags and structured content

## 🎨 Customization

### Update Personal Information
```typescript
// src/components/Contact.tsx
const contactInfo = {
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  location: "Your City, Country"
};
```

### Add/Update Skills
```typescript
// src/constants/skills.ts
export const skillsData = [
  {
    category: "Your Category",
    items: [
      { name: "Your Skill", icon: YourIcon, level: "Advanced" }
    ]
  }
];
```

### Customize Colors
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      }
    }
  }
}
```

## 📋 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # UI components (Button, Input, etc.)
│   ├── Contact.tsx     # Contact form with EmailJS
│   ├── Skills.tsx      # Skills with real icons
│   └── ...             # Other components
├── constants/          # Static data (skills, etc.)
├── services/           # EmailJS service
├── types/              # TypeScript types
├── utils/              # Utility functions
└── App.tsx             # Main app component
```

## 📝 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔧 Environment Variables

```bash
# .env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📚 Documentation

- **[EmailJS Setup Guide](./EMAILJS_SETUP.md)** - Complete EmailJS configuration
- **[Deployment Guide](./DEPLOYMENT_GUIDE.md)** - Vercel deployment instructions
- **[Attributions](./Attributions.md)** - Credits and resources

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Contact

**Jino Butaslac**
- 📧 Email: butaslac.jino14@gmail.com
- 📱 Phone: +63 945 613 2024
- 📍 Location: Philippines

---

⭐ **If you found this portfolio template useful, please consider giving it a star!**

🚀 **Ready to deploy?** Follow the [Deployment Guide](./DEPLOYMENT_GUIDE.md) to get your portfolio live in minutes!
