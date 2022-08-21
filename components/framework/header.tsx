import Image from "next/image";
import { Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
function Header() {
  return (
    <section className="min-h-[90vh] flex w-full items-center   ">
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
              initial={{ y: 100 }}
              animate={{ fontSize: 66, y: 0 }}
              className="text-3xl font-extrabold "
            >
              Elvis Osano
            </motion.h1>
            <h4 className="font-bold"> Developer • Techie • Consultant</h4>
            <p>
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
                <Button variant="outlined" color="secondary">
                  Download CV
                </Button>
              </motion.div>
              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
              >
                <Button variant="outlined">Hire Me</Button>
              </motion.div>
            </Stack>
          </motion.div>
        </div>

        <div className="w-2/5 h-full bg-black flex justify-center relative items-center">
          <Image
            src="/head1.gif"
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
