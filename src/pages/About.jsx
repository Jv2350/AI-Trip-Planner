import React from 'react';
// import './About.css'; // Add this line to use the updated styles

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Welcome to Trip Planner</h1>
        <p>Plan your dream journey effortlessly with us!</p>
      </header>

      <section className="about-mission">
  <div className="about-content">
    <h2 className="mission-title">Our Mission</h2>
    <p className="mission-text">
      At Trip Planner, we aim to revolutionize 
      <br/>the way you travel. From personalized <br/> itineraries to seamless trip management, we are here to make every journey memorable.
    </p>
  </div>
  <img className="mission-img" src="/mountain.jpg" alt="Mission" />
</section>


      <section className="about-features">
        <h2>Why Choose Trip Planner?</h2>
        <div className="features-list">
          <div className="feature-card">
            <div className="feature-img-container">
              <img className="feature-img" src="/123.png" alt="custom" />
              <div className="feature-overlay">
                <h3>Personalized Itineraries</h3>
                <p>Create custom travel plans tailored to your preferences.</p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-img-container">
              <img className="feature-img" src="/AI1.jpg" alt="AI" />
              <div className="feature-overlay">
                <h3>AI-Powered Suggestions</h3>
                <p>Get smart recommendations for destinations and activities.</p>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-img-container">
              <img className="feature-img" src="/friend.jpg" alt="friend" />
              <div className="feature-overlay">
                <h3>Collaborate with Friends</h3>
                <p>Plan trips together with an interactive platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
  <h2>Meet Our Team</h2>
  <div className="team-list">
    <div className="team-member">
      <img className="team-img" src="travel.png" alt="John Doe" />
      <h3>John Doe</h3>
      <p>Founder & Travel Enthusiast</p>
    </div>
    <div className="team-member">
      <img className="team-img" src="travel2.jpeg" alt="Jane Smith" />
      <h3>Jane Smith</h3>
      <p>Lead Developer & Designer</p>
    </div>
    <div className="team-member">
      <img className="team-img" src="travel3.png" alt="Mark Wilson" />
      <h3>Mark Wilson</h3>
      <p>AI Specialist</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
