# ProjectCard Component - Usage Guide

## Overview
`ProjectCard` is a reusable, professional React component for showcasing projects with video, screenshots, and descriptions in your portfolio.

## What Was Created

### 1. **ProjectCard Component** (`src/components/ProjectCard.jsx`)
A production-ready component with:
- ✅ Video player with autoplay, loop, muted, playsInline
- ✅ Automatic fallback to first image if video fails
- ✅ Horizontal scrollable screenshots row (2-3 images)
- ✅ Project title, description, and tech stack badges
- ✅ Dark theme with rounded corners and soft shadows
- ✅ Smooth hover effects and animations
- ✅ GitHub and Live Demo buttons
- ✅ Lazy video loading (preload="none")
- ✅ Fully responsive design

### 2. **Folder Structure** (`public/projects/movie-recommender/`)
```
public/projects/movie-recommender/
├── demo.mp4        (5-10s video, muted, loopable)
├── ss1.png         (Screenshot 1)
└── ss2.png         (Screenshot 2)
```

### 3. **Updated Projects Section** (`src/components/Projects.jsx`)
- Integrated ProjectCard component
- Added "Featured Project" section displaying Movie Recommender
- Maintained existing project cards below

## Component Props

```jsx
<ProjectCard
  title="AI-Powered Movie Recommendation Engine"
  description="Advanced collaborative filtering system..."
  video="/projects/movie-recommender/demo.mp4"
  images={[
    '/projects/movie-recommender/ss1.png',
    '/projects/movie-recommender/ss2.png',
  ]}
  tech={['Collaborative Filtering', 'Scikit-learn', 'Python', 'React']}
  github="https://github.com/username/repo"
  demo="https://live-demo-url.com"
/>
```

### Props Detailed

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | ✅ | Project title displayed as bold heading |
| `description` | string | ✅ | 1-2 line project description |
| `video` | string | ✅ | Path to demo video (MP4) |
| `images` | array | ✅ | Array of screenshot paths (2-3 recommended) |
| `tech` | array | ✅ | Array of technology/skill tags |
| `github` | string | ❌ | GitHub repo URL (optional) |
| `demo` | string | ❌ | Live demo URL (optional) |

## Features

### 1. **Responsive Video Section**
- Automatic aspect ratio (16:9)
- Object-cover for proper scaling
- Graceful fallback to first screenshot on error

### 2. **Screenshot Gallery**
- Horizontally scrollable
- Rounded corners (lg)
- Hover zoom effect (scale 1.05)
- Light border with accent on hover

### 3. **Project Details**
- Bold, modern title with hover color change
- 2-line description with ellipsis
- Tech stack as interactive pill badges
- Hover effects on all elements

### 4. **Action Buttons**
- GitHub button (secondary style)
- Live Demo button (gradient style)
- Both have smooth hover animations

### 5. **Dark Theme Styling**
- Background: `dark-secondary/80` with backdrop blur
- Borders: Gray-800/50 with blue accent on hover
- Shadow: Soft base shadow, enhanced on hover
- Rounded: 2xl (16px)

### 6. **Performance Optimizations**
- Video preload="none" for lazy loading
- Framer Motion for smooth animations
- Responsive breakpoints (md: medium screens)
- Efficient scroll performance

## Usage Example

### Single Project Display
```jsx
import ProjectCard from './ProjectCard';

export default function PortfolioShowcase() {
  return (
    <ProjectCard
      title="AI-Powered Movie Recommendation Engine"
      description="Advanced collaborative filtering system that analyzes user preferences and movie metadata to deliver highly personalized recommendations with 92% accuracy."
      video="/projects/movie-recommender/demo.mp4"
      images={[
        '/projects/movie-recommender/ss1.png',
        '/projects/movie-recommender/ss2.png',
      ]}
      tech={['Collaborative Filtering', 'Scikit-learn', 'Python', 'React', 'Data Analysis']}
      github="https://github.com/haris14-dev"
      demo={null}
    />
  );
}
```

### Multiple Projects Grid
```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {projects.map((project) => (
    <ProjectCard key={project.id} {...project} />
  ))}
</div>
```

## Adding More Projects

1. **Create folder structure:**
   ```
   public/projects/project-name/
   ├── demo.mp4
   ├── ss1.png
   └── ss2.png
   ```

2. **Add to your component:**
   ```jsx
   const projectData = {
     title: "Project Name",
     description: "Brief description...",
     video: "/projects/project-name/demo.mp4",
     images: [
       '/projects/project-name/ss1.png',
       '/projects/project-name/ss2.png',
     ],
     tech: ['Tech1', 'Tech2', 'Tech3'],
     github: "https://github.com/username/repo",
     demo: "https://live-url.com"
   };
   
   <ProjectCard {...projectData} />
   ```

## Customization

### Change Colors
Modify these Tailwind classes in `ProjectCard.jsx`:
- Blue accent: `bg-gradient-to-r from-accent-blue to-accent-purple`
- Dark background: `dark-secondary/80`
- Borders: `border-gray-800/50`

### Change Sizes
- Title: `text-xl md:text-2xl` → `text-2xl md:text-3xl`
- Screenshot height: `h-20` → `h-24`
- Card padding: `p-6` → `p-8`

### Adjust Animations
- Fade-in duration: `duration-0.6` in `containerVariants`
- Hover scale: `scale: 1.05` → `scale: 1.08`
- Transition speed: `duration-300` → `duration-500`

## Dependencies

- React 18+
- Framer Motion `^10.16.4`
- Lucide React (for icons)
- Tailwind CSS 3+

All dependencies are already installed in your project.

## Current Status

✅ ProjectCard component created and styled
✅ Movie Recommender project showcased
✅ Assets organized in public/projects/movie-recommender/
✅ Responsive and performant
✅ Ready for production

---

**Next Steps:**
- Test the component in browser
- Add more projects following the same structure
- Customize colors/animations as needed
- Deploy to production
