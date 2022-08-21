import React from "react";
import {
  SelfBuildingSquareSpinner,
  AtomSpinner,
  BreedingRhombusSpinner,
} from "react-epic-spinners";

export const skills: skill[] = [
  {
    name: "Code",
    icon: <AtomSpinner color="black" size={200} />,
    description: "Am skilled in several languages:Python,Typescript,c++,Java",
  },
  {
    name: "Develop",
    icon: <SelfBuildingSquareSpinner color="black" size={200} />,
    description:
      "Proficcinet with javascript and python web frameworks:React,Django,Nextjs,Astro",
  },
  {
    name: "Deploy",
    icon: <BreedingRhombusSpinner color="black" size={200} />,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.oluptates dignissimos harum distinctio fugiat",
  },
];
type skill = {
  name: string;
  icon: React.ReactElement;
  description: string;
};
