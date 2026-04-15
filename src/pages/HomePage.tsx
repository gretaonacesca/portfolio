import { Link } from 'react-router-dom'
import heroPortrait from '../assets/home/hero-portrait.png'
import fruhChart from '../assets/home/fruh-chart.png'
import fruhProgress from '../assets/home/fruh-progress.png'
import fruhToolbar from '../assets/home/fruh-toolbar.png'
import fruhChart2 from '../assets/home/fruh-chart2.png'
import fjordRotated from '../assets/home/fjord-rotated.png'
import fjordMockup from '../assets/home/fjord-mockup.png'
import fjordSmall1 from '../assets/home/fjord-small1.png'
import fjordSmall2 from '../assets/home/fjord-small2.png'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1 className="home-greeting">Hi! I'm Greta Toth,</h1>
        <p className="home-tagline">
          an architect turned policy professional turned UX designer
        </p>
      </header>

      <div className="bento-grid">
        {/* Background cards */}
        <Link to="/fruh-genug" className="bento-card bento-fruh">
          <div className="bento-fruh-content">
            <h2>Früh Genug</h2>
            <p>psychiatric early-warning platform</p>
          </div>
          <div className="bento-fruh-gradient" />
        </Link>

        <div className="bento-card bento-stat bento-stat-projects">
          <span className="bento-stat-number">2</span>
          <span className="bento-stat-label">projects</span>
        </div>

        <div className="bento-card bento-stat bento-stat-fluff">
          <span className="bento-stat-number">0</span>
          <span className="bento-stat-label">fluff</span>
        </div>

        <a href="mailto:greta.on.a.cesca@gmail.com" className="bento-card bento-nav bento-contact">
          contact
        </a>

        <Link to="/fjord-freight" className="bento-card bento-fjord">
          <div className="bento-fjord-gradient" />
          <div className="bento-fjord-content">
            <h2>Fjord Freight</h2>
            <p>trucking ESG dashboard</p>
          </div>
        </Link>

        <div className="bento-center-bg" />

        <Link to="/about" className="bento-card bento-nav bento-about">
          about
        </Link>

        {/* Portrait photo – overlaps center */}
        <div className="bento-portrait-wrapper">
          <img src={heroPortrait} alt="Greta Toth" className="bento-portrait" />
        </div>

        {/* Decorative floating screenshots */}
        <img src={fruhChart} alt="" className="bento-float bento-fruh-chart" />
        <img src={fruhProgress} alt="" className="bento-float bento-fruh-progress" />
        <img src={fruhChart2} alt="" className="bento-float bento-fruh-chart2" />
        <img src={fruhToolbar} alt="" className="bento-float bento-fruh-toolbar" />
        <div className="bento-fjord-glass" aria-hidden="true" />
        <img src={fjordRotated} alt="" className="bento-float bento-fjord-rotated" />
        <img src={fjordMockup} alt="" className="bento-float bento-fjord-mockup" />
        <img src={fjordSmall1} alt="" className="bento-float bento-fjord-small1" />
        <img src={fjordSmall2} alt="" className="bento-float bento-fjord-small2" />
      </div>
    </div>
  )
}
