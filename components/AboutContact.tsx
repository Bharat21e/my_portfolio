import { FiArrowRight, FiGithub, FiLinkedin, FiYoutube, FiMail, FiSend } from "react-icons/fi";
import Link  from "next/link";
const socials = [
  { Icon: FiGithub, href: "https://github.com/your-username", label: "GitHub" },
  { Icon: FiLinkedin, href: "https://linkedin.com/in/your-username", label: "LinkedIn" },
  { Icon: FiYoutube, href: "https://youtube.com/@your-channel", label: "YouTube" },
  { Icon: FiMail, href: "mailto:you@example.com", label: "Email" },
];

export default function AboutContact() {
  return (
    <section className="split" data-reveal>
      <div id="about" className="card about">
        <div className="about-text">
          <h3>About Me</h3>
          <p>
            I&apos;m Bharat Mahajan, a B.Tech Graduate from Raipur Institute of
            Technology (2025). I&apos;m from Raver, Jalgaon and currently based in Vadodara.
          </p>
          <p>I enjoy coding, exploring new technologies, and turning ideas into reality.</p>
          <Link href="#" className="btn btn-outline btn-xs">Learn More <FiArrowRight /></Link>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/laptop.png" alt="" className="about-img" />
      </div>

      <div id="contact" className="card connect">
        <h3>Let&apos;s Connect</h3>
        <p>Feel free to reach out. I&apos;m always open to new opportunities and collaborations.</p>
        <div className="socials">
          {socials.map(({ Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} className="social"><Icon size={22} /></a>
          ))}
        </div>
        <Link href="mailto:you@example.com" className="btn btn-primary">
          <FiSend /> Send Message <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}
