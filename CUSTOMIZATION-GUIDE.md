# 🎨 Customization Guide - Edit Like a Pro

This guide shows you EXACTLY what to edit in each file to customize your portfolio.

---

## 1️⃣ UPDATE YOUR NAME

### In Navbar
**File:** `src/components/Navbar.jsx`
**Line:** ~25

Find this:
```jsx
<span className="hidden sm:inline font-bold text-white">Haris Asif</span>
```

Replace with YOUR name:
```jsx
<span className="hidden sm:inline font-bold text-white">Your Name</span>
```

### In Footer
**File:** `src/components/Footer.jsx`
**Lines:** 35-36

Find this:
```jsx
<span className="font-bold text-white">Haris Asif</span>
```

Replace with YOUR name:
```jsx
<span className="font-bold text-white">Your Name</span>
```

---

## 2️⃣ UPDATE HERO SECTION

**File:** `src/components/Hero.jsx`

### Main Headline (Line ~43)
Find:
```jsx
<span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-clip-text text-transparent animate-pulse-glow">
  AI-powered solutions
</span>{' '}
that solve real business problems
```

Replace with YOUR headline focused on YOUR specialty:
```jsx
<span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-clip-text text-transparent animate-pulse-glow">
  your hero text here
</span>{' '}
rest of headline
```

### Subheading (Lines ~52-56)
Find:
```jsx
<motion.p variants={item} className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
  Machine Learning & Deep Learning Engineer specializing in computer vision, predictive analytics,
  and intelligent automation. I transform complex data into actionable insights and scalable systems.
</motion.p>
```

Replace with YOUR value proposition (2-3 sentences max)

### Statistics (Lines ~82-95)
The stats array shows different numbers. Edit them:
```javascript
[
  { number: '50+', label: 'Projects Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
]
```

Change these to your actual numbers!

---

## 3️⃣ UPDATE ABOUT SECTION

**File:** `src/components/About.jsx`

### Main Bio (Lines ~44-52)
Find these paragraphs and replace with YOUR bio:

```jsx
<p className="text-gray-300 text-lg leading-relaxed mb-6">
  I'm Haris Asif, a passionate Machine Learning and Deep Learning engineer...
</p>
```

**IMPORTANT:** Focus on:
- What problems you solve for CLIENTS
- Business outcomes, not just tech
- 2-3 short paragraphs max

### Info Cards (Lines ~67-89)
Find the array:
```javascript
[
  {
    label: 'Specialization',
    value: 'ML, DL, Computer Vision',
  },
  // ... more cards
]
```

Update with YOUR information

---

## 4️⃣ UPDATE SKILLS SECTION

**File:** `src/components/Skills.jsx`

### Skill Categories (Lines ~10-58)

Find this array and replace completely:
```javascript
const skillCategories = [
  {
    category: 'Machine Learning & AI',
    skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', /*...*/],
    icon: '🤖',
  },
  // ... more categories
];
```

**Structure:**
- Each category has: `category`, `skills` (array of strings), `icon` (emoji)
- You can have up to 6 categories
- Skills are displayed as bullet points

**Example:**
```javascript
{
  category: 'My Specialty',
  skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  icon: '🎯',
}
```

---

## 5️⃣ UPDATE PROJECTS SECTION

**File:** `src/components/Projects.jsx`

### Project Array (Lines ~11-88)

This is the MOST IMPORTANT section! Replace with YOUR 5-6 projects:

```javascript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'What problem does it solve? What value does it provide to clients?',
    tech: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
    github: 'https://github.com/yourusername/repo',
    demo: 'https://demo-link.com',  // or null if no demo
    image: '🎯',  // emoji representing the project
    color: 'from-accent-blue/20 to-accent-purple/20',
  },
  // Add more projects...
];
```

**IMPORTANT TIPS:**
- `title`: Simple project name (3-5 words)
- `description`: FOCUS ON BUSINESS VALUE, NOT TECH
  ❌ Bad: "Used PyTorch with CNNs for image recognition"
  ✅ Good: "Real-time image classification system that processes 1000s/sec with 99% accuracy"
- `tech`: 3-5 key technologies used
- `github`: Your GitHub repo link (required)
- `demo`: Optional live demo or null
- `image`: Any emoji that represents the project
- `color`: Keep the gradient theme

---

## 6️⃣ UPDATE SERVICES SECTION

**File:** `src/components/Services.jsx`

### Services Array (Lines ~8-40)

Replace this array with YOUR services:

