import { Link } from 'react-router-dom'
import empathyMap from '../assets/fruh-genug/empathy-map.png'
import planner from '../assets/fruh-genug/planner.png'
import lofiSketch from '../assets/fruh-genug/lofi-sketch.png'
import midfiWireframe from '../assets/fruh-genug/midfi-wireframe.png'
import hifiMockup from '../assets/fruh-genug/hifi-mockup.png'
import roadmap from '../assets/fruh-genug/roadmap.png'
import architecture from '../assets/fruh-genug/architecture.png'
import './FruhGenugPage.css'

export default function FruhGenugPage() {
  return (
    <div className="fruh-page">
      <div className="page">
        <Link to="/" className="back-link">← back</Link>

        <section className="fruh-hero">
          <div className="fruh-hero-gradient">
            <img src={architecture} alt="System architecture diagram" className="fruh-hero-diagram" />
          </div>
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
          <div className="fruh-research-placeholder" />
        </section>

        <section className="fruh-process">
          <div className="fruh-process-item">
            <h3 className="fruh-process-label fruh-process-label-right">
              Low Fidelity Sketch
            </h3>
            <div className="fruh-process-img">
              <img src={lofiSketch} alt="Low fidelity sketch" />
            </div>
          </div>

          <div className="fruh-process-item">
            <h3 className="fruh-process-label fruh-process-label-left">
              Mid Fidelity Wireframe
            </h3>
            <div className="fruh-process-img fruh-process-img-wide">
              <img src={midfiWireframe} alt="Mid fidelity wireframe" />
            </div>
          </div>

          <div className="fruh-process-item">
            <h3 className="fruh-process-label fruh-process-label-right">
              High Fidelity Mockup
            </h3>
            <div className="fruh-process-img fruh-process-img-wide">
              <img src={hifiMockup} alt="High fidelity mockup" />
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
            <h3>Future Roadmap (feature planning)</h3>
            <div className="fruh-roadmap-img">
              <img src={roadmap} alt="Future roadmap" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
