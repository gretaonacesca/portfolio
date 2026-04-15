import { Link } from 'react-router-dom'
import empathyMap from '../assets/fruh-genug/empathy-map.png'
import planner from '../assets/fruh-genug/planner.png'
import lofiSketch from '../assets/fruh-genug/lofi-sketch.png'
import midfiWireframe from '../assets/fruh-genug/midfi-wireframe.png'
import hifiMockup from '../assets/fruh-genug/hifi-mockup.png'
import roadmap from '../assets/fruh-genug/roadmap.png'
import heroGrouped from '../assets/fruh-genug/hero-grouped.png'
import failingSystemDiagram from '../assets/fruh-genug/failing-system-diagram.png'
import wireframeEvo1 from '../assets/fruh-genug/wireframe-evo-1.gif'
import wireframeEvo2 from '../assets/fruh-genug/wireframe-evo-2.gif'
import wireframeEvo3 from '../assets/fruh-genug/wireframe-evo-3.gif'
import './FruhGenugPage.css'

export default function FruhGenugPage() {
  return (
    <div className="fruh-page">
      <div className="page">
        <Link to="/" className="back-link">← back</Link>

        <section className="fruh-hero">
          <img src={heroGrouped} alt="Früh Genug system flow hero" className="fruh-hero-image" />
        </section>

        <section className="fruh-intro">
          <div className="fruh-intro-text">
            <h1>Früh Genug</h1>
            <p className="fruh-subtitle">
              Google.org Impact Challenge for Government Innovation
            </p>
            <p>
              <strong>My role:</strong> proposal co-authorship, system logic
              prototyping, UX/UI design
            </p>
            <p>
              Linz, Austria has an opportunity: its most vulnerable residents are
              not invisible to the state. Linz's centralised public service
              network means that they appear in utility records, hospital
              discharge registries, social benefit databases, and insurance data.
              The information exists, but none of these systems talk to each
              other, and no single professional ever sees the complete picture.
              The result is crisis-driven care.
            </p>
            <p>
              <em>Früh Genug</em> is an agentic AI platform designed to change
              that. It monitors cross-institutional signals and surfaces emerging
              risk before it escalates into crisis. The design logic is opt-in by
              default: rather than the city deciding when someone is at risk,
              residents pre-authorise their own alert conditions during moments of
              stability, in the same legal tradition as Austria's existing advance
              medical directive. Help is offered rather than demanded: a
              distinction that matters when stigma and administrative anxiety
              become insurmountable barriers.
            </p>
            <p>
              I co-authored the original grant proposal and led the UX design of
              the platform's two primary interfaces: the caseworker dashboard and
              the resident portal, both translating a complex agentic system into
              facades that feel calm, legible, and humane under pressure.
            </p>
          </div>
          <div className="fruh-intro-images">
            <div className="fruh-intro-img">
              <img src={empathyMap} alt="Empathy map" />
            </div>
            <div className="fruh-intro-img">
              <img src={planner} alt="Daily planner document" />
            </div>
          </div>
        </section>

        <section
          className="fruh-intro-diagram"
          aria-label="Populations the system fails and why"
        >
          <img
            src={failingSystemDiagram}
            alt='Diagram: “The people the system is failing — and why,” mapping four groups—isolated elderly adults, severe mental illness, newly arrived immigrants, and homeless residents—to failure modes and data signals.'
            className="fruh-intro-diagram-image"
          />
        </section>

        <section className="fruh-research">
          <div className="fruh-research-card">
            <h2>Research Methodology</h2>
            <p>
              Primary research with the target populations was ethically
              constrained: conducting interviews with homeless residents, elderly
              adults, or people in psychiatric crisis requires institutional
              access and ethics approval beyond the scope of this project.
              Research was instead grounded in three sources: the Früh Genug grant
              proposal, developed in collaboration with IT:U researchers with
              direct institutional knowledge; published literature on psychiatric
              crisis intervention and analogous early-warning systems including
              the LA County Homelessness Prevention Unit; and the lived experience
              of navigating psychiatric care.
            </p>
          </div>
          <div className="fruh-research-embed">
            <iframe
              className="fruh-research-embed-frame"
              src="https://fruehgenug.vercel.app"
              title="Frueh Genug live demo"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <p className="fruh-research-embed-fallback">
              If the embedded view is blocked, open the live site directly:{' '}
              <a
                href="https://fruehgenug.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                fruehgenug.vercel.app
              </a>
            </p>
          </div>
        </section>

        <section className="fruh-process">
          <div className="fruh-process-item">
            <div className="fruh-process-graphic">
              <h3 className="fruh-process-caption fruh-process-caption-tr">
                Low Fidelity Sketch
              </h3>
              <div className="fruh-lowfi-layout">
                <div className="fruh-lowfi-gifs" aria-label="Wireframe evolution snippets">
                  <img src={wireframeEvo1} alt="Wireframe evolution snippet 1" className="fruh-lowfi-gif fruh-lowfi-gif-a" />
                  <img src={wireframeEvo2} alt="Wireframe evolution snippet 2" className="fruh-lowfi-gif fruh-lowfi-gif-b" />
                  <img src={wireframeEvo3} alt="Wireframe evolution snippet 3" className="fruh-lowfi-gif fruh-lowfi-gif-c" />
                </div>
                <div className="fruh-process-img fruh-process-img-lowfi">
                  <img src={lofiSketch} alt="Low fidelity sketch" />
                </div>
              </div>
            </div>
          </div>

          <div className="fruh-process-item">
            <div className="fruh-process-graphic">
              <h3 className="fruh-process-caption fruh-process-caption-tl">
                Mid Fidelity Wireframe
              </h3>
              <div className="fruh-process-img fruh-process-img-wide">
                <img src={midfiWireframe} alt="Mid fidelity wireframe" />
              </div>
            </div>
          </div>

          <div className="fruh-process-item">
            <div className="fruh-process-graphic">
              <h3 className="fruh-process-caption fruh-process-caption-tr">
                High Fidelity Mockup
              </h3>
              <div className="fruh-process-img fruh-process-img-wide">
                <img src={hifiMockup} alt="High fidelity mockup" />
              </div>
            </div>
          </div>
        </section>

        <section className="fruh-bottom">
          <div className="fruh-lessons">
            <h2>Lessons Learnt</h2>
            <p>
              The most consequential design decision in this project was also the
              earliest: making the system opt-in rather than surveillance-driven.
              That choice cascaded into every subsequent decision.
            </p>
            <p>
              The second lesson is about designing for emotional states rather
              than task flows. A caseworker dashboard is not just an information
              tool: it's used by someone who is tired, behind, and carrying the
              weight of other people's crises.
            </p>
          </div>

          <div className="fruh-roadmap">
            <div className="fruh-roadmap-graphic">
              <h3 className="fruh-roadmap-caption fruh-roadmap-caption-tr">
                Future Roadmap
              </h3>
              <div className="fruh-roadmap-img">
                <img src={roadmap} alt="Future roadmap" />
              </div>
            </div>
          </div>
        </section>

        <nav className="project-pager" aria-label="Project page navigation">
          <span className="project-turn project-turn-disabled" aria-hidden="true">
            &lt;
          </span>
          <span className="project-turn project-turn-current">1</span>
          <Link to="/fjord-freight" className="project-turn project-turn-link" aria-label="Go to project 2 of 2">
            &gt;
          </Link>
        </nav>
      </div>
    </div>
  )
}
