# Random Password Generator

A modern, secure password generator built with React, TypeScript, and Tailwind CSS. Follows NIST 2024 password guidelines with real-time generation and comprehensive security features.

## 🏗️ Architecture

The application follows a clean, modular architecture with proper separation of concerns:

```
src/
├── components/           # React components
│   ├── Header.tsx           # App header with title
│   ├── PasswordDisplay.tsx  # Password display with strength indicator
│   ├── PasswordLengthControl.tsx # Length slider and controls
│   ├── CharacterOptions.tsx # Character type checkboxes
│   ├── GenerateButton.tsx   # Password generation button
│   ├── SecurityTips.tsx     # NIST security guidelines
│   ├── PasswordGenerator.tsx # Main orchestrating component
│   └── index.ts            # Component exports
├── hooks/               # Custom React hooks
│   └── usePasswordGenerator.ts # Password generation logic
├── utils/               # Utility functions
│   ├── passwordGenerator.ts   # Core generation logic
│   ├── passwordStrength.ts    # NIST-compliant strength assessment
│   └── clipboard.ts          # Clipboard operations with fallbacks
├── types/               # TypeScript type definitions
│   └── index.ts            # Interface definitions
├── constants/           # Application constants
│   └── index.ts            # Character sets, configs, limits
├── App.tsx             # Main app component (simplified)
└── main.tsx            # Application entry point
```

## 🔐 Features

### NIST 2024 Compliance
- **Length-focused strength assessment**: Prioritizes password length over complexity
- **Five strength categories**: Very Weak, Weak, Fair, Good, Excellent
- **Pattern detection**: Identifies repeating characters and sequential patterns
- **Real-time assessment**: Updates strength as you type or change options

### Security Features
- **Cryptographically secure random generation**: Uses `crypto.getRandomValues()`
- **Comprehensive error handling**: Graceful fallbacks for all operations
- **Clipboard security**: Secure copy with fallback for older browsers
- **Input validation**: Prevents invalid password configurations

### User Experience
- **Real-time generation**: Password updates instantly when options change
- **Visual feedback**: Clear strength indicators and toast notifications
- **Responsive design**: Works seamlessly on all device sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🧩 Component Structure

### Core Components

- **`PasswordGenerator`**: Main orchestrating component that combines all sub-components
- **`Header`**: Application title and description
- **`PasswordDisplay`**: Shows generated password with strength indicator and copy button
- **`PasswordLengthControl`**: Slider and buttons for adjusting password length
- **`CharacterOptions`**: Checkboxes for selecting character types
- **`GenerateButton`**: Manual password generation trigger
- **`SecurityTips`**: Educational content based on NIST guidelines

### Custom Hooks

- **`usePasswordGenerator`**: Encapsulates all password generation logic, state management, and side effects

### Utilities

- **`passwordGenerator.ts`**: Core password generation with cryptographic security
- **`passwordStrength.ts`**: NIST-compliant strength assessment algorithm
- **`clipboard.ts`**: Cross-browser clipboard operations with fallbacks

## 📱 Responsive Design

The application is fully responsive and works across:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## 🔒 Security Standards

Based on NIST SP 800-63B (2024) guidelines:
- Minimum 8 characters (recommends 15+)
- Maximum 64 characters supported
- Length prioritized over complexity
- No mandatory periodic changes
- Pattern recognition for weak passwords
- Cryptographically secure random generation

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom components**: Reusable, styled components
- **Dark/Light support**: Consistent theming
- **Smooth animations**: Enhanced user experience

## 📊 Password Strength Assessment

The strength assessment follows NIST 2024 guidelines:

1. **Length scoring** (primary factor):
   - 8+ chars: +2 points
   - 12+ chars: +2 points  
   - 15+ chars: +2 points
   - 20+ chars: +1 point

2. **Character diversity** (secondary factor):
   - Each character type: +1 point

3. **Pattern penalties**:
   - Repeating characters: -1 point
   - Sequential characters: -1 point

## 🧪 Testing

The application includes comprehensive error handling and validation:
- Input validation for all user inputs
- Graceful fallbacks for browser compatibility
- Error boundaries for unexpected failures
- Toast notifications for user feedback
