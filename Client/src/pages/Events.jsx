import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function Events() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

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

  function formatDate(date) {
    const eventDate = new Date(date);

    return {
      month: eventDate
        .toLocaleString("en-US", { month: "short" })
        .toUpperCase(),

      day: eventDate.getDate(),

      year: eventDate.getFullYear(),
    };
  }

  return (
    <main className="events-page">

      <section className="events-header">
        <p className="section-label">E-CELL EVENTS</p>

        <h1>Explore. Participate. Build.</h1>

        <p>
          Discover upcoming workshops, competitions and
          entrepreneurship opportunities.
        </p>
      </section>


      <section className="events-list">


        {/* =====================================================
            1. ILLUMINATE – ENTREPRENEURSHIP WORKSHOP
            STATIC CARD
        ===================================================== */}

        <div className="full-event-card illuminate-event-card">

          {/* Poster */}
          <div className="illuminate-poster">
            <img
              src="/illuminate-poster.jpg"
              alt="Illuminate - Entrepreneurship Workshop"
            />
          </div>


          {/* Date */}
          <div className="full-date illuminate-date">
            <span>OCT</span>
            <strong>17</strong>
            <small>2026</small>
          </div>


          {/* Event Content */}
          <div className="full-event-content">

            <p className="event-type">
              ENTREPRENEURSHIP WORKSHOP
            </p>

            <h2>
              Illuminate – Entrepreneurship Workshop
            </h2>

            <p>
              Join us for Illuminate, an entrepreneurship workshop
              designed to help students explore entrepreneurial
              thinking, understand the startup ecosystem, and
              transform ideas into meaningful opportunities.
            </p>

            <div className="illuminate-event-details">

              <p>
                🕒 <strong>Event Time: </strong> 10:00 AM 
              </p>

              <p>
                📍 <strong>Location:</strong> KPRIT-COE
              </p>

            </div>


            {/* Google Form Registration */}
            <a
              href="YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button illuminate-register"
            >
              Register Now →
            </a>

          </div>

        </div>



        {/* =====================================================
            2. EXISTING EUREKA PITCHING CARD
            REGISTER BUTTON REMOVED
        ===================================================== */}

        {events
          .filter((event) =>
            event.title?.toLowerCase().includes("eureka")
          )
          .map((event) => {
            const date = formatDate(event.event_date);

            return (
              <div
                className="full-event-card"
                key={event.id}
                onClick={() => navigate(`/events/${event.id}`)}
                style={{ cursor: "pointer" }}
              >

                <div className="full-date">
                  <span>{date.month}</span>
                  <strong>{date.day}</strong>
                  <small>{date.year}</small>
                </div>

                <div className="full-event-content">

                  <h2>{event.title}</h2>

                  <p>{event.description}</p>

                  {event.event_time && (
                    <p>🕒 {event.event_time}</p>
                  )}

                  {event.location && (
                    <p>📍 {event.location}</p>
                  )}

                </div>

              </div>
            );
          })}

      </section>

    </main>
  );
}

export default Events;
