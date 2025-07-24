import React from 'react';
import { BrainCircuit, BookOpen, Award, Users } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <div className="Container">
        <div className="AboutHeader">
          <h1>Welcome to Quizmify</h1>
          <p className="AboutSubtitle">Where Curiosity Meets Precision</p>
        </div>

        <div className="AboutContent">
          <section className="AboutSection FadeIn">
            <h2>Why We Exist</h2>
            <p>
              Quizmify isn’t just a quiz tool — it's your AI-driven study companion. Designed for developers, learners, and tech enthusiasts, it intelligently crafts quizzes that challenge your brain and deepen your understanding. Whether you're revising for interviews, brushing up on concepts, or diving into new tech topics, Quizmify turns your learning into an engaging, dynamic experience.
            </p>
          </section>

          <section className="AboutFeatures SlideInUp">
            <div className="FeatureCard">
              <div className="FeatureIcon"><BookOpen size={24} /></div>
              <h3>AI-Generated Every Time</h3>
              <p>
                Each quiz is generated on-demand by AI — giving you brand-new challenges every session with zero repetition.
              </p>
            </div>

            <div className="FeatureCard">
              <div className="FeatureIcon"><BrainCircuit size={24} /></div>
              <h3>Wide Topic Coverage</h3>
              <p>
                From foundational programming to advanced subjects — explore questions on Python, JavaScript, React, Git, and much more, all crafted to test real understanding.
              </p>
            </div>

            <div className="FeatureCard">
              <div className="FeatureIcon"><Award size={24} /></div>
              <h3>Instant Performance Feedback</h3>
              <p>
                After each quiz, view your score, get immediate insights, and analyze your results — stay sharp and on track.
              </p>
            </div>

            <div className="FeatureCard">
              <div className="FeatureIcon"><Users size={24} /></div>
              <h3>Sleek, Distraction-Free UI</h3>
              <p>
                Quizmify balances style with clarity — giving you a smooth and intuitive experience across all screens and devices.
              </p>
            </div>
          </section>

          <section className="AboutSection FadeIn">
            <h2>How to Begin</h2>
            <p>Getting started with Quizmify is simple and quick:</p>
            <ol className="StepsList">
              <li>
                <div className="StepNumber">1</div>
                <div className="StepContent">
                  <h4>Set Up Your Account</h4>
                  <p>Sign up using Google or email to tailor your learning experience and save your progress securely.</p>
                </div>
              </li>
              <li>
                <div className="StepNumber">2</div>
                <div className="StepContent">
                  <h4>Pick Your Topic</h4>
                  <p>Browse a curated list of tech subjects — each quiz is uniquely structured to both challenge and teach.</p>
                </div>
              </li>
              <li>
                <div className="StepNumber">3</div>
                <div className="StepContent">
                  <h4>Start Your Quiz</h4>
                  <p>Begin answering questions generated in real time — every attempt is new, engaging, and insightful.</p>
                </div>
              </li>
              <li>
                <div className="StepNumber">4</div>
                <div className="StepContent">
                  <h4>Navigate Freely</h4>
                  <p>Move through questions at your own pace, skip, review, and enjoy a smooth answering experience.</p>
                </div>
              </li>
              <li>
                <div className="StepNumber">5</div>
                <div className="StepContent">
                  <h4>Track Your Growth</h4>
                  <p>Review your results instantly and gain helpful AI feedback to keep improving with every session.</p>
                </div>
              </li>
            </ol>
          </section>

          <section className="AboutSection FadeIn">
            <h2>Our Aspiration</h2>
            <p>
              At Quizmify, we dream of a future where learning is smarter, faster, and always evolving. We’re constantly refining our platform — expanding topic choices, enhancing questions, and improving usability — all to help you stay ahead in the fast-moving tech world.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;