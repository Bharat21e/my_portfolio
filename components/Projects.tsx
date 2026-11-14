import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
const projects = [
  {
    title: "Crop Disease Detection",
    text: "Detect crop diseases using AI with React, Node.js and Python.",
    img: "/images/crop.png",
    href: "https://crops-dieasese-detection-app.vercel.app/ ",
  },
  {
    title: "Cross Circle Game",
    text: "A fun game built with Next.js and TypeScript.",
    img: "/images/game.png",
    href: "https://crosecircalgameforme.vercel.app/",
  },
  {
    title: "Portfolio Website",
    text: "A modern portfolio website with smooth animations.",
    img: "/images/portfolio.png",
    href: "https://myportfoliotwo-sable-94.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h3 className="title">My <span className="accent">Projects</span></h3>
      <p className="sub">Some of my recent work</p>
      <div className="projects" data-reveal>
        {projects.map((p) => (
          <article key={p.title} className="card project">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.img} alt={p.title} />
            <div>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
              <Link href={p.href} className="btn btn-outline btn-xs">View Project <FiArrowRight /></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
