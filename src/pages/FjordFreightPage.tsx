import { Link } from 'react-router-dom'
import heroDashboard from '../assets/fjord-freight/hero-dashboard.png'
import lofiSketch from '../assets/fjord-freight/lofi-sketch.png'
import midfiWireframe from '../assets/fjord-freight/midfi-wireframe.png'
import hifiMockup from '../assets/fjord-freight/hifi-mockup.png'
import handoverNotes from '../assets/fjord-freight/handover-notes.png'
import lessonsLearnt from '../assets/fjord-freight/lessons-learnt.png'
import brandTruck from '../assets/fjord-freight/brand-truck.png'
import brandWheels from '../assets/fjord-freight/brand-wheels.png'
import brandCoral from '../assets/fjord-freight/brand-coral.png'
import brandFjordPhoto from '../assets/fjord-freight/brand-fjord-photo.png'
import dashboardDetail from '../assets/fjord-freight/dashboard-detail.png'
import logoVector from '../assets/fjord-freight/logo-vector.svg'
import wireframeEvo1 from '../assets/fjord-freight/wireframe-evo-1.gif'
import wireframeEvo2 from '../assets/fjord-freight/wireframe-evo-2.gif'
import wireframeEvo3 from '../assets/fjord-freight/wireframe-evo-3.gif'
import './FjordFreightPage.css'

