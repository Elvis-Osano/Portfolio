import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
const ProjectCard: React.FC<{
  children?: React.ReactNode;
  classnames: {
    order: string;
    position: string;
    align: string;
    image: string;
    width: string[];
  };
}> = ({ classnames }) => {
  return (
    <div className=" rounded-lg flex  relative w-full h-max">
      <div
        className={`bg-black relative ${classnames.width[0]} ${classnames.order} ${classnames.image} rounded-sm`}
        style={{
          backgroundImage:
            "url('https://yusuflawal.netlify.app/images/weather-app-tau-liard.vercel.app_.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className={`${classnames.width[1]}`}></div>
      <div
        className={`absolute flex  gap-4 py-4 h-full  flex-col w-[700px] ${classnames.position} `}
      >
        <h1 className="text-left text-2xl font-bold font-sans">Weather App</h1>
        <div className="bg-gradient-to-r drop-shadow-md from-rose-100 to-teal-100 h-max ">
          <p className={`p-6 ${classnames.align}`}>
            I built a weather application to display the weather conditions of
            over 200,000 cities with a change of background depending on the
            weather condition and time of day of the particular city.
          </p>
          <div className="flex gap-4 m-4">
            {[1, 2, 3, 4].map((item, i) => (
              <span
                key={i}
                className="bg-blue-800/25 px-4 py-[2px] flex justify-center items-center  uppercase text-black rounded-md text-[12px]"
              >
                HTMl
              </span>
            ))}
          </div>
        </div>
        <span className="flex gap-4">
          <BsGithub size={20} />
          <BiLinkExternal size={20} />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
