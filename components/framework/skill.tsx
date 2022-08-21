import { Container } from "@mui/material";

import { skills } from "helpers";
function Skills() {
  return (
    <Container>
      <h1 className="text-3xl p-3 font-extrabold">What I can do for you</h1>

      <div className="grid grid-cols-3">
        {skills.map((item, i) => (
          <div className="flex flex-col gap-3" key={i}>
            <h3 className="text-center font-extrabold">{item.name}</h3>
            <div className="flex items-center justify-center">{item.icon}</div>
            <p>{item.description}</p>
            <details>
              <summary>See More</summary>
              <p>Hello world</p>
            </details>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Skills;
