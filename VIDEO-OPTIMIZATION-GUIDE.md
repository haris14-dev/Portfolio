# 🎬 VIDEO COMPRESSION OPTIMIZATION GUIDE

## ⚡ CRITICAL: Reduce Video Sizes from 100MB → 1-2MB

### Why This Matters
- **Current Situation**: Videos are ~100-200MB each → 20-30 second load times
- **Goal**: Reduce to 1-2MB each → **<2 second load times**
- **Impact**: 98-99% file size reduction with minimal quality loss

---

## 🛠️ OPTION 1: FFmpeg (Recommended - Fastest)

### For Windows PowerShell:

**480p Resolution (Best balance of speed & quality):**
```powershell
ffmpeg -i "input.mp4" -vf scale=854:480 -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 96k "output_480p.mp4"
```

**720p Resolution (Slightly better quality):**
```powershell
ffmpeg -i "input.mp4" -vf scale=1280:720 -c:v libx264 -crf 26 -preset fast -c:a aac -b:a 128k "output_720p.mp4"
```

**Batch Compress All Videos:**
```powershell
Get-ChildItem -Filter "*.mp4" | ForEach-Object {
    ffmpeg -i $_.FullName -vf scale=854:480 -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 96k "$($_.BaseName)_optimized.mp4"
}
```

---

## 🎯 Option 2: HandBrake (GUI - Easier for Non-Technical)

1. Download HandBrake from https://handbrake.fr/
2. Open HandBrake
3. Click "Open Source" → Select your video
4. **Presets**: Choose "Fast 720p30" or "Very Fast 480p30"
5. **Video Tab**:
   - Codec: `H.264`
   - Quality RF: `26-28` (higher = smaller, lower quality)
   - Framerate: `30`
6. **Audio Tab**:
   - Bitrate: `96-128 kbps`
7. Click "Start Encode"
8. Wait for compression (~5-10 minutes per video)

---

## 📊 COMPRESSION SETTINGS COMPARISON

| Setting | 480p/30fps | 720p/30fps | 1080p/24fps |
|---------|-----------|-----------|------------|
| **Resolution** | 854x480 | 1280x720 | 1920x1080 |
| **FPS** | 30 | 30 | 24 |
| **RF** | 28 | 26 | 24 |
| **Audio Bitrate** | 96 kbps | 128 kbps | 128 kbps |
| **File Size** | ~1.2 MB | ~1.8 MB | ~2.5 MB |
| **Quality** | Very Good | Excellent | Best |
| **Load Speed** | Super Fast | Very Fast | Fast |

---

## ✅ RECOMMENDED SETTINGS FOR YOUR PORTFOLIO

**Default (Recommended):**
```
Resolution: 480p (854x480)
Frame Rate: 30 fps
Codec: H.264 (MP4)
RF: 28 (high compression)
Audio: 96 kbps AAC
Target: ~1.2 MB per video
```

**If you want better quality:**
```
Resolution: 720p (1280x720)
Frame Rate: 30 fps
Codec: H.264 (MP4)
RF: 26 (medium compression)
Audio: 128 kbps AAC
Target: ~1.8 MB per video
```

---

## 🔍 CHECK FILE INFO BEFORE & AFTER

**View video details:**
```powershell
ffprobe -v quiet -print_format json -show_format -show_streams "video.mp4" | ConvertFrom-Json
```

**File size:**
```powershell
(Get-Item "video.mp4").Length / 1MB  # Shows size in MB
```

---

## 🚀 EXPECTED RESULTS AFTER COMPRESSION

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Video Size** | 100-200 MB | 1-2 MB | **98-99% smaller** |
| **Load Time** | 20-30 sec | <2 sec | **10-15x faster** |
| **Quality** | Overkill for web | Still great | Optimal for web |
| **Bandwidth** | Excessive | Efficient | Professional |

---

## 📝 STEP-BY-STEP PROCESS

### Using FFmpeg (Recommended):

1. **Install FFmpeg** (if not already):
   ```powershell
   winget install ffmpeg
   ```

2. **Navigate to your videos**:
   ```powershell
   cd "C:\Users\haris\Downloads\haris-website\assets"
   ```

3. **Compress each video**:
   ```powershell
   # For Churn Prediction
   ffmpeg -i "churn prediction\Demo.mp4" -vf scale=854:480 -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 96k "churn prediction\Demo_optimized.mp4"
   
   # For Hirely
   ffmpeg -i "hirely\demo.mp4" -vf scale=854:480 -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 96k "hirely\demo_optimized.mp4"
   
   # And so on...
   ```

4. **Delete originals and rename**:
   ```powershell
   Remove-Item "churn prediction\Demo.mp4"
   Rename-Item "churn prediction\Demo_optimized.mp4" "Demo.mp4"
   ```

5. **Update videos in public/projects folder**:
   ```powershell
   cp "churn prediction\Demo.mp4" "..\public\projects\churn-prediction\demo.mp4" -Force
   ```

---

## 🎨 QUALITY CHECK

After compression, open videos in browser and check:
- ✅ No visible pixelation
- ✅ Smooth playback
- ✅ Audio sounds good
- ✅ File size is 1-2 MB

If quality is too low, decrease RF (try 26 instead of 28).
If file is too large, increase RF (try 30 instead of 28).

---

## 💡 PRO TIPS

1. **Test One Video First**: Compress one video, test quality, then apply settings to all
2. **Keep Originals**: Save original files before compression
3. **Use Presets**: FFmpeg presets ("fast", "medium", "slow") affect speed, not quality
4. **Monitor Progress**: Use videos at different RF values to find sweet spot
5. **Mobile Optimization**: Consider 480p as default for mobile users

---

## 📑 FINAL NOTES

- **After compression**, the React code will handle lazy loading
- **Videos won't ever autoplay** → Users won't download until they hover
- **Combined effect**: Instant page load + Professional feel
- **Result**: Portfolio feels like enterprise-grade SaaS application

---

## Next Steps:
1. ✅ Compress all videos to 1-2 MB
2. ✅ Replace old videos with optimized versions
3. ✅ Deploy optimized React components (already done)
4. ✅ Test in browser
5. ✅ Push to production

Your portfolio will be lightning-fast! 🚀
