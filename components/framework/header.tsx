import Image from "next/image";
import { Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

function Header() {

  return (
    <section className="min-h-[90vh] mb-16 flex w-full items-center   ">
      <div className="flex items-center  justify-between h-full w-full">

        <div className="w-3/5 flex items-center justify-center">
          <motion.div
            className="w-4/5 flex items-center justify-center flex-col gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <big>Hi there,Meet</big>
            <motion.h1
              initial={{ y: -200, opacity: 0 }}
              animate={{ fontSize: 66, y: 0, opacity: 1 }}
              className="text-3xl text-black font-extrabold "
              transition={{ delay: 2, duration: 1 }}
            >
              Elvis Osano
            </motion.h1>
            <h4 className="font-bold"> Developer • Techie • Consultant</h4>
            <p className="text-center">
              I love building solid and scalable software with great user
              experiences. Highly skilled in web and cross-platform mobile app
              development. Over 2 years of experience building products for
              clients across several countries.
            </p>
            <Stack direction="row" gap={5}>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
              >
                <Button variant="outlined" className="text-[#f56] hover:border-blue-500 hover:text-blue-500 border-[#f56]">
                  Download CV
                </Button>
              </motion.div>
              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
              >
                <Button variant="outlined" className="hover:border-black hover:text-black ">Hire Me</Button>
              </motion.div>
            </Stack>
          </motion.div>
        </div>

        <div className="w-2/5 h-full  flex justify-center relative items-center">
          <Image
            src="/head3.gif"
            alt="head"
            className="absolute"
            width={540}
            height={340}
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
