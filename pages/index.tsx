import Link from "next/link";
import { motion } from "framer-motion";

import Head from "next/head";
import Header from "@/Framework/header";
import Skills from "@/Framework/skill";

const IndexPage = () => {
  return (
    <main>
      <Head>
        <title>Elvis Osano</title>
      </Head>

      <motion.div
        initial={{ backgroundColor: "#101010" }}
        animate={{ backgroundColor: "#fff" }}
      >
        <Header />
        <Skills />
      </motion.div>
    </main>
  );
};

export default IndexPage;
