#!/bin/bash

# Setup & Installation Verification Script
# Run this after npm install to verify everything is working

echo "🚀 Portfolio Setup Verification"
echo "================================"
echo ""

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
else
    echo "❌ Dependencies not installed. Run: npm install"
    exit 1
fi

# Check if all key files exist
echo ""
echo "📁 Checking project structure..."

files=(
    "package.json"
    "tailwind.config.js"
    "postcss.config.js"
    "public/index.html"
    "src/App.jsx"
    "src/index.js"
    "src/styles/global.css"
    "src/components/Navbar.jsx"
    "src/components/Hero.jsx"
    "src/components/About.jsx"
    "src/components/Skills.jsx"
    "src/components/Projects.jsx"
    "src/components/Services.jsx"
    "src/components/Contact.jsx"
    "src/components/Footer.jsx"
)

all_exist=true
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file - NOT FOUND"
        all_exist=false
    fi
done

if [ "$all_exist" = false ]; then
    echo ""
    echo "❌ Some files are missing!"
    exit 1
fi

echo ""
echo "================================"
echo "✅ All checks passed!"
echo ""
echo "Next steps:"
echo "1. Run: npm start"
echo "2. Open: http://localhost:3000"
echo "3. Customize your information"
echo "4. Deploy to Vercel/Netlify"
echo ""
echo "📚 Documentation:"
echo "- README.md for full docs"
echo "- QUICKSTART.md for quick setup"
echo "- FEATURES.md for feature list"
echo ""
echo "🎉 You're ready to launch!"
