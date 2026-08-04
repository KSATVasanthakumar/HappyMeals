import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <main className="page">
      <div className="glow" aria-hidden="true" />

      <div className="content">
        <img src={logo} alt="Happy Meals" className="logo" />

        <h1>Something Nutritious Is Cooking</h1>
        <p className="subtitle">
          We're preparing a fresh, healthy new experience for Happy Meals.
          Wholesome menus, honest ingredients — coming to your table soon.
        </p>

        <div className="badge">
          <span className="dot" />
          Launching soon
        </div>
      </div>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Happy Meals. All rights reserved.
      </footer>
    </main>
  )
}

export default App
