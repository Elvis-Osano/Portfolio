import React from "react";

import Image from "next/image";
const ProjectCard: React.FC = () => {
  return (
    <div className=" rounded-lg flex flex-col relative w-full h-max">
      <div className="w-full h-56 min-h-full flex justify-center relative items-center">
        <Image
          src="/images/house.png"
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
        <b>Sally Forster Hills</b>

        <small>Real Estate,Beverly</small>
      </div>


    </div>
  );
};

export default ProjectCard;