export default function FjordFreightPage() {
  return (
    <div className="fjord-page">
      <div className="page">
        <Link to="/" className="back-link back-link-dark">← back</Link>

        <section className="fjord-hero">
          <img src={heroDashboard} alt="Fjord Freight dashboard" />
        </section>

        <section className="fjord-intro">
          <div className="fjord-intro-text">
            <h1>Fjord Freight</h1>
            <p>
              Fjord Freight is a fictional Nordic freight company operating a
              mixed-fleet of electric, hydrogen, and diesel vehicles at different
              stages of a transition toward full decarbonisation. The internal
              operations dashboard I designed gives fleet managers a live view of
              emissions performance, route efficiency, and fleet composition:
              making the invisible costs of every journey legible, and the path
              toward a cleaner fleet actionable.
            </p>
            <p>
              This is a self-initiated concept project. I chose the brief because
              it sits at the intersection of two things I find genuinely
              interesting: complex operational data that needs to be made
              human-readable under time pressure, and the design challenge of
              encoding a three-way system (where one category is legacy, one is
              scaling, and one is the future) without flattening the distinction
              between them.
            </p>
          </div>
          <div className="fjord-intro-img">
            <img src={dashboardDetail} alt="Dashboard detail view" />
          </div>
        </section>

        <section className="fjord-branding">
          <div className="fjord-branding-text">
            <h2>branding kit</h2>
            <p>
              The Fjord logo began with a question: what makes a fjord a fjord?
              Following that thread led from saltwater to the microscopic
              organisms living in it, these glass-bead looking algae whose
              geometric precision is somewhere between natural and engineered.
            </p>
            <p>
              The final mark abstracts a diatom's structural logic into a squared
              Möbius strip, a continuous loop that reads simultaneously as an
              infinite road and a sustainability cycle. The shape language of the
              favicon carries through into the wordmark, creating a coherent
              visual system.
            </p>
          </div>

          <div className="fjord-branding-grid">
            <div className="fjord-brand-img fjord-brand-truck">
              <img src={brandTruck} alt="Fjord Freight truck" />
            </div>
            <div className="fjord-brand-img fjord-brand-wheels">
              <img src={brandWheels} alt="Power on wheels" />
            </div>
            <div className="fjord-brand-img fjord-brand-fjord">
              <img src={brandFjordPhoto} alt="Norwegian fjord" />
            </div>
            <div className="fjord-brand-logo">
              <img src={logoVector} alt="Fjord Freight logo" />
            </div>
            <div className="fjord-brand-img fjord-brand-coral">
              <img src={brandCoral} alt="Coral sand texture" />
            </div>
            <div className="fjord-color-swatches">
              <div className="fjord-swatch" style={{ background: 'var(--diesel-amber)' }} />
              <div className="fjord-swatch" style={{ background: 'var(--hydrogen-teal)' }} />
              <div className="fjord-swatch" style={{ background: 'var(--ev-blue)' }} />
              <div className="fjord-swatch" style={{ background: 'var(--navy)' }} />
            </div>
          </div>
        </section>

        <section className="fjord-process">
          <div className="fjord-process-item">
            <h3 className="fjord-process-label">Low Fidelity Sketch</h3>
            <div className="fjord-lowfi-layout">
              <div className="fjord-lowfi-gifs" aria-label="Wireframe evolution snippets">
                <img src={wireframeEvo1} alt="Wireframe evolution snippet 1" className="fjord-lowfi-gif fjord-lowfi-gif-a" />
                <img src={wireframeEvo2} alt="Wireframe evolution snippet 2" className="fjord-lowfi-gif fjord-lowfi-gif-b" />
                <img src={wireframeEvo3} alt="Wireframe evolution snippet 3" className="fjord-lowfi-gif fjord-lowfi-gif-c" />
              </div>
              <div className="fjord-process-img fjord-process-img-lowfi">
                <img src={lofiSketch} alt="Low fidelity sketch" />
              </div>
            </div>
          </div>

          <div className="fjord-process-item">
            <h3 className="fjord-process-label fjord-process-label-left">
              Mid Fidelity Wireframes
            </h3>
            <div className="fjord-process-img fjord-process-img-wide">
              <img src={midfiWireframe} alt="Mid fidelity wireframe" />
            </div>
          </div>

          <div className="fjord-process-item">
            <h3 className="fjord-process-label">High Fidelity Mockup</h3>
            <div className="fjord-process-img fjord-process-img-wide">
              <img src={hifiMockup} alt="High fidelity mockup" />
            </div>
          </div>
        </section>

        <section className="fjord-handover">
          <div className="fjord-handover-img">
            <img src={handoverNotes} alt="Dashboard component details" />
          </div>
          <div className="fjord-handover-text">
            <h2>Handover Notes</h2>

            <h4>Design files</h4>
            <ul>
              <li>
                All assets in Figma, organised across: Brand Identity, Component
                Library, Dashboard Hi-Fi, Annotations, Redline Specs
              </li>
              <li>
                Components use auto-layout and consistent naming aligned to the
                design token table
              </li>
              <li>
                Do not detach components — most have defined states that must
                remain intact
              </li>
            </ul>

            <h4>Design tokens</h4>
            <ul>
              <li>
                Token table is the source of truth for all colour, typography,
                and spacing values
              </li>
              <li>
                Fuel-type colours (EV blue #4A9EFF, hydrogen teal #2DD4A0,
                diesel amber #F5A623) are semantically named and
                non-substitutable: they carry meaning
              </li>
            </ul>

            <h4>Component states</h4>
            <ul>
              <li>
                All components include: default, hover, active, and empty/no
                data states
              </li>
              <li>
                Empty states for the fleet map tile and emissions chart are
                critical: the dashboard must degrade gracefully when data is
                unavailable
              </li>
            </ul>

            <h4>Accessibility</h4>
            <ul>
              <li>All colour combinations meet WCAG AA</li>
              <li>
                Fuel-type encoding uses colour + label, never colour alone
              </li>
              <li>
                Screen reader annotations are included as a separate Figma
                layer, please implement
              </li>
            </ul>

            <h4>Open questions for development</h4>
            <ul>
              <li>
                Fleet map GIS integration requires separate technical scoping,
                design specifies visual output only
              </li>
              <li>
                Emissions chart tooltip behaviour is specified in annotations
                but not prototyped in Figma
              </li>
            </ul>

            <h4>One thing to preserve</h4>
            <ul>
              <li>
                The diesel column being narrower than EV and hydrogen is
                intentional — it encodes phase-out status. Do not normalise
                column widths for layout convenience without consulting design.
              </li>
            </ul>
          </div>
        </section>

        <section className="fjord-bottom">
          <div className="fjord-lessons">
            <h2>Lessons Learnt</h2>
            <p>
              The most useful design decision in this project was also the most
              counter-intuitive: letting layout encode meaning. Making the diesel
              tile narrower than EV and hydrogen communicates the phase-out logic
              without a single word of explanation. Arriving at that decision
              required resisting the instinct toward visual uniformity.
            </p>
            <p>
              The second lesson is about the relationship between brand identity
              and product design. The brand kit and the product design reinforce
              each other in ways that wouldn't have been possible if I'd treated
              them as separate workstreams.
            </p>
          </div>
          <div className="fjord-lessons-img">
            <img src={lessonsLearnt} alt="Dashboard annotations" />
          </div>
        </section>

        <nav className="project-pager project-pager-dark" aria-label="Project page navigation">
          <Link to="/fruh-genug" className="project-turn project-turn-link" aria-label="Go to project 1 of 2">
            &lt;
          </Link>
          <span className="project-turn project-turn-current">2</span>
          <span className="project-turn project-turn-disabled" aria-hidden="true">
            &gt;
          </span>
        </nav>
      </div>
    </div>
  )
}
