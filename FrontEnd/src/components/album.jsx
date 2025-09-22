import React, { useEffect } from 'react';

export const PhotoAlbum = () => {
  

  return (
    <div className="container">
      <header className="bio-header">
        <h1>Album Photo</h1>
        <br />
      </header>
      <br />
      <div className="home3-text">
        {/* Gallery */}
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img src="img/dm1.jpg" className="w-100 shadow-1-strong rounded mb-4" />
            <img src="img/dm2.jpg" className="w-100 shadow-1-strong rounded mb-4" />
            <img src="img/dm3.jpg" className="w-100 shadow-1-strong rounded mb-4" />
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img src="img/dm4.jpg" className="w-100 shadow-1-strong rounded mb-4" />
            <img src="img/dm5.jpg" className="w-100 shadow-1-strong rounded mb-4" />
            <img src="img/dm6.jpg" className="w-100 shadow-1-strong rounded mb-4" />
          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img src="img/dm8.jpg" className="w-100 shadow-1-strong rounded mb-4" />
            <img src="img/dm7.jpg" className="w-100 shadow-1-strong rounded mb-4" />
            <img src="img/dm9.jpg" className="w-100 shadow-1-strong rounded mb-4" />
          </div>
        </div>
        {/* Gallery */}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

