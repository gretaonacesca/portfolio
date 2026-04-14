import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FruhGenugPage from './pages/FruhGenugPage'
import FjordFreightPage from './pages/FjordFreightPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/fruh-genug" element={<FruhGenugPage />} />
      <Route path="/fjord-freight" element={<FjordFreightPage />} />
    </Routes>
  )
}

export default App
