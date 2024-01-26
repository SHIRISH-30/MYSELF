export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/shirish.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a third-year computer engineering student studying at TSEC. My eagerness to learn and adapt to new technologies drives me to seek out opportunities to expand my knowledge. I am excited about the prospect of an internship, where I can learn from industry professionals and contribute to a dynamic team.
          </p>
          {/* <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p> */}
        </div>
      </div>
    </section>
  );
}
