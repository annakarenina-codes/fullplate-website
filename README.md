# Fullplate Restaurant Management - Landing Page

A modern, responsive landing page for Fullplate Restaurant Management & Consulting Services featuring smooth parallax animations, dynamic design, and professional branding.

## Project Structure

```
fullplate-landing/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Comprehensive styling with responsive design
├── js/
│   └── script.js       # Interactive features and parallax effects
├── assets/             # Image directory (add your images here)
│   ├── logo.png        # Fullplate logo
│   ├── hero.jpg        # Hero section background image
│   ├── appetizers.jpg  # Appetizers product image
│   ├── pizzas.jpg      # Pizzas product image
│   ├── spuds.jpg       # Spuds/jacket potatoes product image
│   └── chef.jpg        # Chef Airo Malinao portrait
└── README.md           # This file

```

## Getting Started

### 1. Add Your Images

Place all the image files in the `assets/` directory:

- **logo.png** - Your Fullplate logo (will be displayed in navbar)
- **hero.jpg** - Background image for hero section (recommended: high-quality restaurant/dining image)
- **appetizers.jpg** - Product showcase image for appetizers
- **pizzas.jpg** - Product showcase image for pizzas
- **spuds.jpg** - Product showcase image for jacket potatoes
- **chef.jpg** - Professional portrait of Chef Airo Malinao

### 2. Open the Project

Simply open `index.html` in your web browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Features

### Design & UX
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Smooth Parallax Effects** - Subtle, professional parallax animations on scroll
- ✅ **Modern Color Palette** - Inspired by your product photography
  - Warm golds and creams for appetizers
  - Earthy tones for pizzas and spuds
  - Professional dark brown accents
- ✅ **Professional Typography** - Clean, modern fonts (Montserrat & Poppins) with proper hierarchy
- ✅ **Smooth Animations** - Fade-in effects, hover states, and scroll animations

### Sections

1. **Navigation Bar**
   - Fixed navbar with logo
   - Menu items: Home, About Us, Contact Us
   - Search functionality
   - Mobile hamburger menu

2. **Hero Section**
   - Full-screen hero with background image
   - Company name "Fullplate" overlay
   - Inspirational quote placeholder
   - "Start Browsing" CTA button

3. **Product Categories**
   - Three feature cards: Appetizers, Pizzas, Spuds
   - Each with custom color scheme
   - Parallax scroll effect on hover
   - Responsive grid layout

4. **Chef Spotlight**
   - Chef profile section with image
   - Professional credentials display
   - Biography section
   - Parallax effects

5. **Contact Section**
   - Contact information placeholder
   - Email: hello@fullplate.com
   - Call-to-action button

6. **Footer**
   - Company information
   - Quick navigation links
   - Social media (Facebook icon)
   - Copyright notice

## Customization

### Colors
Edit the CSS variables in `css/styles.css` (`:root` section):

```css
:root {
    --primary-dark: #3d2817;
    --accent-gold: #D4AF37;
    --cream: #FFF8F0;
    /* ...more colors */
}
```

### Typography
Change font families in the same section:

```css
--font-primary: 'Montserrat', sans-serif;
--font-secondary: 'Poppins', sans-serif;
```

### Content
Edit text directly in `index.html`. Key sections to update:

- Hero quote: Update `.hero-quote` content
- Feature descriptions: Update `.feature-description` text
- Chef credentials: Update `.credential-item` list items
- Contact info: Update email and phone in contact section

## JavaScript Features

- **ParallaxScroller** - Smooth parallax effect on scroll
- **Navigation** - Mobile menu toggle, active link highlighting
- **ScrollAnimations** - Fade-in animations as elements come into view
- **ButtonInteractions** - CTA button functionality and ripple effects
- **LazyLoadImages** - Efficient image loading
- **NavbarScrollEffect** - Dynamic navbar shadow on scroll
- **KeyboardAccessibility** - Escape key to close mobile menu

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Opera: ✅ Full support
- IE 11: ⚠️ Limited support (no parallax, modern CSS features)

## Performance Optimization

- Lazy-loaded images for faster initial load
- Optimized CSS with minimal reflows
- Debounced scroll events
- Minified animations using CSS transforms

## Mobile Optimization

- Responsive breakpoints at 768px and 480px
- Touch-friendly buttons and navigation
- Optimized image sizes for mobile
- Smooth touch scrolling

## Contact & Social Media

- **Email**: hello@fullplate.com
- **Facebook**: facebook.com/fullplate
- Customize these in the footer section

## Future Enhancements

- Contact form integration
- Menu/portfolio showcase
- Blog section
- Testimonials carousel
- Booking system integration
- Newsletter signup

## License

This landing page is created for Fullplate Restaurant Management.

## Support

For any issues or customization needs, please refer to the HTML/CSS/JS comments in the respective files.

---

**Built with** ❤️ for Fullplate Restaurant Management