```javascript
const services = [
  {
    icon: Brain,           // Icon from lucide-react
    title: 'Service Name',
    description: 'What benefits does this service provide?',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  // ... more services
];
```

**Icon options from lucide-react:**
- `Brain` - AI/Intelligence
- `Zap` - Speed/Performance
- `TrendingUp` - Growth/Analytics
- `Lightbulb` - Ideas/Innovation
- `Code2` - Development
- `Cpu` - Processing
- `BarChart` - Data
- View more: [lucide.dev/icons](https://lucide.dev/icons)

---

## 7️⃣ UPDATE CONTACT INFORMATION

### Contact Form Setup
**File:** `src/components/Contact.jsx`

**Line ~24:** Set up Formspree

1. Go to [formspree.io](https://formspree.io)
2. Sign up
3. Create a NEW FORM
4. Copy your Form ID (looks like: `xrzkyzal`)
5. Replace THIS:
```javascript
const mailboxUrl = `https://formspree.io/f/xeoqeqrq`;
```
With THIS:
```javascript
const mailboxUrl = `https://formspree.io/f/YOUR_FORM_ID`;
```

### Social Links
**File:** `src/components/Contact.jsx`

**Lines ~41-50:** Update social links array:
```javascript
const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:YOUR_EMAIL@gmail.com',
    value: 'YOUR_EMAIL@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/YOUR-PROFILE/',
    value: 'LinkedIn',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/YOUR-USERNAME',
    value: 'GitHub',
  },
];
```

### Footer Links
**File:** `src/components/Footer.jsx`

**Lines ~18-30:** Update to YOUR social links

---

## 8️⃣ CHANGE COLORS

**File:** `tailwind.config.js`

### Color Theme (Lines ~14-19)

```javascript
colors: {
  'dark-primary': '#0f0f0f',      // Main background
  'dark-secondary': '#1a1a1a',    // Secondary background  
  'dark-tertiary': '#2d2d2d',     // Tertiary background
  'accent-blue': '#3b82f6',       // Main accent color
  'accent-purple': '#8b5cf6',     // Secondary accent
}
```

**To change the theme:**
- Keep dark colors for backgrounds
- Change `accent-blue` and `accent-purple` to new colors
- The entire site will update automatically!

**Example - Green theme:**
```javascript
'accent-blue': '#10b981',         // Green
'accent-purple': '#14b8a6',       // Teal
```

---

## 9️⃣ UPDATE ANIMATIONS

**File:** `tailwind.config.js`

### Animation Speed (Lines ~20-40)

Look for `keyframes` section. To SLOW DOWN animations:
- Change `0.8s` to `1.5s` for slower
- Change `0.8s` to `0.3s` for faster

**Example:**
```javascript
slideUp: {
  '0%': { opacity: '0', transform: 'translateY(30px)' },
  '100%': { opacity: '1', transform: 'translateY(0)' },
},
```

---

## 🔟 CHANGE FONTS

**File:** `public/index.html`

Currently using system fonts. To use Google Fonts:

1. Go to [fonts.google.com](https://fonts.google.com)
2. Choose a font (e.g., "Inter", "Outfit", "Space Grotesk")
3. Copy the link code
4. Add to `public/index.html` in the `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

5. Update in `public/index.html` line ~21:
```html
<style>
  * {
    /* ... */
    font-family: 'Your Font', sans-serif;
  }
</style>
```

---

## 📝 Quick Edit Checklist

- [ ] Update name (Navbar + Footer)
- [ ] Update hero headline
- [ ] Update about bio
- [ ] Add/update skills
- [ ] Replace all projects
- [ ] Update services
- [ ] Set up Formspree contact form
- [ ] Add social media links
- [ ] (Optional) Change colors
- [ ] (Optional) Adjust animation speed
- [ ] Test everything locally with `npm start`

---

## ✅ Testing Changes

After editing a file:

1. **Save the file** (Ctrl+S)
2. **Check localhost** - Browser auto-refreshes
3. **No errors?** ✅ Good!
4. **See errors?** ❌ Check the error message and fix

---

## 🎯 Pro Tips

1. **Make changes one section at a time** - Test each change
2. **Keep descriptions business-focused** - Clients care about ROI, not tech details
3. **Use emojis strategically** - They add personality
4. **Test on mobile** - Press F12, click phone icon
5. **Get feedback** - Show it to friends/colleagues before deploying

---

**You're all set! Start customizing and make this portfolio YOURS.** 🚀
