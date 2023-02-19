import React, { ReactNode } from "react";

import Image from "next/image";
import { projectInt } from "helpers";
const ProjectCard: React.FC<{
  children?: ReactNode,
  project: projectInt
}> = ({ project }) => {
  return (
    <div className=" rounded-lg flex flex-col relative w-full h-max">
      <div className="w-full h-56 min-h-full flex justify-center relative items-center">
        <Image
          src={project.image}
          alt="house"
          priority
          className="absolute"

          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="flex flex-col">
        <b>{project.title}</b>

        <small>{project.desc}</small>
      </div>


    </div>
  );
};

export default ProjectCard;
