# Quick Start Guide - Haris Asif Portfolio

## 🚀 5-Minute Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

Your browser will open automatically at `http://localhost:3000`

---

## 🎨 First-Time Customization

### 1. Update Your Name & Title
Edit `src/components/Navbar.jsx` line ~25:
```jsx
<span className="hidden sm:inline font-bold text-white">Your Name</span>
```

### 2. Update Hero Section
Edit `src/components/Hero.jsx`:
- Line ~50: Change main headline
- Line ~57: Update subheading
- Line ~68: Modify stats

### 3. Update About Section
Edit `src/components/About.jsx`:
- Update your bio on lines 44-52
- Modify specializations on line 67

### 4. Add Your Projects
Edit `src/components/Projects.jsx` (line ~11):
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'What it does',
    tech: ['Tech 1', 'Tech 2'],
    github: 'your-github-link',
    demo: 'your-demo-link-or-null',
  },
  // Add more projects
];
```

### 5. Add Your Contact Form
Edit `src/components/Contact.jsx` (line ~24):
1. Create account at Formspree.io
2. Create a new form and get your ID
3. Replace the endpoint URL with your Formspree form ID

### 6. Update Social Links
Edit these files with your actual links:
- `src/components/Contact.jsx` (line ~41)
- `src/components/Footer.jsx` (line ~18)

---

## 🎯 Customization Checklist

- [ ] Update name and intro in Navbar
- [ ] Customize Hero section headline and stats
- [ ] Write your bio in About section
- [ ] Update skills in Skills section
- [ ] Add your 5-6 projects in Projects section
- [ ] Customize services in Services section
- [ ] Set up Formspree for contact form
- [ ] Update social media links
- [ ] Test on mobile devices
- [ ] Deploy to Vercel/Netlify

---

## 🌐 Change Theme Colors

Edit `tailwind.config.js` (line ~14-19):
```javascript
colors: {
  'dark-primary': '#0f0f0f',      // Dark background
  'dark-secondary': '#1a1a1a',    // Secondary background
  'dark-tertiary': '#2d2d2d',     // Tertiary background
  'accent-blue': '#3b82f6',       // Primary accent
  'accent-purple': '#8b5cf6',     // Secondary accent
}
```

---

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push to GitHub
2. Go to vercel.com
3. Import your repository
4. Click Deploy
5. Done!

### Deploy to Netlify
```bash
npm run build
# Then drag 'build' folder to Netlify
```

---

## 📞 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review component files for inline comments
- Test locally before deploying

---

## ✅ You're Ready!

Your premium portfolio is set up. Now customize it with your content and watch the clients come! 🚀
