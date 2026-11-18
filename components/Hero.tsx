import { FiArrowRight, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="hello" data-hero>Hello, I&apos;m</p>
        <h1 data-hero>Bharat <span className="accent">Mahajan</span></h1>
        <h2 data-hero>Full Stack Web Developer</h2>
        <p className="lead" data-hero>
          I&apos;m a passionate developer who loves to build modern, fast and
          user-friendly web applications. Always eager to learn new technologies
          and solve real-world problems.
        </p>
        <div className="btn-row" data-hero>
          <a href="#projects" className="btn btn-primary">View My Projects <FiArrowRight /></a>
          <a href="#contact" className="btn btn-outline">Contact Me <FiMail /></a>
        </div>
      </div>

      <div className="hero-visual" data-hero-img>
        <div className="ring" />
        {/* Put your photo at /public/images/hero.png (transparent PNG works best) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Professional Indian Man in Gray Suit.png" alt="Bharat Mahajan" className="hero-photo" />
        <p className="script">Dream<br />Code<br />Build</p>
      </div>

      <div className="scroll-hint"><span>Scroll Down</span><i /></div>
    </section>
  );
}
