import { Link } from 'react-router-dom'
import portraitImg from '../assets/portrait.png'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      <main className="about-layout page">
        <div className="bio-card">
          <h1>Greta Toth</h1>
          <p>My path to UX may not be linear, but it is coherent.</p>
          <p>
            I trained as an architect at Cambridge, spent two years designing
            spatial systems and wayfinding at a Budapest studio, then moved into
            municipal policy, where I wrote EU grant applications, managed
            international stakeholder relationships, and translated complex
            institutional frameworks into actionable briefs.
          </p>
          <p>
            For the past year and a half I've been the in-house UX designer at
            OriginChains, a sustainability startup building AI-powered tools that
            make opaque corporate ESG data genuinely usable by everyday
            customers. What connects all of it is the same underlying problem:
            how do you make complex systems legible to the humans who depend on
            them?
          </p>
          <p>
            That question is also the core of my MSc studies at
            Interdisciplinary Computing at IT:U Linz, where my work focuses on
            translating dense, high-stakes data into ethical, human-centred
            solutions, digital or otherwise. I bring things to a design team that
            are genuinely hard to find in one person: the spatial thinking of an
            architect, the stakeholder fluency of a policy professional, the
            technical range of someone who moves confidently between Figma,
            Python, and Grasshopper.
          </p>
          <p>
            I'm looking for a product design role where complexity is the point,
            not an obstacle. If your platform handles dense data, high-stakes
            decisions, or users who can't afford friction, that's exactly where I
            want to be.
          </p>
        </div>

        <div className="about-sidebar">
          <div className="about-portrait">
            <img src={portraitImg} alt="Greta Toth" />
          </div>
          <Link to="/" className="about-btn">
            other works
          </Link>
          <a href="#" className="about-btn">
            download CV pdf
          </a>
        </div>
      </main>
    </div>
  )
}
