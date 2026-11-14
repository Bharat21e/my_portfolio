import { FiDownload } from "react-icons/fi";
import Link from "next/link";
const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  return (
    <header className="nav">
      <a href="#home" className="logo">
        <span className="logo-icon">&lt;/&gt;</span>
        Bharat <span className="accent">Mahajan</span>
      </a>
      <nav className="nav-links">
        {links.map((l, i) => (
          <Link key={l} href={`#${l.toLowerCase()}`} className={i === 0 ? "active" : ""}>
            {l}
          </Link>
        ))}
      </nav>
      <Link href="/cv.pdf" download className="btn btn-outline btn-sm">
      <span className="cv-text">Download CV</span>   <FiDownload />
      </Link>
    </header>
  );
}
