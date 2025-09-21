# Jino Butaslac - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a functional contact form, interactive project galleries, and showcases skills with real technology logos.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Interactive Project Galleries** - Bento-style image layouts with modal views
- **Functional Contact Form** - EmailJS integration for receiving messages
- **Real Technology Logos** - Professional skill representation with react-icons
- **Modern Tech Stack** - React 18, TypeScript, Vite, Tailwind CSS
- **Performance Optimized** - Fast loading and smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Tailwind CSS Animate
- **Build Tool**: Vite
- **Icons**: React Icons (Simple Icons), Lucide React
- **Email Service**: EmailJS
- **Notifications**: React Hot Toast
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## 🏗️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hino-code/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📧 EmailJS Setup

To enable the contact form functionality:

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. **Create an Email Service**:
   - Add Gmail, Outlook, or your preferred email service
   - Note down the Service ID
3. **Create an Email Template**:
   - Subject: `New Portfolio Contact: {{subject}}`
   - Template content:
     ```
     Hello Jino,

     You have received a new message from your portfolio website.

     From: {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}

     Message:
     {{message}}

     ---
     This message was sent from your portfolio contact form.
     ```
   - Note down the Template ID
4. **Get Public Key**:
   - Go to Account page and copy your Public Key
5. **Update Environment Variables**:
   - Add the Service ID, Template ID, and Public Key to your `.env` file

## 🚀 Deployment on Vercel

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via GitHub** (Recommended)
   - Push your code to GitHub
   - Go to [Vercel](https://vercel.com/)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
   - Deploy!

3. **Deploy via CLI** (Alternative)
   ```bash
   vercel
   ```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── common/          # Shared components
│   │   ├── sections/        # Page sections
│   │   └── ui/             # UI components
│   ├── constants/          # Application constants
│   ├── services/           # External services (EmailJS)
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   └── hooks/              # Custom React hooks
├── components/             # Main React components
├── public/                 # Static assets
├── Portfolio College Organazational Projects/ # Project images
└── portfolio-picture.jpg   # Hero section image
```

## 🎨 Customization

### Updating Skills
Edit `src/constants/skills.ts` to modify your skills and technology stack.

### Modifying Projects
Update the project data in `components/Gallery.tsx` to showcase your work.

### Changing Contact Information
Edit the contact details in `components/Contact.tsx`.

### Styling
Tailwind CSS is used for styling. Customize colors, fonts, and spacing in `tailwind.config.js`.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Build Configuration

The project includes:
- **Vite** for fast builds and HMR
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Vercel.json** for deployment configuration

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🎯 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images
- Fast loading times

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: butaslac.jino14@gmail.com
- **Phone**: +63 945 613 2024
- **Location**: Philippines
- **GitHub**: [Hino-code](https://github.com/Hino-code)

---

Built with ❤️ by Jino Butaslac
