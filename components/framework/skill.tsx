import { Container } from "@mui/material";

import { skills } from "helpers";
function Skills() {
  return (
    <Container className="mb-24">
      <h1 className="text-3xl text-center mb-24 p-3 capitalize font-bold text-black">What I can do for you</h1>

      <div className="grid grid-cols-3">
        {skills.map((item, i) => (
          <div className="flex flex-col gap-3" key={i}>
            <h3 className="text-center font-extrabold text-black">{item.name}</h3>
            <div className="flex items-center justify-center">{item.icon}</div>
            <p className="my-2 text-center">{item.description}</p>

          </div>
        ))}
      </div>
    </Container>
  );
}

export default Skills;
