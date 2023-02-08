import Link from "next/link";
import { motion } from "framer-motion";
import localFont from '@next/font/local'
import Head from "next/head";
import Header from "@/Framework/header";
import Skills from "@/Framework/skill";
import Projects from "@/Framework/projects";
import React from "react";
import Work from "@/Framework/work";
import { Roboto } from '@next/font/google'
import Contact from "@/Framework/contact";
import Footer from "@/Framework/footer";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"]
})
const cirular = localFont({ src: '../public/fonts/circular.woff2' })

const IndexPage = () => {


  return (
    <main className={`absolute ${cirular.className}  `} >


      <Head>
        <title>Elvis Osano</title>
      </Head>


      <Header />
      <Skills />



      <Work />


      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;
