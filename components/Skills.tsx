import { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiNodedotjs,
  SiExpress, SiMysql, SiMongodb, SiGit, SiGithub,
} from "react-icons/si";
interface skill{
  name:string ,
  Icon:IconType,
  color:string
}
const skills: skill[] = [
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5fa04e" },
  { name: "Express.js", Icon: SiExpress, color: "#ffffff" },
  { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "Git", Icon: SiGit, color: "#f05032" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h3 className="title">My <span className="accent">Skills</span></h3>
      <p className="sub">Technologies I work with</p>
      <div className="skills" data-reveal>
        {skills.map(({ name, Icon, color }) => (
          <div key={name} className="skill">
            <span className="skill-box"><Icon size={34} color={color} /></span>
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
