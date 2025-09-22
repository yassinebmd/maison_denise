import React, { useEffect } from 'react';

export const Photos = () => {
  useEffect(() => {
    console.log('Page loaded');
  }, []);

  const images = [
    '/media/hum2.jpeg', 
    '/media/gal1.jpg', 
    '/media/gal2.jpg', 
    '/media/CigogneVolubile2.jpg', 
    '/media/gal10.jpg', 
    '/media/gal17.jpg', 
    '/media/20221215_203750 (2).jpg', 
    '/media/hum3.jpeg', 
    '/media/hum2.jpeg', 
    '/media/gal3.jpg', 
    '/media/CigogneVolubile1.jpg', 
    '/media/gal11.jpg',
    '/media/gal12.jpg',
    '/media/gal13.jpg', 
    '/media/gal14.jpg', 
    '/media/gal15.jpg', 
    '/media/gal16.jpg',
    '/media/gal7.jpg',
    '/media/gal1.jpg',
    '/media/gal161.jpg',
  ];

  return (
    <div className="podcast-page">
      <header className="header">
        <div className="header-content">
          <div className="title-container">
            <h1 className="title animate-fade-in">
              <span className="title-text">Gallery</span>
            </h1>
            <p className="subtitle animate-fade-in-delay">
              Découvrez nos conversations inspirantes
            </p>
          </div>
          <div className="concept-visuals">
            <div className="visual-element camera animate-float">
              <svg viewBox="0 0 24 24" width="40" height="40">
                <path
                  fill="currentColor"
                  d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"
                />
              </svg>
            </div>
            <div className="visual-element picture animate-float-delay">
              <svg viewBox="0 0 24 24" width="40" height="40">
                <path
                  fill="currentColor"
                  d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="header-decoration">
          <div className="decoration-line animate-expand"></div>
        </div>
      </header>

      <div id="grid-container" className="row">
        {images.map((filename, index) => (
          <a
            key={index}
            className="single-gallery"
            href={`media/${filename}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="grid-item" src={`media/${filename}`} alt={`Gallery ${index + 1}`} />
          </a>
        ))}
      </div>
    </div>
  );
};
