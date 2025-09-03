import React, { useState, useEffect, useRef } from "react";

const TeamSyncComponent = () => {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselItems = [
    {
      image:
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      text: "Collaborate seamlessly with your team from anywhere in the world.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      text: "Boost productivity with our intuitive tools and workflows.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      text: "Keep everything in sync across all your devices in real-time.",
    },
  ];

  // Video state
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoIframeRef = useRef(null);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselItems.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const handleVideoClick = () => {
    if (isVideoPlaying) {
      // Pause video by navigating to about:blank
      if (videoIframeRef.current) {
        videoIframeRef.current.src = "about:blank";
      }
      setIsVideoPlaying(false);
    } else {
      // Play video by setting the YouTube URL
      if (videoIframeRef.current) {
        videoIframeRef.current.src =
          "https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1";
      }
      setIsVideoPlaying(true);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Team Sync</h1>

      <div style={styles.grid}>
        {/* First Box with Carousel */}
        <div style={styles.box}>
          <div style={styles.boxHeader}>
            <div style={styles.boxIcon}>
              <i className="fas fa-images"></i>
            </div>
            <h2 style={styles.boxTitle}>Better</h2>
          </div>
          <div style={styles.carouselWrapper}>
            <div style={styles.carouselContainer}>
              <div
                style={{
                  ...styles.carousel,
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {carouselItems.map((item, index) => (
                  <div key={index} style={styles.carouselItem}>
                    <div style={styles.imageContainer}>
                      <img
                        src={item.image}
                        alt={`Slide ${index + 1}`}
                        style={styles.carouselImg}
                      />
                    </div>
                    <p style={styles.carouselText}>{item.text}</p>
                  </div>
                ))}
              </div>
              <button
                style={{ ...styles.carouselBtn, left: "10px" }}
                onClick={prevSlide}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                style={{ ...styles.carouselBtn, right: "10px" }}
                onClick={nextSlide}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Other Boxes */}
        {[
          {
            icon: "fas fa-arrows-alt-h",
            title: "Now Closer",
            content:
              "Distance is no longer a barrier. Our platform brings team members closer than ever before with real-time collaboration tools.",
          },
          {
            icon: "fas fa-users",
            title: "Team",
            content:
              "Build stronger teams with tools designed for communication, project management, and seamless collaboration.",
          },
          {
            icon: "fas fa-sync-alt",
            title: "Sync",
            content:
              "Keep everyone on the same page with automatic syncing across all devices. Changes are reflected in real-time.",
          },
          {
            icon: "fas fa-hands-helping",
            title: "Adaptation",
            content:
              "Our platform adapts to your workflow, not the other way around. Customize it to fit your team's unique needs.",
          },
        ].map((box, index) => (
          <div key={index} style={styles.box}>
            <div style={styles.boxHeader}>
              <div style={styles.boxIcon}>
                <i className={box.icon}></i>
              </div>
              <h2 style={styles.boxTitle}>{box.title}</h2>
            </div>
            <div style={styles.boxContent}>
              <p>{box.content}</p>
            </div>
          </div>
        ))}

        {/* Last Box with YouTube Video */}
        <div style={styles.box}>
          <div style={styles.boxHeader}>
            <div style={styles.boxIcon}>
              <i className="fas fa-video"></i>
            </div>
            <h2 style={styles.boxTitle}>Bring People Together</h2>
          </div>
          <div style={styles.boxContent}>
            <div style={styles.videoContainer} onClick={handleVideoClick}>
              {!isVideoPlaying ? (
                <div style={styles.videoPlaceholder}>
                  <div style={styles.videoIcon}>
                    <i className="fab fa-youtube"></i>
                  </div>
                  <div style={styles.videoText}>Click to play video</div>
                </div>
              ) : null}

              <iframe
                ref={videoIframeRef}
                style={{
                  ...styles.videoPlayer,
                  display: isVideoPlaying ? "block" : "none",
                }}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p style={{ marginTop: "15px" }}>
              Watch how Team Sync helps bring people together no matter where
              they are located.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2.8rem",
    fontWeight: "700",
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  box: {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    padding: "25px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    overflow: "hidden",
  },
  boxHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  boxIcon: {
    fontSize: "24px",
    marginRight: "15px",
    color: "#4ecdc4",
  },
  boxTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
  },
  boxContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  carouselWrapper: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  carouselContainer: {
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    flexGrow: 1,
    minHeight: "350px",
    width: "100%",
  },

  carousel: {
    display: "flex",
    transition: "transform 0.5s ease",
    height: "100%",
    width: "100%",
  },

  carouselItem: {
    flex: "0 0 100%", // each slide takes full width
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px",
    textAlign: "center",
    boxSizing: "border-box",
  },

  imageContainer: {
    width: "100%",
    height: "250px",
    overflow: "hidden",
    borderRadius: "8px",
    marginBottom: "15px",
  },

  carouselImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  carouselBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.6)",
    color: "white",
    border: "none",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "background 0.3s ease",
    zIndex: 9999, // ensure on top of everything
    pointerEvents: "auto", // clickable even if inside overlay
  },

  videoContainer: {
    position: "relative",
    width: "100%",
    paddingTop: "56.25%", // 16:9 Aspect Ratio
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer",
  },
  videoPlaceholder: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  videoIcon: {
    fontSize: "60px",
    marginBottom: "15px",
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  },
  videoText: {
    fontSize: "1.3rem",
    fontWeight: "600",
    textAlign: "center",
    maxWidth: "80%",
  },
  videoPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
};

export default TeamSyncComponent;
