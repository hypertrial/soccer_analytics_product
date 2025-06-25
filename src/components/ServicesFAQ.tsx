import React, { useState } from "react";
import "../styles/_services-faq.scss";

// Types
interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

// FAQ Data
const FAQ_DATA: FAQItem[] = [
  {
    id: "per-minute-of-soccer-video-analysis",
    question: "What does 'Per Minute of Soccer Video Analysis' mean?",
    answer: (
      <>
        <p>
          <strong>Per minute of soccer video analysis</strong> is the default
          measure of how we charge for our services. For example, an analysis of
          a 90-minute soccer match under the Bronze Plan would cost exactly $90
          USD. We only charge for game or training footage; we do not charge for
          breaks such as half-time or pre-game warm-ups. This fee structure
          favours our clients, as it does not take into account the amount of
          time we spend on the analysis.
        </p>
      </>
    ),
  },
  {
    id: "custom-statistics",
    question: "What kind of custom statistics can you provide?",
    answer: (
      <>
        <p>
          <strong>If it's visible, it's measurable</strong>. We can provide any
          custom statistics that can be generated directly from the video
          footage. Please schedule an initial consultation to discuss your
          specific needs.
        </p>
      </>
    ),
  },
  {
    id: "payment-options",
    question: "How can I pay for these services?",
    answer: (
      <>
        <p>
          We currently accept payment via cash, PayPal (International), Wise
          (International), Interac e-Transfer (Canada), and USDC stablecoins
          (International). We do not currently accept credit cards.
        </p>
      </>
    ),
  },
];

// Component
const ServicesFAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <>
      <div className="section-title">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="faq-container">
        {FAQ_DATA.map((item) => (
          <div key={item.id} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleItem(item.id)}
              aria-expanded={openItems.has(item.id)}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span className="faq-question-text">{item.question}</span>
              <span
                className={`faq-icon ${
                  openItems.has(item.id) ? "faq-icon-open" : ""
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <div
              id={`faq-answer-${item.id}`}
              className={`faq-answer ${
                openItems.has(item.id) ? "faq-answer-open" : ""
              }`}
            >
              <div className="faq-answer-content">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesFAQ;
