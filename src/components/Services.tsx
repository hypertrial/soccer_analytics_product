import React from 'react';
import { useResponsive } from '../hooks/useResponsive';
import ServicesFAQ from './ServicesFAQ';
import '../styles/main.scss';

// Types
interface PathwayItem {
  title: string;
  description: string;
  linkText: string;
  linkPath: string;
}

interface Instructor {
  name: string;
  title: string;
  image: string;
  alt: string;
  linkedinUrl: string;
  soccer: string[];
  ai: string[];
}

// Constants
const TALENT_PATHWAYS: PathwayItem[] = [
  {
    title: 'Explore Resources',
    description: 'Free Paths',
    linkText: '',
    linkPath: '#choose-your-path',
  },
  {
    title: 'Apply for Services',
    description: '1-on-1 Mentorship',
    linkText: '',
    linkPath: '#services-application',
  },
];

const PATHWAY_OPTIONS: PathwayItem[] = [
  {
    title: 'Capstone Projects',
    description:
      'Enrolled in a undergraduate or graduate program with a practicum or capstone? Check the Partners page to see if Trilemma Foundation serves as an industry partner and work with us on real-world data science projects.',
    linkText: 'View',
    linkPath: '/partners',
  },
  {
    title: 'Open Source Projects',
    description:
      "Contribute to Hypertrial's open source projects and build your portfolio with real data science and engineering work.",
    linkText: 'View',
    linkPath: 'https://github.com/hypertrial',
  },
  {
    title: 'Analytics Tournaments',
    description:
      'Learn by doing in our free and frequent analytics tournaments, open to anyone with an internet connection.',
    linkText: 'View',
    linkPath: '/',
  },
  {
    title: 'Hypertrial Services',
    description:
      'Hypertrial Services is an 8-week 1-on-1 mentorship program for those serious about landing high-impact, well-paid data roles.',
    linkText: 'Apply',
    linkPath: '#services-application',
  },
];

const COMPARISON_DATA = {
  features: [
    'Standard Statistics',
    'Custom Statistics',
    'One-Time Consultation',
    'Continous Consultation',
    'Opponent Analysis',
    'Total Cost',
  ],
  programs: [
    {
      name: 'Bronze',
      features: [
        true,
        false,
        false,
        false,
        false,
        { price: '$1 USD', suffix: ' per Minute of Soccer Video Analysis' },
      ],
      buttonText: null,
      buttonLink: null,
    },
    {
      name: 'Silver',
      features: [
        true,
        true,
        true,
        false,
        false,
        { price: '$2 USD', suffix: ' per Minute of Soccer Video Analysis' },
      ],
      buttonText: 'Get Started',
      buttonLink: 'https://github.com/hypertrial',
    },
    {
      name: 'Gold',
      features: [
        true,
        true,
        true,
        true,
        false,
        { price: '$3 USD', suffix: ' per Minute of Soccer Video Analysis' },
      ],
      buttonText: 'Get Started',
      buttonLink: '/',
    },
    {
      name: 'Platinum',
      features: [true, true, true, true, true, 'Contact for Pricing'],
      buttonText: 'Apply',
      buttonLink: '#services-application',
    },
  ],
};

const INSTRUCTORS: Instructor[] = [
  {
    name: 'Mohammad Ashkani',
    title: 'Co-Founder & CEO',
    image: './mo.png',
    alt: 'Mohammad Ashkani',
    linkedinUrl: 'https://www.linkedin.com/in/mohammadashkani/',
    soccer: [
      'Played across BC youth leagues; three-time BC Provincials Champion',
      'Trained with Langara and UBC varsity teams',
      "Competed in VMSL Division 1 and Premier Men's Leagues",
    ],
    ai: [
      'Economics and Mathematics BA @ University of British Columbia (UBC)',
      '7+ years of experience in Machine Learning',
      'Deployed products that generated $13M+ annual savings for institutional clients',
    ],
  },
  {
    name: 'Matt Faltyn',
    title: 'Co-Founder & CTO',
    image: './matt.png',
    alt: 'Matt Faltyn',
    linkedinUrl: 'https://www.linkedin.com/in/mattfaltyn/',
    soccer: [
      'Played competitively across Ontario youth leagues',
      'Two-time Ontario Youth Soccer League Champion',
      'Two-time Ontario Cup Finalist',
    ],
    ai: [
      'PhD research in Machine Learning; Applied Math MSc from UBC',
      '18+ publications with 3,000+ citations; $350k+ in research funding',
      'Awarded 2024 Vanier, CIHR, and UBC 4YF; top 1% of Canadian PhD students (2023–2024)',
    ],
  },
];

// Component
function Services() {
  const { isSmallMobile, isTinyMobile } = useResponsive();

  const containerClass = isTinyMobile
    ? 'home-container home-container-tiny'
    : isSmallMobile
    ? 'home-container home-container-small'
    : 'home-container';

  return (
    <div className={`${containerClass} services-container`} data-testid="services-container">
      <ServicesHeader />
      <div className="services-content">
        <TalentPathwaysSection />
        <ChooseYourPathSection />
        <ComparisonSection />
        <InstructorsSection />
        <ServicesFAQ />
      </div>
    </div>
  );
}

