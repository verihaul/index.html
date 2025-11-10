# Carrier Verification Website

A modern, responsive web application for verifying carrier information built with React, TypeScript, and Tailwind CSS.

## Features

- Clean and intuitive carrier information form
- Real-time form validation
- Loading states and user feedback
- Fully responsive design
- Built with modern React and TypeScript

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **shadcn/ui** - UI component patterns

## Form Fields

- **MC Number** - Motor Carrier number
- **DOT Number** - Department of Transportation number
- **Company Name** - Required field
- **Email** - Contact email
- **Phone** - Contact phone number
- **Notes** - Additional information

## Development

The project structure:

```
src/
├── ui/              # UI components (Button, Input, Card, etc.)
├── lib/             # Utility functions
├── CarrierVerificationForm.tsx  # Main form component
├── App.tsx          # Main application component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## License

MIT
