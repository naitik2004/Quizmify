import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import './HelpPage.css';

const HelpPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I get started with Quizmify?",
      answer: "Create an account by clicking 'Sign Up'. Once registered, log in to access quizzes right from your dashboard."
    },
    {
      question: "How are the quizzes structured?",
      answer: "Each quiz features multiple-choice questions. You’ll receive instant feedback and a score summary upon completion."
    },
    {
      question: "Can I retake quizzes?",
      answer: "Absolutely! You can retake any quiz anytime. All attempts are stored in your scorecard to help track progress."
    },
    {
      question: "How do I monitor my progress?",
      answer: "Visit the 'Scorecard' section in your profile to view past attempts and performance analytics."
    },
    {
      question: "Are new quizzes added regularly?",
      answer: "Yes, we frequently publish new quizzes on trending topics and technologies. Stay tuned for updates!"
    },
    {
      question: "What if a quiz has an incorrect question or answer?",
      answer: "You can report errors through our feedback form. Please include the quiz title and a brief explanation."
    },
    {
      question: "Can I suggest new quiz topics?",
      answer: "Yes! We value community input. Suggest topics via the contact form or feedback page."
    },
    {
      question: "Can I practice specific weak areas?",
      answer: "Right now, you can retake full quizzes. Personalized practice sets are coming soon!"
    }
  ];

  return (
    <div className="HelpPage">
      <div className="container">
        <header className="HelpHeader">
          <h1>Help & Support</h1>
          <p className="HelpSubtitle">Your guide to navigating Quizmify effortlessly</p>
        </header>

        <section className="HelpContent">
          <div className="HelpIntro">
            <div className="HelpIntroIcon">
              <HelpCircle size={40} />
            </div>
            <div className="HelpIntroText">
              <h2>Welcome to the Quizmify Help Center</h2>
              <p>
                Explore answers to frequently asked questions. If you're still stuck, our team is here to help!
              </p>
            </div>
          </div>

          <div className="FaqSection">
            <h2>Frequently Asked Questions</h2>
            <div className="FaqList">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`FaqItem ${expandedIndex === index ? 'expanded' : ''}`}
                >
                  <div
                    className="FaqQuestion"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3>{faq.question}</h3>
                    <button className="FaqTouchUpDown" aria-label="Toggle FAQ">
                      {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                  {expandedIndex === index && (
                    <div className="FaqAnswer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="ContactSection">
            <h2>Need Further Assistance?</h2>
            <p>If you didn’t find what you were looking for, don’t hesitate to reach out.</p>
            <div className="ContactOptions">
              <div className="ContactCard">
                <h3>Email Our Support Team</h3>
                <p>Email us at <a href="mailto:support@quizmify.com">support@quizmify.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpPage;