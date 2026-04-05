# 🎨 UI/UX & Styling Reference Guide

## Color System

### Dark Theme Palette
```css
/* Primary Colors */
--color-dark-primary: #0f0f0f    /* Background */
--color-dark-secondary: #1a1a2e  /* Cards, Secondary */

/* Accent Colors */
--color-accent-blue: #3b82f6      /* Primary CTA */
--color-accent-purple: #8b5cf6    /* Secondary CTA */

/* Utility */
--color-white: #ffffff
--color-gray-300: #d1d5db
--color-gray-400: #9ca3af
--color-black-60: rgba(0, 0, 0, 0.6)
--color-black-40: rgba(0, 0, 0, 0.4)
```

---

## Component Styling Details

### 1. ProjectThumbnail Component

#### Layout
```jsx
<div className="relative w-full h-48 bg-gradient-to-br overflow-hidden group cursor-pointer">
  {/* 
    w-full:           Full width container
    h-48:             Fixed height (192px)
    bg-gradient-to-br: Fallback gradient
    overflow-hidden:  Clip image
    group:            Enable :group-hover
    cursor-pointer:   Hand cursor
  */}
</div>
```

#### Image Styling
```jsx
<img
  src={thumbnail}
  loading="lazy"
  className="absolute inset-0 w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
/>
```

**Breakdown:**
- `absolute inset-0` - Fill parent container
- `object-cover` - Maintain aspect ratio, fill space
- `brightness-110` - 10% brighter on hover
- `transition-all` - Smooth animation

#### Play Button
```jsx
<div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple shadow-lg backdrop-blur-sm border border-white/20">
```

**Styling:**
- `w-16 h-16` - 64px circle
- `rounded-full` - Perfect circle
- `bg-gradient-to-r` - Blue→Purple gradient
- `shadow-lg` - Depth shadow
- `backdrop-blur-sm` - Slight blur background
- `border border-white/20` - 20% opacity border

---

### 2. ProjectCard Component

#### Card Container
```jsx
<div className="h-full flex flex-col bg-gradient-to-br from-dark-secondary/70 to-dark-secondary/40 backdrop-blur border border-gray-700/30 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-accent-blue/10 hover:border-accent-blue/40 transition-all duration-300 overflow-hidden">
```

**Breakdown:**
- `bg-gradient-to-br` - Diagonal gradient
- `from-dark-secondary/70` - 70% opacity
- `backdrop-blur` - Background blur effect
- `border border-gray-700/30` - Subtle border
- `rounded-xl` - Large corner radius (16px)
- `hover:shadow-blue-500/5` - Subtle blue glow
- `hover:border-accent-blue/40` - Blue border on hover

#### Title with Gradient Hover
```jsx
<h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-purple transition-all duration-300">
```

**Breakdown:**
- `line-clamp-2` - Max 2 lines
- `text-transparent` - Hide text color
- `bg-clip-text` - Clip to text shape
- `bg-gradient-to-r` - Horizontal gradient text

#### Tech Tags
```jsx
<motion.span
  className="px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-accent-blue/15 to-accent-purple/15 text-accent-blue border border-accent-blue/25 hover:border-accent-blue/50 transition-all cursor-default whitespace-nowrap backdrop-blur-sm"
>
```

**Styling:**
- `px-2.5 py-1` - Padding (10px horizontal, 4px vertical)
- `rounded-full` - Pill shape
- `text-xs` - Small font (12px)
- `bg-gradient-to-r from-accent-blue/15` - 15% opacity gradient
- `border-accent-blue/25` - Subtle border
- `hover:border-accent-blue/50` - Brighten border

#### Action Buttons
```jsx
{/* Watch Demo Button */}
<button className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-accent-blue font-semibold text-sm border border-accent-blue/30 hover:border-accent-blue/60 hover:from-accent-blue/30 hover:to-accent-purple/30 transition-all duration-300">

{/* Live Demo Button */}
<a className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm hover:shadow-lg transition-all duration-300">

{/* GitHub Button */}
<a className="px-3 py-2 rounded-lg border border-gray-600 text-gray-300 font-semibold text-sm hover:border-accent-blue/50 hover:text-accent-blue transition-all duration-300">
```

---

### 3. ProjectDetailsModal Component

#### Backdrop
```jsx
<motion.div
  className="absolute inset-0 bg-black/70 backdrop-blur-md"
  onClick={onClose}
/>
```

**Styling:**
- `bg-black/70` - 70% opacity black
- `backdrop-blur-md` - Medium blur (12px)
- `cursor: pointer` - Interactive

