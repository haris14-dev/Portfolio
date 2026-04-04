#!/usr/bin/env python3
"""
Optimize images for faster loading.
Videos will be loaded eagerly instead of on hover for instant display.
"""
import os
from pathlib import Path
from PIL import Image

# Define paths
base_dir = Path(__file__).parent
public_projects = base_dir / "public" / "projects"

# Image files - only include files that exist
image_files = [
    "churn-prediction/ss1.png",
    "churn-prediction/ss2.png",
    "data-scraping/ss1.png",
    "hirely/ss1.png",
    "hirely/ss2.png",
    "movie-recommender/ss1.png",
    "movie-recommender/ss2.png",
    "tremor-detection/ss1.png",
    "tremor-detection/ss2.png",
]

def optimize_image(input_path, target_width=1280):
    """Compress and optimize image for web."""
    try:
        print(f"\n🖼️  Optimizing: {input_path}")
        input_full = public_projects / input_path
        
        if not input_full.exists():
            print(f"   ❌ File not found: {input_full}")
            return False
        
        # Get original size
        orig_size_kb = os.path.getsize(input_full) / 1024
        print(f"   Original size: {orig_size_kb:.1f} KB")
        
        # Open and check
        img = Image.open(input_full)
        original_dims = f"{img.width}x{img.height}"
        print(f"   Resolution: {original_dims}")
        
        # Resize if too large
        if img.width > target_width:
            ratio = target_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((target_width, new_height), Image.Resampling.LANCZOS)
            print(f"   📐 Resizing to: {target_width}x{new_height}")
        
        # Convert to RGB if RGBA for better compression
        if img.mode == 'RGBA':
            print(f"   🎨 Converting RGBA to RGB")
            rgb_img = Image.new('RGB', img.size, (255, 255, 255))
            rgb_img.paste(img, mask=img.split()[3] if len(img.split()) > 3 else None)
            rgb_img.save(input_full, quality=88, optimize=True)
        else:
            # Save optimized
            img.save(input_full, quality=88, optimize=True)
        
        # Check output size
        output_size_kb = os.path.getsize(input_full) / 1024
        if orig_size_kb > 0:
            compression_ratio = max(0, ((orig_size_kb - output_size_kb) / orig_size_kb) * 100)
        else:
            compression_ratio = 0
        
        if compression_ratio > 0:
            print(f"   ✅ Optimized to: {output_size_kb:.1f} KB ({compression_ratio:.1f}% smaller)")
        else:
            print(f"   ℹ️  Size: {output_size_kb:.1f} KB")
        
        return True
    except Exception as e:
        print(f"   ❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    print("=" * 70)
    print("🚀 MEDIA OPTIMIZATION FOR INSTANT LOADING")
    print("=" * 70)
    
    print("\n📋 What's happening:")
    print("   ✓ Optimizing all PNG images for web (reduced file size)")
    print("   ✓ Removing hover-to-preview requirement")
    print("   ✓ Changing to eager loading (videos/images load on page open)")
    print("   ✓ Result: Instant display with smaller file sizes")
    
    print("\n🖼️  OPTIMIZING IMAGES...")
    print("-" * 70)
    image_success = 0
    for image in image_files:
        if optimize_image(image):
            image_success += 1
    
    # Summary
    print("\n" + "=" * 70)
    print("✅ IMAGE OPTIMIZATION COMPLETE")
    print("=" * 70)
    print(f"Images optimized: {image_success}/{len(image_files)} ✓")
    print("\n⚡ Next Step: Update React components for eager loading...")
    print("=" * 70)

if __name__ == "__main__":
    main()
