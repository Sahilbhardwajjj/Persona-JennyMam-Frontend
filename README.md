# Persona - Coding AI Chat Frontend

A beautiful, Apple-inspired chat interface for a coding assistant that responds only to programming questions. Built with Create React App.

## Features

✨ **Beautiful Design**
- Apple-inspired chat UI with smooth animations
- Modern, clean interface with professional aesthetics
- Coding-themed color scheme (blue and green)
- Responsive design for all screen sizes

💻 **Coding-Focused**
- Tailored for programming questions only
- Code block styling support
- Developer-friendly input with markdown support
- Persona display with professional titles

🎯 **Interactive Elements**
- Real-time message display with typing animation
- Expandable text input (grows with content)
- Smooth scroll to latest messages
- Keyboard shortcuts (Enter to send, Shift+Enter for new line)
- Action buttons in the header

## Project Structure

```
persona/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── components/
│   │   ├── ChatInput.js        # Input component
│   │   ├── ChatInput.css
│   │   ├── Message.js          # Single message component
│   │   ├── Message.css
│   │   ├── MessagesList.js     # Messages container
│   │   ├── MessagesList.css
│   │   ├── PersonaHeader.js    # Header with persona info
│   │   └── PersonaHeader.css
│   ├── App.js                  # Main app component
│   ├── App.css
│   ├── index.js                # React entry point
│   └── index.css               # Global styles
├── package.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd /Users/sahilbhardwaj/Desktop/persona

# Install dependencies
npm install
```

### Running the App

```bash
# Start the development server
npm start
```

The app will open in your browser at `http://localhost:3000`

### Build for Production

```bash
# Create a production build
npm build

# Serve the build (requires a server)
npm install -g serve
serve -s build
```

## How to Use

1. **View Persona**: The header shows the name and role of the coding assistant (currently "Alex Dev - Senior Developer")

2. **Send Messages**:
   - Type your coding question in the input field
   - Press `Enter` to send
   - Use `Shift+Enter` to create a new line

3. **Read Responses**: Messages appear with smooth animations, and you'll see a typing indicator while the assistant is responding

## Customization

### Change Persona Details
In `src/App.js`, modify the `useState` hooks:
```javascript
const [personaName] = useState('Your Name');
const [personaRole] = useState('Your Role');
```

### Change Colors
In `src/index.css`, modify the `:root` CSS variables:
```css
:root {
  --primary-color: #0066cc;      /* Blue */
  --secondary-color: #34c759;    /* Green */
  --message-user-bg: #0066cc;    /* User messages */
  --message-assistant-bg: #e5e5ea; /* Assistant messages */
}
```

### Modify Welcome Message
In `src/App.js`, update the initial message in the `useState` hook:
```javascript
const [messages, setMessages] = useState([
    {
        isUser: false,
        content: 'Your custom welcome message here!',
        timestamp: new Date(),
    },
]);
```

### Update Response Logic
Modify the `generateResponse()` function in `src/App.js` to add your actual AI responses later.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Component Structure

### PersonaHeader
Displays the AI persona's avatar, name, and role with action buttons.

### MessagesList
Renders all messages with auto-scroll, typing indicator, and empty state.

### Message
Individual message bubble with different styling for user/assistant.

### ChatInput
Expandable textarea input with send button and keyboard shortcuts.

## Next Steps

1. **Integrate Backend**: Connect to your AI model/API
2. **Add Message History**: Store conversations in a database
3. **Implement Authentication**: Add user login system
4. **Add Dark Mode**: Create theme toggle
5. **Mobile Optimization**: Test on mobile devices
6. **Code Highlighting**: Add syntax highlighting for code blocks
7. **Voice Messages**: Add audio input/output

## Technical Stack

- **React 18**: UI library with hooks
- **Create React App**: Development environment
- **Vanilla CSS**: Pure CSS styling (modular)
- **ES6+**: Modern JavaScript

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Environment Variables

Create a `.env` file in the root directory for environment variables:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_API_KEY=your_api_key_here
```

## Notes

- The current response is simulated with a random delay
- Uses React hooks for state management
- Modular CSS for easy customization
- All styling is mobile-responsive

---

Ready for Phase 2: Generative AI Integration! 🚀
