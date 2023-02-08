import React from "react";

import Image from "next/image";
const ProjectCard: React.FC = () => {
  return (
    <div className=" rounded-lg flex flex-col relative w-full h-max">
      <div className="w-full h-56 min-h-full flex justify-center relative items-center">
        <Image
          src="/images/house.png"
          alt="house"

          className="absolute"

          fill
        />
      </div>
      <div className="flex flex-col">
        <b>Sally Forster Hills</b>

        <small>Real Estate,Beverly</small>
      </div>


    </div>
  );
};

export default ProjectCard;