// Sub-components
const ServicesHeader: React.FC = () => (
  <div className="home-title">
    <h1>Hypertrial Services</h1>
    <p>Accelerate Your Data Career</p>
  </div>
);

export const TalentPathwaysSection: React.FC = () => (
  <>
    <div className="section-title">
      <h2>Skip the Certificate — Find Your Shortest Path to Success</h2>
    </div>
    <div className="talent-pathways">
      {TALENT_PATHWAYS.map((pathway, index) => (
        <PathwayCard key={index} pathway={pathway} />
      ))}
    </div>
  </>
);

export const ChooseYourPathSection: React.FC = () => (
  <div id="choose-your-path" style={{ scrollMarginTop: '100px' }}>
    <div className="section-title">
      <h2>Choose Your Path</h2>
    </div>
    <div className="pathway-options-grid">
      {PATHWAY_OPTIONS.map((option, index) => (
        <PathwayOptionCard key={index} option={option} />
      ))}
    </div>
  </div>
);

const PathwayCard: React.FC<{ pathway: PathwayItem }> = ({ pathway }) => {
  const handleClick = () => {
    if (pathway.linkPath.startsWith('#')) {
      // Internal anchor link - stay on same page
      window.location.href = pathway.linkPath;
    } else {
      // External link - open in new tab
      window.open(pathway.linkPath, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button className="pathway-button" onClick={handleClick}>
      <h3>{pathway.title}</h3>
      <p>{pathway.description}</p>
    </button>
  );
};

const PathwayOptionCard: React.FC<{ option: PathwayItem }> = ({ option }) => {
  const handleClick = () => {
    if (option.linkPath.startsWith('#')) {
      // Internal anchor link - stay on same page
      window.location.href = option.linkPath;
    } else {
      // External link - open in new tab
      window.open(option.linkPath, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="pathway-option-card">
      <div className="pathway-badge">
        {option.title === 'Hypertrial Services' ? '$800 (8 weeks)' : 'Always Free'}
      </div>
      <div className="pathway-option-content">
        <h3>{option.title}</h3>
        <p>{option.description}</p>
        <button className="pathway-option-button" onClick={handleClick}>
          {option.linkText}
        </button>
      </div>
    </div>
  );
};

export const ComparisonSection: React.FC = () => (
  <>
    <div className="section-title">
      <h2>Our Services</h2>
    </div>
    <div className="comparison-container">
      <div className="comparison-table">
        <div className="comparison-header">
          <div className="feature-column-header">Feature</div>
          {COMPARISON_DATA.programs.map((program, index) => (
            <div key={index} className="program-column-header">
              {program.name}
            </div>
          ))}
        </div>

        {COMPARISON_DATA.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="comparison-row">
            <div className="feature-cell">{feature}</div>
            {COMPARISON_DATA.programs.map((program, programIndex) => (
              <div key={programIndex} className="program-cell">
                {feature === 'Total Cost' ? (
                  <div className="comparison-text">
                    {typeof program.features[featureIndex] === 'object' &&
                    program.features[featureIndex] !== null &&
                    'price' in program.features[featureIndex] ? (
                      <>
                        <span className="price-bold">
                          {
                            (
                              program.features[featureIndex] as {
                                price: string;
                                suffix: string;
                              }
                            ).price
                          }
                        </span>
                        {
                          (
                            program.features[featureIndex] as {
                              price: string;
                              suffix: string;
                            }
                          ).suffix
                        }
                      </>
                    ) : (
                      program.features[featureIndex]
                    )}
                  </div>
                ) : (
                  <div
                    className={`comparison-icon ${
                      program.features[featureIndex] ? 'check' : 'cross'
                    }`}
                  >
                    {program.features[featureIndex] ? '✓' : '✕'}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="action-buttons">
        <a
          href="https://github.com/hypertrial/soccer_analytics_product"
          target="_blank"
          rel="noopener noreferrer"
          className="action-button contribute-button"
        >
          Data & ML Talent: Contribute
        </a>
        <a href="mailto:team@hypertrial.ai" className="action-button contact-button">
          Soccer Professionals: Contact
        </a>
      </div>
    </div>
  </>
);

export const InstructorsSection: React.FC = () => (
  <>
    <div className="section-title">
      <h2>We Know AI and Soccer</h2>
    </div>
    <div className="instructors-section">
      {INSTRUCTORS.map((instructor, index) => (
        <InstructorCard key={index} instructor={instructor} />
      ))}
    </div>
  </>
);

const InstructorCard: React.FC<{ instructor: Instructor }> = ({ instructor }) => (
  <div className="instructor-card">
    <div className="instructor-image">
      <img src={instructor.image} alt={instructor.alt} />
    </div>
    <div className="instructor-info">
      <h3>{instructor.name}</h3>
      <p>{instructor.title}</p>
      <a
        href={instructor.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        LinkedIn
      </a>

      <div className="instructor-expertise">
        <div className="expertise-section">
          <h4>AI</h4>
          <ul>
            {instructor.ai.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="expertise-section">
          <h4>Soccer</h4>
          <ul>
            {instructor.soccer.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
