import React, { useState, useRef, useEffect } from 'react';

export const PodcastPage = () => {
  const [activeEpisode, setActiveEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const episodes = [
    
    {
      id: 2,
      title: "Épisode 2: La gastronomie marocaine",
      description: "Découvrez les secrets de la cuisine marocaine avec nos invités spéciaux.",
      date: "22 Mars 2023",
      duration: "45:12",
      audioSrc: "https://example.com/podcast2.mp3",
      image: "img/Reza_Deghati.jpg"
    }
  ];

  const handlePlay = (episode) => {
    if (activeEpisode && activeEpisode.id === episode.id) {
      // Toggle play/pause for current episode
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      // Play new episode
      setActiveEpisode(episode);
      setIsPlaying(true);
      // The useEffect will handle the actual play when activeEpisode changes
    }
  };

  useEffect(() => {
    if (activeEpisode && audioRef.current) {
      audioRef.current.src = activeEpisode.audioSrc;
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
  }, [activeEpisode]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
      
      // Update progress bar
      if (progressBarRef.current) {
        const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        progressBarRef.current.style.width = `${progress}%`;
      }
    }
  };

  const handleProgressBarClick = (e) => {
    if (audioRef.current && progressBarRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
      const progressBarWidth = progressBar.clientWidth;
      const percentage = (clickPosition / progressBarWidth) * 100;
      const newTime = (percentage / 100) * audioRef.current.duration;
      
      audioRef.current.currentTime = newTime;
      progressBarRef.current.style.width = `${percentage}%`;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="podcast-page">
      <header className="header">
  <div className="header-content">
    <div className="title-container">
      <h1 className="title animate-fade-in">
        <span className="title-text">Podcasts</span>
        <span className="sound-waves">
          <span className="wave"></span>
          <span className="wave"></span>
          <span className="wave"></span>
        </span>
      </h1>
      <p className="subtitle animate-fade-in-delay">Découvrez nos conversations inspirantes</p>
    </div>
    <div className="concept-visuals">
      <div className="visual-element microphone animate-float">
        <svg viewBox="0 0 24 24" width="40" height="40">
          <path fill="currentColor" d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
        </svg>
      </div>
      <div className="visual-element headphones animate-float-delay">
        <svg viewBox="0 0 24 24" width="40" height="40">
          <path fill="currentColor" d="M12,1A9,9 0 0,1 21,10V17A3,3 0 0,1 18,20H15V12H19V10A7,7 0 0,0 12,3A7,7 0 0,0 5,10V12H9V20H6A3,3 0 0,1 3,17V10A9,9 0 0,1 12,1Z" />
        </svg>
      </div>
    </div>
  </div>
  <div className="header-decoration">
    <div className="decoration-line animate-expand"></div>
  </div>
</header>

      <div className="podcast-container">
        <div className="episode-list">
          {episodes.map((episode) => (
            <div 
              key={episode.id} 
              className={`episode-card ${activeEpisode?.id === episode.id ? 'active' : ''} animate-slide-up`}
              style={{ animationDelay: `${episode.id * 0.1}s` }}
            >
              <div className="episode-image-container">
                <img src={episode.image} alt={episode.title} className="episode-image" />
                <button 
                  className={`play-button ${activeEpisode?.id === episode.id && isPlaying ? 'playing' : ''}`}
                  onClick={() => handlePlay(episode)}
                >
                  {activeEpisode?.id === episode.id && isPlaying ? (
                    <span className="pause-icon">❚❚</span>
                  ) : (
                    <span className="play-icon">▶</span>
                  )}
                </button>
              </div>
              <div className="episode-info">
                <h3>{episode.title}</h3>
                <p className="episode-date">{episode.date} • {episode.duration}</p>
                <p className="episode-description">{episode.description}</p>
              </div>
            </div>
          ))}
        </div>

        {activeEpisode && (
          <div className="player-container animate-fade-in">
            <div className="now-playing">
              <h3>En cours d'écoute</h3>
              <h2>{activeEpisode.title}</h2>
              
              <div className="progress-container" onClick={handleProgressBarClick}>
                <div className="progress-bar" ref={progressBarRef}></div>
              </div>
              
              <div className="time-display">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              
              <div className="player-controls">
                <button className="control-button" onClick={() => {
                  audioRef.current.currentTime -= 15;
                }}>
                  ↻ 15s
                </button>
                <button 
                  className="control-button play-pause" 
                  onClick={() => handlePlay(activeEpisode)}
                >
                  {isPlaying ? '❚❚' : '▶'}
                </button>
                <button className="control-button" onClick={() => {
                  audioRef.current.currentTime += 30;
                }}>
                  30s →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <audio 
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={handleTimeUpdate}
      />
    </div>
  );
};

export default PodcastPage;