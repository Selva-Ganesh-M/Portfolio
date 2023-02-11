import React from "react";
import Be from "./Be";
import Fe from "./Fe";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id={"skills"}>
      <h2 className="section__title">Skills</h2>
      <div className="section__subtitle">My technical level</div>

      {/* skills */}
      <div className="skills__container container grid">
        {/* frontend */}
        <Fe />
        {/* backend */}
        <Be />
      </div>
    </section>
  );
};

export default Skills;
