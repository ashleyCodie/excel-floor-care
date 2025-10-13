# Excel Floor Care Website

A modern, responsive website for Excel Floor Care - a professional grout, tile, and carpet cleaning service based in Phoenix, Arizona.

## 🌟 Features

- **Animated Hero Section** with curved scrolling text and gradient effects
- **Service Showcases** for grout/tile cleaning and carpet cleaning
- **Interactive Photo Carousel** displaying before/after transformations
- **Customer Reviews** section with ratings
- **Contact Form** with validation
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Modern UI Components** using custom-built components

## 🚀 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Custom Components**:
  - GradientText - Animated gradient text effects
  - FuzzyText - Canvas-based fuzzy text animation
  - SplitText - Character-by-character text animations
  - CurvedLoop - SVG-based curved scrolling text

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/excel-floor-care.git
cd excel-floor-care
```

2. Install dependencies:
```bash
cd client
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3081`

## 🏗️ Project Structure

```
client/
├── public/
│   ├── logo2.png
│   ├── clean.jpg
│   ├── grout1.jpg
│   ├── b&a.jpg
│   └── ...
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── GroutTileCleaning.jsx
│   │   ├── CarpetCleaning.jsx
│   │   ├── PhotoCarousel.jsx
│   │   ├── Reviews.jsx
│   │   ├── Contact.jsx
│   │   ├── GradientText.jsx
│   │   ├── FuzzyText.jsx
│   │   ├── SplitText.jsx
│   │   ├── CurvedLoop.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Input.jsx
│   │       └── Textarea.jsx
│   ├── App.jsx
│   └── main.jsx
├── jsconfig.json
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Key Components

### Hero Section
- Curved scrolling text banner at the top
- Background image with overlay
- Animated gradient text for company name and phone number
- Call-to-action button

### Service Sections
- Grout & Tile Cleaning
- Carpet Cleaning
- Animated fuzzy text headings
- Service benefits with icons
- Before/after images

### Photo Carousel
- Interactive image slider
- Before/after transformation photos
- Navigation arrows and dot indicators
- Responsive design

### Reviews
- Customer testimonials
- 5-star rating display
- Card-based layout

### Contact Form
- Input validation
- Name, email, phone, address, and message fields
- Contact information cards (address, phone, hours)
- Form submission feedback

## ⚙️ Configuration

### Vite Config
The project uses path aliases for cleaner imports:
```javascript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

### Tailwind Config
Custom configuration for design system consistency.

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` folder, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📞 Contact Information

**Excel Floor Care**
- Phone: (480) 729-2731
- Location: Phoenix Metropolitan Area, Arizona
- Hours: Monday - Sunday, 7:00 AM - 7:00 PM

## 🛠️ Troubleshooting

### Common Issues

**Issue: Import errors with `@/components`**
- Solution: Ensure `jsconfig.json` is properly configured with path aliases

**Issue: Heading disappears on mobile**
- Solution: Remove large margin/padding classes like `ml-85`, `pl-80` that push content off-screen

**Issue: Images not loading**
- Solution: Ensure images are in the `public/` folder and paths start with `/`

**Issue: Dependency conflicts**
- Solution: Use `npm install --legacy-peer-deps` if using React 19

## 📄 License

This project is proprietary and confidential.

## 👨‍💻 Development

Built with ❤️ for Excel Floor Care

---

For questions or support, please contact the development team.
