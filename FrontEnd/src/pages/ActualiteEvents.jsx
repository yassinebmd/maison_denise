import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const FutureEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5001/events");
        const data = await response.json();

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const futureEvents = data
          .filter(event => new Date(event.date1) >= today)
          .map(event => ({
            id: event._id,
            title: event.title1,
            description: event.description,
            date: new Date(event.date1),
            imageUrl: event.image2?.base64
              ? `data:${event.image2.contentType};base64,${event.image2.base64}`
              : null,
            formattedDate:new Date(event.date1).toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric'
            })
          }))
          .sort((a, b) => a.date - b.date);

        setEvents(futureEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div className="loading">Loading events...</div>;

  return (
    <div className="future-events">
      <div className="agenda-header-container">
        <div className="agenda-header-backdrop">
          <div className="agenda-header-content">
            <div className="agenda-title-group">
              <h2 className="agenda-main-title">Upcoming Events</h2>
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