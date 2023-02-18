import { useAnimation, motion } from "framer-motion";
import { skills } from "helpers";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
function Skills() {
  const main = useAnimation()

  const { ref: mainRef, inView: inMain } = useInView({
    threshold: 0.3, triggerOnce: true
  });


  useEffect(() => {

    if (inMain) {


      main.start({
        y: 0,

        opacity: 1
      })

    }
    else {
      main.start({
        y: 100,
        opacity: 0

      })

    }

  }, [inMain])
  return (
    <section ref={mainRef}>
      <motion.div className="lg:w-5/6 sm:w-full px-1 mx-auto">
        <motion.h1 animate={main} transition={
          {
            duration: 1,

          }
        } className="text-3xl text-center p-3 mb-24 capitalize font-bold text-black">What I can do for you</motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {skills.map((item, i) => (
            <div className="flex flex-col gap-3" key={i} >
              <motion.h2 animate={main} transition={
                {
                  duration: 1,
                  delay: i * 0.4
                }
              } className="text-center text-lg font-extrabold text-black">{item.name}</motion.h2>
              <motion.div animate={main} transition={
                {
                  duration: 1,
                  delay: i * 0.6
                }
              } className="flex items-center justify-center mb-3">{item.icon}</motion.div>

              <motion.p animate={main} transition={
                {
                  duration: 1,
                  delay: i * 0.8
                }
              } className="my-2 text-center">{item.description}</motion.p>
            </div>
          ))}
        </div>
      </motion.div>

    </section>

  );
}

export default Skills;
