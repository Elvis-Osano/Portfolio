import localFont from '@next/font/local'
import Head from "next/head";
import React from "react";
import { Contact, Footer, Header, Projects, Skills, Work } from '@Framework';

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
