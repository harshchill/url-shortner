# URL Shortener

A modern, fast, and secure URL shortening service built with Next.js 15, React 19, and MongoDB. Transform long URLs into short, shareable links with ease.

![URL Shortener](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-6.18.0-green?style=for-the-badge&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🚀 Lightning Fast**: Generate short URLs instantly with optimized performance
- **🔒 Secure & Reliable**: Enterprise-grade security for your links
- **📊 Analytics Ready**: Track clicks and engagement (coming soon)
- **🎨 Modern UI**: Beautiful, responsive design built with Tailwind CSS
- **📱 Mobile Friendly**: Works perfectly on all devices
- **🔗 Custom URLs**: Choose your preferred short URL names
- **💾 Persistent Storage**: MongoDB-powered data persistence
- **⚡ Real-time**: Instant URL generation and redirection

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS 4
- **Backend**: Next.js API Routes
- **Database**: MongoDB 6.18.0
- **Styling**: Tailwind CSS with custom gradients
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/url-shortner.git
   cd url-shortner
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Creating Short URLs

1. Visit the **Shorten** page (`/shorten`)
2. Enter your long URL in the "Long URL" field
3. Choose a custom short URL name (optional)
4. Click "Generate" to create your short link
5. Copy and share your new short URL!

### Accessing Short URLs

- Simply visit `yourdomain.com/shorturl` to be redirected to the original URL
- Invalid short URLs will redirect to the home page

## 🏗️ Project Structure

```
url-shortner/
├── app/                    # Next.js 13+ app directory
│   ├── [shorturl]/        # Dynamic route for short URLs
│   ├── api/               # API routes
│   │   └── generate/      # URL generation endpoint
│   ├── components/        # Reusable components
│   ├── Shorten/           # URL shortening page
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── lib/                   # Utility libraries
│   └── mongodb.js         # MongoDB connection
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## 🔧 API Endpoints

### POST `/api/generate`

Generates a new short URL.

**Request Body:**
```json
{
  "url": "https://example.com/very-long-url",
  "shorturl": "custom-name"
}
```

**Response:**
```json
{
  "success": true,
  "error": false,
  "message": "URL generated"
}
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS 4 with custom gradients. You can modify colors and styles in:
- `app/globals.css` - Global styles
- Component files - Individual component styling

### Database Schema
The MongoDB collection structure:
```javascript
{
  url: "original_long_url",
  shorturl: "short_url_name"
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database powered by [MongoDB](https://www.mongodb.com/)

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the development team

---

**Made with ❤️ using Next.js and React**
