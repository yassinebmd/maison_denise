import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const gridRef = useRef(null);

    useEffect(() => {
        const resizeAllItems = () => {
            const grid = gridRef.current;
            if (!grid) return;

            const items = grid.querySelectorAll('.masonry-item');
            const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
            const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

            items.forEach(item => {
                const img = item.querySelector('img');
                if (!img) return;

                img.onload = () => {
                    const rowSpan = Math.ceil((item.querySelector('img').height + rowGap) / (rowHeight + rowGap));
                    item.style.gridRowEnd = `span ${rowSpan}`;
                };

                // Trigger if image already loaded
                if (img.complete) img.onload();
            });
        };

        resizeAllItems();
        window.addEventListener('resize', resizeAllItems);
        return () => window.removeEventListener('resize', resizeAllItems);
    }, [images]);



    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("http://localhost:5001/events");
                const data = await response.json();

                // Convert backend image to usable src format
                const formatted = data.map((event) => ({
                    url: `data:${event.image.contentType};base64,${event.image.base64}`,
                    title: event.title1,
                    description: event.description,
                    id: event._id,
                }));

                setImages(formatted);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [images]);

    const isMobile = window.innerWidth <= 768; // Common mobile breakpoint (adjust as needed)

const bannerStyle = images.length
    ? {
        backgroundImage: `url(${images[currentIndex].url})`,
        backgroundSize: '90%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        transition: 'background-image 3s ease-in-out',
        // Apply fixed height only on mobile
        ...(isMobile && { height: '250px' }), // Adjust height as needed
    }
    : {};
    return (
        <>
            <section
                className="banner-area relative"
                id="home"
                style={bannerStyle}
                onClick={() => navigate('/agenda-archive')}

            >
                <div className="container h-100 d-flex align-items-center justify-content-center">
                    <div className="row w-100">
                        <div className="banner-content col-lg-8 mx-auto text-center">
                            <div className="d-flex justify-content-center">
                                {images.length > 0 && (
                                    <div class="svg-wrapper">
                                        <svg height="60" width="190" xmlns="http://www.w3.org/2000/svg">
                                            <rect class="shape" height="60" width="190"></rect>
                                        </svg>
                                        <div class="text">Événements</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="gallery-area section-gap" id="gallery">

            </section>


        </>
    );
};
