
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
function Home() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);

const highlightImages = [
  "/eureka-team.jpg",
  "/eureka-team-2.jpg",
  "/eureka-team-3.jpg",
];

function nextImage() {
  setIsImageVisible(false);

  setTimeout(() => {
    setCurrentImage(
      (currentImage + 1) % highlightImages.length
    );
    setIsImageVisible(true);
  }, 300);
}

function previousImage() {
  setIsImageVisible(false);

  setTimeout(() => {
    setCurrentImage(
      (currentImage - 1 + highlightImages.length) %
        highlightImages.length
    );
    setIsImageVisible(true);
  }, 300);
}

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: true });

    if (error) {
      console.error("Error fetching events:", error);
      return;
    }

    setEvents(data || []);
  }

  function formatMonth(date) {
    return new Date(date)
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();
  }

  function formatDate(date) {
    return new Date(date).getDate();
  }

  function formatYear(date) {
    return new Date(date).getFullYear();
  }

  return (
    <main className="home-page">

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">

          <p className="section-label">
            ENTREPRENEURSHIP CELL
          </p>

          <h1>
            Turn Ideas Into
            <span> Impact.</span>
          </h1>

          <p className="hero-description">
            E-Cell KPRIT-COE empowers students to innovate,
            build and lead the startups of tomorrow.
          </p>

          <div className="hero-buttons">
            <Link to="/events" className="primary-button">
              Explore Events
              <span>→</span>
            </Link>

            <Link to="/about" className="secondary-button">
              About E-Cell
              <span>→</span>
            </Link>
          </div>

        </div>

        <div className="hero-visual">
  <div className="rocket-scene">

    <div className="rocket-glow"></div>

    <div className="rocket">

      <div className="rocket-body">
        <div className="rocket-window"></div>
      </div>

      <div className="rocket-fin rocket-fin-left"></div>
      <div className="rocket-fin rocket-fin-right"></div>

      <div className="rocket-flame">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>

    <div className="rocket-particle particle-1"></div>
    <div className="rocket-particle particle-2"></div>
    <div className="rocket-particle particle-3"></div>

  </div>
</div>
      </section>
      {/* Events Highlight */}
<section className="events-highlight">

  <div className="events-highlight-content">

    <div className="events-highlight-text">

      <p className="section-label">
        EVENT HIGHLIGHT
      </p>

      <h2>
        Eureka Pitching
      </h2>

      <p>
        A platform where innovative ideas come to life. 
        Eureka Pitching brought together aspiring entrepreneurs 
        to present their ideas, receive valuable feedback and 
        take their first step towards building impactful ventures.
      </p>

      <div className="events-highlight-meta">
        <span>📅 24 August 2026</span>
        <span>📍 D Block Auditorium</span>
      </div>

      <Link
        to="/events"
        className="primary-button"
      >
        Explore Events
        <span>→</span>
      </Link>

    </div>

    <div className="events-highlight-image">

      <img
  src={highlightImages[currentImage]}
  alt="E-Cell KPRIT-COE Eureka Pitching Team"
  className={
    isImageVisible
      ? "highlight-image-visible"
      : "highlight-image-hidden"
  }
/>

  <button
    className="highlight-prev"
    onClick={previousImage}
    aria-label="Previous image"
  >
    ‹
  </button>

  <button
    className="highlight-next"
    onClick={nextImage}
    aria-label="Next image"
  >
    ›
  </button>

    </div>

  </div>

</section>
      

            {/* E-Certificates */}
      <section className="certificates-section">

        <div className="section-heading">

          <p className="section-label">
            PARTICIPANTS
          </p>

          <h2>
            Get Your E-Certificate
          </h2>

          <p>
            Event participants can access and download their
            certificates from the official E-Cell KPRIT-COE folder.
          </p>

          <a
  href="https://drive.google.com/drive/folders/19d_mQ6rPS9zFFRMhp46DxL37B1WaoFac?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-button"
>
  Access E-Certificates
  <span>→</span>
</a>

<a
  href="https://drive.google.com/drive/folders/1A-Wxo93xZJ7F5S30XkhL9S-0pNc-sMFb?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="secondary-button"
>
  Merit Certificates
  <span>→</span>
</a>

        </div>

      </section>


      {/* What We Do */}
      <section className="what-we-do">

        <div className="section-heading">
          <p className="section-label">
            WHAT WE DO
          </p>

          <h2>
            Empowering Future Entrepreneurs
          </h2>

          <p>
            We create opportunities for students to explore ideas,
            develop entrepreneurial skills and turn innovation into impact.
          </p>

          <div className="heading-line"></div>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-number">01</div>
            <h3>Inspire</h3>
            <p>
              Spark curiosity and encourage students to think beyond
              conventional solutions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">02</div>
            <h3>Educate</h3>
            <p>
              Provide workshops, mentorship and practical exposure
              to entrepreneurship.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">03</div>
            <h3>Innovate</h3>
            <p>
              Transform creative ideas into meaningful and
              practical solutions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">04</div>
            <h3>Impact</h3>
            <p>
              Build a community of changemakers who create
              positive real-world impact.
            </p>
          </div>

        </div>

      </section>


      {/* Upcoming Events */}
      <section className="upcoming-events">

        <div className="events-heading">

          <div>
            <p className="section-label">
              UPCOMING EVENTS
            </p>

            <h2>
              Join. Learn. Build.
            </h2>
          </div>

          <Link
            to="/events"
            className="view-all-events"
          >
            View All Events →
          </Link>

        </div>


        <div className="event-cards">

          {events.length > 0 ? (

            events.map((event) => (

              <article
                className="event-card"
                key={event.id}
                onClick={() => navigate(`/events/${event.id}`)}
                style={{ cursor: "pointer" }}
              >

                <div className="event-date">

                  <span>
                    {formatMonth(event.event_date)}
                  </span>

                  <strong>
                    {formatDate(event.event_date)}
                  </strong>

                  <small>
                    {formatYear(event.event_date)}
                  </small>

                </div>


                <div className="event-info">

                  <p className="event-type">
                    E-CELL EVENT
                  </p>

                  <h3>
                    {event.title}
                  </h3>

                  <p>
                    {event.description}
                  </p>

                  <div className="event-meta">

                    <span>
                      📅{" "}
                      {formatDate(event.event_date)}{" "}
                      {formatMonth(event.event_date)}{" "}
                      {formatYear(event.event_date)}
                    </span>

                    <span>
                      📍{" "}
                      {event.location || "KPRIT-COE"}
                    </span>

                  </div>

                  <Link
                    to="/register"
                    className="event-register"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Register →
                  </Link>

                </div>

              </article>

            ))

          ) : (

            <div className="no-events">
              <p>
                No upcoming events at the moment.
              </p>
            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default Home;
