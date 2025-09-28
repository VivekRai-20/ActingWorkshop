# Acting Workshop by Praveen Hingonia 🎭

A comprehensive React-based web application for an acting workshop featuring payment integration, testimonials, and interactive content.

## 🌟 Features

- **Interactive Hero Section** with video background and workshop highlights
- **Payment Integration** with Razorpay for seamless transactions
- **Customer Registration** with detailed form collection
- **Testimonials Gallery** showcasing student success stories
- **Workshop Schedule** with detailed curriculum breakdown
- **Awards & Recognition** gallery highlighting achievements
- **Navras (Nine Emotions)** interactive section
- **FAQ Section** addressing common queries
- **Countdown Timer** for workshop registration
- **Email Notifications** with PDF invoice generation
- **Responsive Design** optimized for all devices

## 🚀 Live Demo

**URL**: https://lovable.dev/projects/a3787543-255d-44b6-bbae-6bdc702665b6

## 💰 Payment Integration

This project integrates Razorpay for secure payment processing:

- Workshop fee: ₹199
- Automatic invoice generation and email delivery
- Payment confirmation with customer details collection

## 📧 Email Configuration

The application uses Gmail SMTP for sending confirmation emails and invoices:

1. Create a `.env` file in the `server` directory:

   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin-email@gmail.com
   RAZORPAY_KEY_ID=your-razorpay-key-id
   RAZORPAY_KEY_SECRET=your-razorpay-secret
   ```

2. For Gmail App Password setup:

   - Enable 2-Step Verification in your Google Account
   - Generate an App Password for Mail
   - Use the 16-character password in the `.env` file

3. Invoice PDFs are automatically generated and stored in `server/invoices/`

## 🛠️ Local Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/VivekRai-20/ActingWorkshop.git
   cd ActingWorkshop
   ```

2. **Install frontend dependencies:**

   ```bash
   npm install
   ```

3. **Install server dependencies:**

   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Set up environment variables:**

   - Create `server/.env` with your configuration (see Email Configuration section)

5. **Start development servers:**

   **Frontend (Vite dev server):**

   ```bash
   npm run dev
   ```

   **Backend (Express server):**

   ```bash
   cd server
   npm start
   ```

6. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

### 🔄 Development Workflow

**Using Lovable IDE:**

- Visit [Lovable Project](https://lovable.dev/projects/a3787543-255d-44b6-bbae-6bdc702665b6)
- Changes sync automatically with this repository

**Using Local IDE:**

- Make changes locally and push to GitHub
- Changes will reflect in Lovable automatically

## 🧰 Technology Stack

### Frontend

- **React 18** - Modern React with hooks and context
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Lucide React** - Icon library
- **React Router** - Client-side routing

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Nodemailer** - Email sending functionality
- **PDFKit** - PDF generation for invoices
- **CORS** - Cross-origin resource sharing

### Payment & Services

- **Razorpay** - Payment gateway integration
- **Gmail SMTP** - Email delivery service

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 📁 Project Structure

```
ActingWorkshop/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── HeroSection.tsx # Landing hero section
│   │   ├── PaymentConfirmation.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ...
│   ├── pages/              # Page components
│   ├── assets/             # Images and media files
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── types/              # TypeScript definitions
├── server/                 # Backend Express server
│   ├── index.js           # Server entry point
│   ├── invoice.js         # PDF invoice generation
│   └── package.json       # Server dependencies
├── public/                 # Static assets
└── README.md              # This file
```

## 🚀 Deployment Options

### Lovable Platform (Recommended)

1. Visit [Lovable Project](https://lovable.dev/projects/a3787543-255d-44b6-bbae-6bdc702665b6)
2. Click Share → Publish
3. Configure custom domain in Project → Settings → Domains

### Manual Deployment

1. **Frontend**: Deploy to Vercel, Netlify, or similar
2. **Backend**: Deploy to Heroku, Railway, or similar Node.js hosting
3. Update API endpoints in frontend configuration

## 🌐 Custom Domain Setup

Connect your custom domain through Lovable:

- Navigate to Project → Settings → Domains
- Click "Connect Domain"
- Follow the [custom domain guide](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 📄 License

This project is private and proprietary. All rights reserved.

## 👥 Contact

For questions about the Acting Workshop:

- **Instructor**: Praveen Hingonia
- **Repository**: [GitHub](https://github.com/VivekRai-20/ActingWorkshop)

---

_Built with ❤️ for aspiring actors_
