import { useAnimation, motion, useTransform, useScroll } from "framer-motion";
import { skills } from "helpers";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
function Skills() {
  const animation = useAnimation()
  const { ref, inView, entry } = useInView({
    threshold: 0.1, triggerOnce: true
  });

  useEffect(() => {

    if (inView) {


      animation.start({
        y: 0,
        transition: {

          duration: 1,

        },
        opacity: 1
      })

    }
    if (!inView) {
      animation.start({
        y: 100,
        opacity: 0

      })

    }

  }, [inView])
  return (
    <section ref={ref}>
      <motion.div animate={animation} className="lg:w-5/6 sm:w-full px-1 mx-auto">
        <h1 className="text-3xl text-center p-3 mb-24 capitalize font-bold text-black">What I can do for you</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {skills.map((item, i) => (
            <div className="flex flex-col gap-3" key={i}>
              <div className="flex items-center justify-center mb-3">{item.icon}</div>
              <h3 className="text-center text-lg font-extrabold text-black">{item.name}</h3>
              <p className="my-2 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

    </section>

  );
}

export default Skills;
