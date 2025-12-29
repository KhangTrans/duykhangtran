# 🚀 Portfolio Website - Trần Duy Khang

A modern, professional, and animated personal portfolio website built with React, Ant Design, and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## ✨ Features

- 🎨 **Modern UI/UX**: Clean and professional design with smooth animations
- 🌓 **Dark/Light Mode**: Toggle between dark and light themes
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ✉️ **Contact Form**: Integrated with EmailJS for automatic email sending
- 🔒 **reCAPTCHA**: Google reCAPTCHA v2 for spam protection
- 🎭 **Smooth Animations**: Framer Motion for elegant page transitions
- 🎯 **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development

## 🛠️ Tech Stack

### Core

- **ReactJS** - Frontend framework
- **Vite** - Build tool and dev server

### UI & Styling

- **Ant Design (antd)** - UI component library
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Integrations

- **EmailJS** - Email service for contact form
- **Google reCAPTCHA** - Spam protection

## 📋 Sections

1. **Hero Section** - Introduction with animated text and call-to-action buttons
2. **About Me** - Professional introduction, education, and career journey
3. **Skills** - Programming languages, technologies, and version control
4. **Projects** - Featured projects with detailed descriptions
5. **Contact** - Contact form with EmailJS and reCAPTCHA
6. **Footer** - Social links and quick navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or you already have the files)

   ```bash
   git clone <your-repo-url>
   cd profolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

## ⚙️ Configuration

### 1. EmailJS Setup

To enable the contact form to send emails:

1. **Create an EmailJS account**

   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create an Email Service**

   - Add your email service (Gmail, Outlook, etc.)
   - Note your `Service ID`

3. **Create an Email Template**

   - Create a new template with the following variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{to_name}}` - Your name
     - `{{message}}` - Message content
   - Note your `Template ID`

4. **Get your Public Key**

   - Go to Account > API Keys
   - Copy your `Public Key` (User ID)

5. **Update the Contact Component**
   - Open `src/sections/Contact.jsx`
   - Replace the following values:
     ```javascript
     const SERVICE_ID = "your_service_id"; // Replace with your Service ID
     const TEMPLATE_ID = "your_template_id"; // Replace with your Template ID
     const USER_ID = "your_user_id"; // Replace with your Public Key
     ```

### 2. Google reCAPTCHA Setup

To enable spam protection:

1. **Register your site**

   - Go to [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
   - Register a new site
   - Choose reCAPTCHA v2 - "I'm not a robot" Checkbox
   - Add your domains (localhost for development)

2. **Get your Site Key**

   - Copy your `Site Key`

3. **Update the Contact Component**
   - Open `src/sections/Contact.jsx`
   - Replace the reCAPTCHA site key:
     ```javascript
     const RECAPTCHA_SITE_KEY = "your_recaptcha_site_key"; // Replace with your Site Key
     ```

### 3. Customize Personal Information

Update the following files with your information:

- **`src/sections/Hero.jsx`** - Name and introduction
- **`src/sections/About.jsx`** - Education and career details
- **`src/sections/Skills.jsx`** - Add or modify your skills
- **`src/sections/Projects.jsx`** - Update with your projects
- **`src/sections/Contact.jsx`** - Update email address
- **`src/sections/Footer.jsx`** - Update social media links

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🚀 Deploy to Vercel

1. **Install Vercel CLI** (optional)

   ```bash
   npm install -g vercel
   ```

2. **Deploy using Vercel CLI**

   ```bash
   vercel
   ```

   Or simply:

   - Push your code to GitHub
   - Import the project in [Vercel Dashboard](https://vercel.com)
   - Vercel will automatically detect Vite and deploy

3. **Environment Variables** (if using Vercel Dashboard)
   - You don't need to set environment variables for EmailJS and reCAPTCHA as they use public keys
   - These keys are safe to include in your frontend code

## 📁 Project Structure

```
profolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable components (if needed)
│   ├── sections/          # Main page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/            # Global styles
│   │   └── App.css
│   ├── utils/             # Utility functions (if needed)
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Base styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Customization

### Colors

The main color scheme uses a gradient from blue to purple. To customize:

- Primary: `#1890ff`
- Secondary: `#722ed1`

Update these values in the styled components throughout the sections.

### Fonts

The project uses **Inter** font from Google Fonts. To change:

1. Update the Google Fonts link in `index.html`
2. Update the font-family in `src/index.css`

### Animations

Animations are powered by Framer Motion. Customize animation variants in each section component.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### EmailJS not working

- Verify your Service ID, Template ID, and User ID are correct
- Check your EmailJS dashboard for any errors
- Ensure your email service is properly connected

### reCAPTCHA not showing

- Verify your Site Key is correct
- Check if you've registered localhost as a domain
- Clear browser cache

### Styling issues

- Clear Vite cache: `rm -rf node_modules/.vite`
- Restart dev server

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Trần Duy Khang**

- FPT University - Cần Thơ Campus
- Major: Software Engineering

## 🙏 Acknowledgments

- [Ant Design](https://ant.design/) for the amazing UI components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [EmailJS](https://www.emailjs.com/) for email integration
- [Vite](https://vitejs.dev/) for the blazing fast dev server

---

Made with ❤️ by Trần Duy Khang
