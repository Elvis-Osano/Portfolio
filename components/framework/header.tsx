import { motion } from "framer-motion";
import { child, container } from "helpers";
function Header() {
  return (
    <section className="lg:min-h-[90vh] min-h-[80vh]   flex w-full header items-center">
      <div className="flex items-center justify-between h-full w-full">
        <div className="w-full sm:w-3/5 flex items-center justify-center">
          <motion.div
            className="lg:w-4/5 md:w-full px-3 flex items-center justify-center flex-col lg:gap-8 gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div variants={container}
              className="capitalize"
              initial="hidden"
              animate="visible">
              {
                "hi,there meet".split("").map((letter, i) => <motion.big variants={child} key={i}>{letter}</motion.big>)
              }
            </motion.div>


            <motion.h3
              initial={{ y: -200, opacity: 0 }}
              animate={{ fontSize: [36, 48, 66], y: 0, opacity: 1 }}
              className="text-4xl font-bold text-center bg-gradient-to-r from-teal-400 to-[#f56] text-transparent bg-clip-text animate-pulse"
              transition={{ delay: 0.5, duration: 2, type: "spring", bounce: 0.5 }}
            >
              Elvis Osano
            </motion.h3>
            <h4 className="font-bold font-sans">Developer • Techie • Consultant</h4>
            <p className="text-center">
              I love building solid and scalable software with great user
              experiences. Highly skilled in web and cross-platform mobile app
              development. Over 2 years of experience building products for
              clients across several countries.
            </p>
            <div className="flex flex-row sm:flex-row gap-5">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <button className="text-[#f56] border px-2 py-1 rounded hover:border-black outline-1 hover:text-black border-[#f56]">
                  Download CV
                </button>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <button className="hover:border-[#f56] hover:text-[#f56] border px-2 py-1 rounded border-black">Hire Me</button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="hidden sm:block w-2/5 h-full  lg:flex justify-center relative items-center">
          <video src="/images/head.webm" autoPlay muted loop></video>
        </div>
      </div>
    </section>

  );
}

export default Header;
