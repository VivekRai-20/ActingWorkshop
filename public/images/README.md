# Images Directory

## Logo Images Required

Please place the following logo images in the specified directories:

### `/public/images/logos/`

1. **praveenHingoniaVision.png**
   - Location: `/public/images/logos/praveenHingoniaVision.png`
   - Used in: Hero section above the video
   - Recommended size: 200x80px (or similar aspect ratio)
   - Format: PNG with transparent background preferred

2. **productions.png**
   - Location: `/public/images/logos/productions.png`
   - Used in: Hero section above the video  
   - Recommended size: 200x80px (or similar aspect ratio)
   - Format: PNG with transparent background preferred

## How to Add Images

1. Create the directory structure:
   ```
   public/
   └── images/
       └── logos/
           ├── praveenHingoniaVision.png
           └── productions.png
   ```

2. Place your logo images in the `/public/images/logos/` folder

3. The logos will automatically appear in the hero section above the video

## Current Status

- ✅ Hero section code updated to display logos
- ✅ Responsive design implemented (different sizes for mobile/tablet/desktop)
- ✅ Fallback text shown when images are not found
- ⏳ **Images needed**: Please add the actual logo files

## Styling Details

- **Desktop**: Logo height = 80px (5rem)
- **Tablet**: Logo height = 64px (4rem)  
- **Mobile**: Logo height = 48px (3rem)
- **Background**: Semi-transparent white with backdrop blur
- **Spacing**: 32px gap between logos
- **Error Handling**: Graceful fallback to text when images missing