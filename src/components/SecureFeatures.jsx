// SecureFeatures.jsx
import React, { useEffect } from "react";
import "../styles/SecureFeatures.css";
import VanillaTilt from "vanilla-tilt";

const SecureFeatures = () => {
  useEffect(() => {
    // Initialize VanillaTilt
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });

    // Scroll reveal observer
    const boxes = document.querySelectorAll(".feature-box");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.3 }
    );

    boxes.forEach((box) => observer.observe(box));

    return () => {
      boxes.forEach((box) => observer.unobserve(box));
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="floating-text">Security First</div>
      <div className="features">
        <div className="feature-box feature-1" data-tilt>
          <h2>Built with <br />OpenZeppelin</h2>
          <p>Secure, audited smart contracts using industry standards.</p>
        </div>
        <div className="feature-box feature-2" data-tilt>
          <h2>ReentrancyGuard Enabled</h2>
          <p>Protects against reentrancy attacks and exploit attempts.</p>
        </div>
        <div className="feature-box feature-3" data-tilt>
          <h2>3rd Party Audit Scheduled</h2>
          <p>Security audit with Certik/Hacken coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default SecureFeatures;
