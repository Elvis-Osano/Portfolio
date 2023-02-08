import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";
const ProjectCard: React.FC = () => {
  return (
    <div className=" rounded-lg flex flex-col relative w-full h-max">
      <div className="w-full h-56 min-h-full flex justify-center relative items-center">
        <Image
          src="https://yusuflawal.netlify.app/images/weather-app-tau-liard.vercel.app_.png"
          alt="head"

          className="absolute"
          placeholder="blur"
          blurDataURL="./h.jpg"
          fill
        />
      </div>
      <div className="flex flex-col">
        <b>Weather App</b>

        <small>Animated,portfolio</small>
      </div>


    </div>
  );
};

export default ProjectCard;
