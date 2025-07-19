import React, { useEffect, useRef, useState } from "react";
import "../styles/HeroImage.css";
import heroImage from "../assets/hero-image.jpg";
import appImage from "../assets/app.jpg";

function HeroImage() {
  const [containerStyle, setContainerStyle] = useState({
    width: "100vw",
    height: "100vh",
    progress: 0,
  });

  const [showHeading, setShowHeading] = useState(false);
  const [freezeScroll, setFreezeScroll] = useState(false);
  const [freezeTop, setFreezeTop] = useState(null);
  const picRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1201);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1201);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

if (screenWidth <= 768) {
  const heroImage = document.querySelector(".hero-image");
  const container = document.querySelector(".green-component");

  if (heroImage) {
    heroImage.style.position = "fixed";
    heroImage.style.top = "0";
    heroImage.style.left = "0";
    heroImage.style.width = "100vw";
    heroImage.style.height = "140vh"; 
    heroImage.style.objectFit = "cover";
    heroImage.style.zIndex = "-1"; 
  }

  if (container) {
    container.style.position = "relative";
    container.style.zIndex = "2";
  }
}

      let maxScroll;
      let extraOffset;

      if (screenWidth < 768) {
        maxScroll = screenHeight * 0.3;
        extraOffset = 100;
      } else if (screenWidth < 1200) {
        maxScroll = screenHeight * 0.3;
        extraOffset = 200;
      } else {
        maxScroll = screenHeight * 0.4;
        extraOffset = 300;
      }

      const freezeThreshold = maxScroll + extraOffset;
      const progress = Math.min(scrollY / maxScroll, 1);

      if (progress === 1 && scrollY > freezeThreshold) {
        if (!freezeScroll && picRef.current) {
          const rect = picRef.current.getBoundingClientRect();
          setFreezeTop(rect.top + window.scrollY);
          setFreezeScroll(true);
        }
        setShowHeading(true);
        return;
      }

      if (scrollY <= freezeThreshold) {
        setFreezeScroll(false);
        setFreezeTop(null);
        setShowHeading(progress === 1);
      }

      const width = 100 - progress * 77;
      const height = 100 - progress * 30;

      setContainerStyle({
        width: `${width}vw`,
        height: `${height}vh`,
        progress,
      });

      const headingScale = Math.max(0.1, 1 - scrollY / 1400);
      document.documentElement.style.setProperty("--heading-scale", headingScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [freezeScroll, isMobile]);

  const heroOpacity = 1 - containerStyle.progress * 2;
  const appOpacity = containerStyle.progress * 2 - 1;

  const safeHeroOpacity = Math.max(0, Math.min(1, heroOpacity));
  const safeAppOpacity = Math.max(0, Math.min(1, appOpacity));

  return (
    <div className="section2">
      <div
        ref={picRef}
        className="pic-container"
        style={{
          width: freezeScroll ? "23vw" : containerStyle.width,
          height: freezeScroll ? "88vh" : containerStyle.height,
          position: freezeScroll ? "absolute" : "fixed",
          top: freezeScroll ? `${freezeTop}px` : "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="picture">
          <img
            src={heroImage}
            alt="hero"
            className="image"
            style={{ opacity: safeHeroOpacity }}
          />
          <img
            src={appImage}
            alt="app"
            className="image"
            style={{ opacity: safeAppOpacity }}
          />
        </div>
      </div>

      <p
        className="hero-heading2 gradient-text"
        style={{
          opacity: showHeading ? 1 : 0,
          position: freezeScroll ? "absolute" : "fixed",
          top: freezeScroll ? `${freezeTop + 40}px` : "50%",
        }}
      >
        CUP is a deflationary DeFi token with staking, NFT rewards, and a 2M supply — 0.7% burned per transaction.
      </p>
    </div>
  );
}

export default HeroImage;