#### Modal Container
```jsx
<motion.div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-dark-secondary/95 to-dark-primary/80 backdrop-blur-xl border border-gray-700/40 shadow-2xl">
```

**Styling:**
- `max-w-2xl` - Max width 42rem
- `max-h-[90vh]` - Max height 90% viewport
- `overflow-y-auto` - Vertical scroll
- `rounded-2xl` - Large corners (24px)
- `bg-gradient-to-br` - Diagonal gradient
- `backdrop-blur-xl` - Heavy blur (20px)
- `shadow-2xl` - Heavy shadow

#### Close Button
```jsx
<motion.button className="sticky top-4 right-4 z-20 p-2.5 rounded-full bg-gradient-to-r from-accent-blue/30 to-accent-purple/30 border border-accent-blue/40 hover:from-accent-blue/50 hover:to-accent-purple/50 text-accent-blue hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm">
```

**Styling:**
- `sticky` - Stick to top while scrolling
- `rounded-full` - Circular
- `bg-gradient-to-r` - Gradient background
- `border border-accent-blue/40` - Gradient border
- `shadow-lg backdrop-blur-sm` - Frosted glass effect

#### Video Container
```jsx
<div className="relative w-full rounded-xl overflow-hidden bg-black shadow-lg">
  <div className="aspect-video relative bg-gradient-to-br from-gray-800 to-black">
    {/* VideoPlayer component */}
  </div>
</div>
```

**Styling:**
- `aspect-video` - 16:9 ratio (Tailwind utility)
- `rounded-xl` - Rounded corners (16px)
- `overflow-hidden` - Clip content
- `shadow-lg` - Drop shadow

#### Section Titles with Gradient
```jsx
<h3 className="text-sm font-bold text-transparent bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text uppercase tracking-widest mb-4">
  📸 Screenshots
</h3>
```

**Styling:**
- `text-transparent` - Hide base text
- `bg-clip-text` - Clip to text
- `bg-gradient-to-r` - Horizontal gradient
- `uppercase` - Uppercase text
- `tracking-widest` - Letter spacing

#### Screenshot Grid
```jsx
<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
  {images.map((img, idx) => (
    <motion.div
      className="relative rounded-lg overflow-hidden border border-gray-700/50 hover:border-accent-blue/60 transition-all duration-300 cursor-pointer group"
    >
      <img
        src={img}
        loading="lazy"
        className="w-full h-32 sm:h-40 object-cover group-hover:brightness-125 transition-all duration-300"
      />
    </motion.div>
  ))}
</div>
```

**Styling:**
- `grid-cols-2 sm:grid-cols-3` - Responsive columns
- `gap-4` - 16px gaps
- `group-hover:brightness-125` - 25% brighter on hover

#### Action Buttons
```jsx
<motion.a className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent-blue/30 transition-all duration-300">
```

---

### 4. VideoPlayer Component

#### Video Element
```jsx
<video
  ref={videoRef}
  autoPlay={autoPlay}
  loop={loop}
  muted={muted}
  playsInline={playsInline}
  preload={preload}
  className={`w-full h-full object-cover ${className}`}
>
  <source src={src} type="video/mp4" />
</video>
```

**Attributes:**
- `autoPlay` - Play automatically
- `muted` - Required for autoplay
- `playsInline` - Mobile inline playback
- `preload="metadata"` - Load only metadata (~50KB)
- `object-cover` - Fill container maintaining aspect

---

## Animation Details

### Hover Animations

#### Card Hover
```jsx
whileHover={{ y: -6 }}  // Move up 6px
transition={{ duration: 0.3 }}
```

#### Button Hover
```jsx
whileHover={{ scale: 1.05 }}  // Scale 105%
whileTap={{ scale: 0.95 }}    // Click: 95%
transition={{ duration: 0.2 }}
```

#### Play Button
```jsx
whileHover={{ scale: 1.15 }}  // Scale 115%
whileTap={{ scale: 0.95 }}
className="transition-transform duration-300"
```

#### Thumbnail Overlay
```jsx
variants={{
  initial: { opacity: 0.3 },
  hover: { opacity: 0.6 },
}}
transition={{ duration: 0.3 }}
```

---

## Responsive Design Breakpoints

### Grid Layouts
```jsx
// Projects grid
grid-cols-1        // Mobile: 1 column
md:grid-cols-2     // Tablet: 2 columns
lg:grid-cols-3     // Desktop: 3 columns

// Screenshot grid
grid-cols-2        // Mobile: 2 columns
sm:grid-cols-3     // Tablet: 3 columns

// Padding
p-4                // Mobile: 16px
sm:p-6             // Tablet: 24px
lg:p-8             // Desktop: 32px
```

