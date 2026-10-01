import { useState } from 'react'
import heroImg from './assets/hero.png' // Lo mantenemos por si lo necesitas luego
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <main className="app-container">
      <div className="glass-card">
        <div className="logos">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react spin" alt="React logo" />
        </div>

        <h1 className="title">Laboratorio DevOps AWS</h1>
        <h2 className="subtitle">Desplegado con AWS Amplify 🚀</h2>
        
        <div className="info-box">
          <p><span>📁 Grupo:</span> AWS</p>
          <p><span>📚 Curso:</span> Laboratorio DevOps</p>
        </div>

        <div className="team-section">
          <h3>Equipo de Desarrollo</h3>
          <ul className="team-list">
            <li>👨‍💻 Sergio Cardona</li>
            <li>👨‍💻 Edgar David Perez</li>
            <li>👩‍💻 Laura Juliana Cardenas</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;