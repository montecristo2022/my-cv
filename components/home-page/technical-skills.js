import Image from "next/image";

import classes from "./technical-skills.module.css";
import {
  SKILLS_DATA,
  ADDITIOANAL_SKILLS_DATA,
  LANGUAGE_SKILLS_DATA,
} from "@/data/skills-data";

export default function TechnicalSkills() {
  return (
    <section id="skills" className={classes.skills}>
      <h3>My Technical Skills</h3>
      <ul>
        {SKILLS_DATA.map((skill) => {
          return (
            <li key={skill.name}>
              <Image src={skill.image} alt={`picture of my skill ${skill.name}`} height={100} width={160} />
              <p>{skill.name}</p>
            </li>
          );
        })}
      </ul>
      <h3>Additional technical skills</h3>
      <ul>
        {ADDITIOANAL_SKILLS_DATA.map((skill, index) => {
          return (
            <li key={index}>
              <p>{skill}</p>
            </li>
          );
        })}
      </ul>

      <h3>Language skills</h3>
      <ul>
        {LANGUAGE_SKILLS_DATA.map((skill) => {
          return (
            <li key={skill.language}>
                  <p>{skill.language}: {skill.level}</p>
            </li>
          );
        })}
          </ul>
    </section>
  );
}
