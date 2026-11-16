
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiSend
} from "react-icons/fi";

import Link from "next/link";

const socials = [
  {
    Icon: FiGithub,
    href: `https://github.com/${process.env.github_id}`,
    label: "GitHub"
  },
  {
    Icon: FiLinkedin,
    href: `https://linkedin.com/in/${process.env.Linkdin_id}`,
    label: "LinkedIn"
  },
  {
    Icon: FiYoutube,
    href: `https://youtube.com/@${process.env.Youtube_id}`,
    label: "YouTube"
  },
  {
    Icon: FiMail,
    href: `mailto:${process.env.Email_name}@gmail.com`,
    label: "Email"
  }
];

export default function AboutContact() {
  const email = `${process.env.Email_name}@gmail.com`;

  return (
    <section className="split" data-reveal>
      <div id="about" className="card about">
        <div className="about-text">
          <h3>About Me</h3>

          <p>
            I&apos;m Bharat Mahajan, a B.Tech Graduate from Raipur Institute of
            Technology (2025). I&apos;m from Raver, Jalgaon.
          </p>

          <p>
            I enjoy coding, exploring new technologies, and turning ideas into reality.
          </p>

          <Link href="#" className="btn btn-outline btn-xs">
            Learn More <FiArrowRight />
          </Link>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/leptop.png" alt="Laptop" className="about-img" />
      </div>

      <div id="contact" className="card connect">
        <h3>Let&apos;s Connect</h3>

        <p>
          Feel free to reach out. I&apos;m always open to new opportunities and collaborations.
        </p>

        <div className="socials">
          {socials.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="social"
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
            >
              <Icon size={22} />
            </Link>
          ))}
        </div>

        <Link href={`mailto:${process.env.Email_name}@gmail.com`} className="btn btn-primary">
          <FiSend /> Send Message <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}
