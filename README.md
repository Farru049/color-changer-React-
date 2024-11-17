# Background Color Changer

A simple, interactive React application that allows users to change the background color using preset colors or generate random colors with smooth transitions.

## 📸 Screenshots
# Background Color Changer

A simple, interactive React application that allows users to change the background color using preset colors or generate random colors with smooth transitions.

## 📸 Screenshots

### Main Interface
![Appearance2.png](https://github.com/Farru049/color-changer-React-/blob/main/Appearance2.png)
*View with the color panel and preset colors*

### Color Change Example
![Appearance](https://github.com/Farru049/color-changer-React-/blob/main/Appearance1.png)
*Example of the application with a changed background color*

## 🚀 Features

- Change background color with preset color palette
- Generate random colors
- Smooth color transitions
- Responsive design
- Real-time color code display
- Modern, clean UI

## 🛠️ Technologies Used

- React 18
- Vite
- CSS3
- JavaScript (ES6+)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/farru049/color-changer-React-.git
```

2. Navigate to the project directory:
```bash
cd color-changer
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit:
```
http://localhost:5173
```

## 💻 Usage

1. Click on any preset color circle to change the background to that color
2. Click the "Generate Random Color" button to get a random background color
3. The current color's hex code is displayed at the bottom of the panel

## 🔧 Project Structure

```
color-changer/
├── src/
│   ├── App.jsx        # Main component
│   ├── App.css        # Component styles
│   └── index.css      # Global styles
├── public/
│   ├── Appearance.png    # Screenshot 1
│   └── Appearance2.png   # Screenshot 2
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Color Palette

The default color palette includes:
- Red (#ff6b6b)
- Turquoise (#4ecdc4)
- Blue (#45b7d1)
- Mint (#96ceb4)
- Cream (#ffeead)
- Mauve (#d4a5a5)
- Purple (#9b59b6)
- Royal Blue (#3498db)

## 🔄 Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run preview`: Previews the production build locally

## 🚀 Deployment

To deploy the application:

1. Build the project:
```bash
npm run build
```

2. The build files will be in the `dist` directory, ready to be deployed to your hosting platform of choice.

## 📝 Customization

### Adding New Colors

To add new preset colors, modify the `colors` array in `App.jsx`:

```javascript
const colors = [
    '#ff6b6b',
    '#4ecdc4',
    // Add your new colors here
];
```

### Modifying Transition Speed

To change the color transition speed, update the transition property in `App.jsx`:

```javascript
style={{ transition: 'background-color 0.5s ease' }}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspiration from various color picker tools
- React community for awesome documentation
- Vite for the blazing fast development experience

## 📧 Contact

Mohammad Farhaan Ali - [alifarhaan655@gmail.com](mailto:alifarhaan655@gmail.com)


---

Made with ❤️ by Mohammad Farhaan Ali
