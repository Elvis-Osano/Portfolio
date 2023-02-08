import React from "react";
import * as animationData from "../public/images/coding guy.json"
import {
  SelfBuildingSquareSpinner,
  AtomSpinner,
  BreedingRhombusSpinner,
} from "react-epic-spinners";

export const skills: skill[] = [
  {
    name: "Code",
    icon: <AtomSpinner color="black" size={200} />,
    description: "From creating architectures to high quality mockup wireframes, I adore taking part in the conception phase of any product.",
  },
  {
    name: "Develop",
    icon: <SelfBuildingSquareSpinner color="black" size={200} />,
    description:
      "With a text editor and a vision, I'm a sucker for writing code. Breathing life into designs excites me.",
  },
  {
    name: "Deploy",
    icon: <BreedingRhombusSpinner color="black" size={200} />,
    description:
      "Provisioning resources and the entire complete architecture to the cloud is the awesomeness that I thrive in.",
  },
];
type skill = {
  name: string;
  icon: React.ReactElement;
  description: string;
};
export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};
export const tech = ["nextjs-13",
  "framer-motion",
  "tailwindcss",
  "nest",
  "docker-1",
  "aws-2",
  "gitlab",
  "debian-2",
  "postgresql"
]