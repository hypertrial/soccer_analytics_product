import React from "react";
import { useResponsive } from "../hooks/useResponsive";
import "../styles/main.scss";

const VideoSection: React.FC = () => {
  return (
    <div className="dashboard-results-section">
      <div className="video-container">
        <video
          src="./vid1.webm"
          className="soccer-video"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="action-buttons">
        <a
          href="https://github.com/hypertrial/soccer_analytics_product"
          target="_blank"
          rel="noopener noreferrer"
          className="action-button contribute-button"
        >
          Data & Tech Talent: Contribute
        </a>
        <a
          href="mailto:team@hypertrial.ai"
          className="action-button contact-button"
        >
          Clubs & Academies: Contact
        </a>
      </div>
    </div>
  );
};

// Main Dashboard component
const Dashboard: React.FC = () => {
  const { isTinyMobile, isSmallMobile, isMobile, isTablet, isDesktopSmall } =
    useResponsive();

  // Dynamic container class based on screen size
  const getContainerClass = () => {
    if (isTinyMobile) return "home-container home-container-tiny";
    if (isSmallMobile) return "home-container home-container-small";
    if (isMobile) return "home-container home-container-mobile";
    if (isTablet) return "home-container home-container-tablet";
    if (isDesktopSmall) return "home-container home-container-desktop-small";
    return "home-container";
  };

  const containerClass = getContainerClass();

  return (
    <div className={containerClass} data-testid="dashboard-container">
      <div className="resources-title">
        <a
          href="https://hypertrial.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="hypertrial-logo-link"
        >
          <img
            src="./hypertrial_logo.png"
            alt="Hypertrial Logo"
            className="hypertrial-logo"
          />
        </a>
        <h1>Soccer Analytics</h1>
        <p className="subtitle">If we can see it, we can analyze it.</p>
      </div>

      <div className="dashboard-container-wrapper video-wrapper">
        <div className="dashboard-container video-container-custom">
          <div className="dashboard-content">
            <VideoSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
