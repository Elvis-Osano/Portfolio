import Link from "next/link";
import { motion } from "framer-motion";

import Head from "next/head";
import Header from "@/Framework/header";
import Skills from "@/Framework/skill";
import Projects from "@/Framework/projects";

const IndexPage = () => {
  return (
    <motion.main
      initial={{ backgroundColor: "#101010" }}
      animate={{ backgroundColor: "#fff" }}
    >
      <Head>
        <title>Elvis Osano</title>
      </Head>

      <Header />
      <Skills />
      <Projects />
    </motion.main>
  );
};

export default IndexPage;
