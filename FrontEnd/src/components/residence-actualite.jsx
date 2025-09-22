import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const FuturResidence = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5001/residences");
        const data = await response.json();

        const formatted = data.map(event => ({
          id: event._id,
          title: event.title1,
          title2: event.title2,
          description: event.description,
          date: event.date1,
          imageUrl: `data:${event.image.contentType};base64,${event.image.base64}`,
          formattedDate:new Date(event.date1).toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric'
            })
        }));

        // Filter only future events
        const today = new Date();
        const futureEvents = formatted.filter(event => new Date(event.date) >= today);
        

        setEvents(futureEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="future-events">
    <div className="agenda-header-container">
      <div className="agenda-header-backdrop">
        <div className="agenda-header-content">
          <div className="agenda-title-group">
            <h2 className="agenda-main-title">Actualite 2025</h2>
            <p className="agenda-subtitle">Discover what's coming next</p>
          </div>


        </div>
      </div>
      <div className="agenda-events-grid">
        {events.length > 0 ? (
          events.map(event => (
            <div className="agenda-event-card" key={event.id}>
              <div className="agenda-event-image-container">
                {event.imageUrl ? (
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="agenda-event-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder-event.jpg';
                    }}
                  />
                ) : (
                  <div className="agenda-image-placeholder"></div>
                )}
              </div>
              <div className="agenda-event-date">{event.formattedDate}</div>
              <h3 className="agenda-event-title">{event.title}</h3>
              <p className="agenda-event-description">
                {event.description.length > 100
                  ? `${event.description.substring(0, 100)}...`
                  : event.description}
              </p>

            </div>
          ))
        ) : (
          <div className="agenda-no-events">
            <p>No upcoming events scheduled</p>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};
