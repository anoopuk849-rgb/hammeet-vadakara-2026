# HAM MEET - VADAKARA 2026

Official website for HAM MEET - VADAKARA 2026, an Amateur Radio Operators Convention held at Sargalaya Heritage Center, Vadakara, Kerala.

![HAM MEET Banner](https://images.unsplash.com/photo-1673260839682-87746c4d28d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200)

## 🎯 About

HAM MEET Vadakara 2026 is an annual gathering that brings together amateur radio enthusiasts, operators, and technology innovators from across India. The event features hands-on demonstrations, technical workshops, equipment exhibitions, and networking opportunities.

### Event Details

- **Venue:** Sargalaya Heritage Center, Irinave, Vadakara, Kerala 673104
- **Year:** 2026
- **Registration Fee:** ₹1000

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Ham Radio Theme** - Custom design with radio wave animations and themed imagery
- **Event Information** - Comprehensive details about the event, workshops, and activities
- **Venue Details** - Interactive Google Maps integration for easy navigation
- **Registration System** - Complete registration form with validation
- **Payment Integration** - Secure payment flow (demo implementation)
- **Modern UI** - Built with shadcn/ui components and Tailwind CSS

## 🛠️ Tech Stack

- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Routing:** React Router (if applicable)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** - [Download](https://git-scm.com/)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/anoopuk849-rgb/hammeet-vadakara-2026.git
cd hammeet-vadakara-2026
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` folder.

## 📁 Project Structure

```
hammeet-vadakara-2026/
├── components/
│   ├── Hero.tsx              # Landing section with event title
│   ├── About.tsx             # Event information and features
│   ├── Venue.tsx             # Venue details with map
│   ├── Registration.tsx      # Registration form with payment
│   ├── Footer.tsx            # Footer section
│   └── ui/                   # shadcn/ui components
├── styles/
│   └── globals.css           # Global styles and Tailwind config
├── App.tsx                   # Main application component
└── README.md                 # Project documentation
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign up/Login with GitHub
4. Click "New Project"
5. Import your `hammeet-vadakara-2026` repository
6. Click "Deploy"
7. Your site will be live at `https://your-project.vercel.app`

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings will be auto-detected
6. Click "Deploy"

### Custom Domain

After deployment, you can connect a custom domain:

1. Purchase a domain (e.g., `hammeetvadakara.com`)
2. In Vercel/Netlify dashboard, go to Domain settings
3. Add your custom domain
4. Update DNS records as instructed

## 🎨 Customization

### Update Event Details

Edit the respective components to update event information:

- **Hero.tsx** - Event title, date, venue
- **About.tsx** - Event description and features
- **Venue.tsx** - Venue address and map coordinates
- **Registration.tsx** - Registration fee and form fields

### Change Colors/Theme

Modify the color scheme in `/styles/globals.css`:

```css
:root {
  --primary: #030213;
  --secondary: oklch(0.95 0.0058 264.53);
  /* Add more color variables */
}
```

### Update Images

Replace Unsplash URLs in components with your own images:

```tsx
// In Hero.tsx, About.tsx, Venue.tsx
<ImageWithFallback src="YOUR_IMAGE_URL" alt="Description" />
```

## 📱 Features Breakdown

### Registration Flow

1. **Form Validation** - All fields are validated before proceeding
2. **Payment Step** - Simulated payment interface (integrate real payment gateway)
3. **Confirmation** - Success message with registration details
4. **Data Collection:**
   - Full Name
   - Complete Address
   - Call Sign (Ham Radio)
   - Mobile Number

### Interactive Map

The venue section includes an embedded Google Maps iframe showing the exact location of Sargalaya Heritage Center.

## 🔐 Security Notes

**Important:** This is a demo implementation. For production use:

- Integrate a real payment gateway (Razorpay, Stripe, PayPal)
- Add backend API for form submission
- Implement proper data encryption
- Add CAPTCHA for spam prevention
- Store sensitive data securely (use Supabase, Firebase, etc.)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Open a Pull Request

## 📞 Contact

For event-related queries:

- **Email:** info@hamvadakara.org
- **Phone:** +91 7356119854
- **Venue:** Sargalaya Heritage Center, Vadakara, Kerala

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🚀 Quick Deploy Commands

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📸 Screenshots

### Home Page

Landing section with ham radio theme and animated radio waves.

### Registration

Two-step registration process with form validation and payment integration.

### Venue

Interactive map and detailed venue information.

---

**Made with ❤️ for the Amateur Radio Community**

🔗 **Live Demo:** [Add your deployed URL here]

📧 **Questions?** Open an issue or contact the event organizers.