### Font Sizes
```jsx
text-sm            // 14px (labels)
text-base          // 16px (body)
text-lg            // 18px (card titles)
text-3xl           // 30px (modal titles)
sm:text-4xl        // 36px (responsive)
```

---

## Tailwind CSS Classes Used

### Layout
- `absolute inset-0` - Position absolute, fill container
- `relative` - Relative positioning
- `fixed` - Fixed positioning (modals)
- `flex flex-col` - Vertical flexbox
- `grid` - CSS Grid
- `overflow-hidden` - Clip overflow

### Sizing
- `w-full h-full` - 100% width/height
- `max-w-2xl` - Max width 42rem
- `h-48` - Height 192px
- `w-16 h-16` - Size 64px
- `aspect-video` - 16:9 ratio

### Spacing
- `p-5` - Padding 20px
- `px-3 py-2` - Horizontal/vertical padding
- `mb-4` - Margin bottom 16px
- `gap-2` - Grid gap 8px
- `gap-4` - Grid gap 16px

### Colors & Gradients
- `bg-dark-primary` - Dark background
- `bg-gradient-to-r` - Horizontal gradient
- `from-accent-blue to-accent-purple` - Blue to purple
- `text-white text-gray-300` - Text colors
- `border-gray-700/50` - Border with opacity
- `opacity-0 group-hover:opacity-100` - Hover transitions

### Borders & Shadows
- `rounded-lg` - Corner radius 8px
- `rounded-xl` - Corner radius 16px
- `rounded-full` - Perfect circle
- `border border-gray-700/50` - Subtle border
- `shadow-lg` - Large shadow
- `shadow-2xl` - Extra large shadow
- `shadow-accent-blue/10` - Colored shadow

### Effects
- `backdrop-blur-sm` - Blur 4px
- `backdrop-blur-xl` - Blur 20px
- `transition-all` - Animate all properties
- `duration-300` - 300ms animation
- `hover:scale-105` - Scale on hover

---

## CSS Custom Properties (in global.css)

```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0f0f0f;
}

::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #8b5cf6;
}

html {
  scroll-behavior: smooth;
}

::selection {
  background-color: #3b82f6;
  color: #0f0f0f;
}
```

---

## Browser Compatibility

### Supported Browsers
- ✅ Chrome/Edge 90+
- ✅ Firefox 89+
- ✅ Safari 14+
- ✅ Mobile Safari 14+
- ✅ Mobile Chrome

### CSS Features Used
- ✅ CSS Grid
- ✅ CSS Flexbox
- ✅ CSS Backdrop Filter
- ✅ CSS Gradients
- ✅ CSS Variables
- ⚠️ aspect-ratio (polyfill for older Safari)

---

## Performance Optimization - Styling

### CSS Optimization
```jsx
// ✅ Good: Class-based styling
className="hover:shadow-lg transition-all"

// ❌ Avoid: Inline styles in loop
style={{ color: getColor(item) }}
```

### Animation Optimization
```jsx
// ✅ Good: GPU-accelerated transforms
whileHover={{ scale: 1.05, y: -4 }}

// ❌ Avoid: Animating layout properties
animate={{ width: 200 }}
```

### Image Optimization
```jsx
// ✅ Good: Lazy loading
<img src="..." loading="lazy" />

// ❌ Avoid: Loading all images upfront
<img src="huge-unoptimized-image.jpg" />
```

---

## Accessibility Considerations

### Color Contrast
- ✅ White on dark background: 13:1 ratio
- ✅ Accent colors have sufficient contrast
- ✅ Focus states visible

### Keyboard Navigation
- ✅ Button focus indicators
- ✅ ESC key closes modals
- ✅ Tab order logical
- ✅ Arrow keys for navigation

### ARIA Labels
```jsx
<button title="Close (ESC)" aria-label="Close modal">
  <X size={22} />
</button>
```

---

## Theming

### Current Theme: Dark Professional
```
Background: #0f0f0f (near black)
Secondary: #1a1a2e (dark blue-gray)
Primary CTA: #3b82f6 (vivid blue)
Secondary CTA: #8b5cf6 (purple)
Text: #ffffff (white)
Muted: #9ca3af (gray)
```

### To Change Theme:
1. Update Tailwind CSS config
2. Update CSS custom properties
3. Update accent color classes
4. Test contrast ratios

---

**Styling Guide Complete** ✅

All components implement professional dark theme with blue/purple accents, smooth animations, responsive design, and accessibility best practices.
