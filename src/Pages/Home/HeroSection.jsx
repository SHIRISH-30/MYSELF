import React from 'react';

export default function HeroSection() {
  const openLinkedInProfile = () => {
    window.open('https://www.linkedin.com/in/shirish-shetty-5734a7250/', '_blank');
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Shirish</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend and Backend</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a 3rd-year Engineering student studying at
            <br />TSEC
          </p>
        </div>
        <button className="btn btn-primary" onClick={openLinkedInProfile}>
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero1.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
