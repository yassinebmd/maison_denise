import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const RESIDANCE_ARCHIVE = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all'); // 'all' will show all events

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5001/residences");
        if (!response.ok) throw new Error('Failed to fetch events');
        
        const data = await response.json();
        
        const formattedEvents = data.map(event => ({
          id: event._id,
          title: event.title1,
          subtitle: event.title2,
          description: event.description,
          author: event.author,
          date: new Date(event.date1),
          imageUrl: event.image?.base64 
            ? `data:${event.image.contentType};base64,${event.image.base64}`
            : null,
          location: "Central Government Museum",
          year: new Date(event.date1).getFullYear() // Add year property for filtering
        }));

        // Sort events by date (newest first)
        formattedEvents.sort((a, b) => b.date - a.date);
        
        setEvents(formattedEvents);
        setFilteredEvents(formattedEvents); // Initially show all events
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Filter events when selectedYear changes
  useEffect(() => {
    if (selectedYear === 'all') {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(event => event.year.toString() === selectedYear);
      setFilteredEvents(filtered);
    }
  }, [selectedYear, events]);

  const formatDate = (date) => {
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Get unique years from events for the filter options
  const getUniqueYears = () => {
    const years = events.map(event => event.year);
    const uniqueYears = [...new Set(years)].sort((a, b) => b - a); // Sort descending
    return uniqueYears;
  };

  if (loading) return <div className="loading-spinner">Chargement...</div>;
  if (error) return <div className="error-message">Erreur: {error}</div>;

  return (
    <div className="events-container">   <div className="agenda-header-container">
    <div className="agenda-header-backdrop">
      <div className="agenda-header-content">
        <div className="agenda-title-group">
          <h1 className="agenda-main-title">Residence</h1>
          <p className="agenda-subtitle">Découvrez nos prochains événements et activités</p>
        </div>
        
        <div className="agenda-year-filter">
          <label htmlFor="year-select" className="filter-label">Filtrer par année:</label>
          <select 
            id="year-select"
            className="year-select-dropdown"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="all">Toutes les années</option>
            {getUniqueYears().map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  </div>

      <div className="events-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div className="event-card" key={event.id}>
              <div className="event-image-container">
                {event.imageUrl ? (
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="event-image"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                ) : (
                  <div className="event-image-placeholder">
                    <span>Pas d'image</span>
                  </div>
                )}
              </div>

              <div className="event-details">
                <div className="event-date">
                  <span className="event-day">{event.date.getDate()}</span>
                  <span className="event-month">
                    {event.date.toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase()}
                  </span>
                </div>

                <div className="event-info">
                  <h2 className="event-title">{event.title}</h2>
                  <h2 className="event-title">{event.author}</h2>
                  {event.subtitle && <h3 className="event-subtitle">{event.subtitle}</h3>}
                  
                  <div className="event-meta">
                    <span className="event-location">{event.location}</span>
                    <span className="event-time">
                      {event.date.toLocaleTimeString('fr-FR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                      {event.endDate && ` - ${event.endDate.toLocaleTimeString('fr-FR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}`}
                    </span>
                  </div>

                  <p className="event-description">
                    {event.description.length > 150 
                      ? `${event.description.substring(0, 150)}...` 
                      : event.description}
                  </p>

                  
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-events">
            <p>Aucun événement prévu {selectedYear !== 'all' ? `pour ${selectedYear}` : 'pour le moment'}.</p>
          </div>
        )}
      </div>
    </div>
  );
};