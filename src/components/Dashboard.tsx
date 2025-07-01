import React from "react";
import { useResponsive } from "../hooks/useResponsive";
import { ComparisonSection, InstructorsSection } from "./Services";
import ServicesFAQ from "./ServicesFAQ";
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
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload"
          onError={(e) => {
            console.warn("Video loading error:", e);
          }}
        />
      </div>
    </div>
  );
};

const UniversityAffiliations: React.FC = () => {
  return (
    <div className="university-affiliations-section">
      <h2>University Affiliations</h2>
      <p>Discover our partnerships with top academic institutions.</p>
      <a
        href="https://www.hypertrial.ai/partners"
        target="_blank"
        rel="noopener noreferrer"
        className="partners-link"
      >
        View Our University Partners
      </a>
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
            loading="lazy"
            decoding="async"
          />
        </a>
        <h1>Soccer Analytics</h1>
        <p className="subtitle">If it's Visible, it's Measurable</p>
      </div>

      <div className="dashboard-container-wrapper video-wrapper">
        <div className="dashboard-container video-container-custom">
          <div className="dashboard-content">
            <VideoSection />
            <div className="services-container">
              <div className="services-content">
                <ComparisonSection />
                <InstructorsSection />
                <ServicesFAQ />
                <UniversityAffiliations />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-section">
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
            loading="lazy"
            decoding="async"
          />
        </a>
      </footer>
    </div>
  );
};

export default Dashboard;
