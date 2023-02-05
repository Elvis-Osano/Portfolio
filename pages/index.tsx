import Link from "next/link";
import { motion } from "framer-motion";

import Head from "next/head";
import Header from "@/Framework/header";
import Skills from "@/Framework/skill";
import Projects from "@/Framework/projects";
import React from "react";
import Work from "@/Framework/work";
import { Roboto } from '@next/font/google'
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"]
})


const IndexPage = () => {


  return (
    <main className={`absolute ${roboto.style} `}>


      <Head>
        <title>Elvis Osano</title>
      </Head>
      <nav className="fixed h-24 z-50 bg-gradient-to-b bg-no-repeat from-[#f0f8ff]  to-transparent w-full p-5">
        <h1 className="text-4xl font-extrabold font-mono ">ELVIS</h1>
      </nav>

      <Header />
      <Skills />



      <Work />
      {/* <Projects /> */}
    </main>
  );
};

export default IndexPage;
