import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')

  // Array of predefined colors
  const colors = [
    '#ff6b6b', // Red
    '#4ecdc4', // Turquoise
    '#45b7d1', // Blue
    '#96ceb4', // Mint
    '#ffeead', // Cream
    '#d4a5a5', // Mauve
    '#9b59b6', // Purple
    '#3498db'  // Royal Blue
  ]

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  return (
    <div className="container" style={{ backgroundColor, transition: 'background-color 0.5s ease' }}>
      <div className="color-panel">
        <h1>Background Color Changer</h1>
        
        {/* Random Color Button */}
        <button 
          className="random-btn"
          onClick={() => setBackgroundColor(getRandomColor())}
        >
          Generate Random Color
        </button>

        {/* Preset Colors */}
        <div className="color-grid">
          {colors.map((color, index) => (
            <button
              key={index}
              className="color-btn"
              style={{ backgroundColor: color }}
              onClick={() => setBackgroundColor(color)}
              aria-label={`Change to color ${color}`}
            />
          ))}
        </div>

        {/* Current Color Display */}
        <div className="color-display">
          <p>Current Color: {backgroundColor}</p>
        </div>
      </div>
    </div>
  )
}

export default App