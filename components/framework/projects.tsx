import ProjectCard from "@/Cards/projectCard";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Projects = () => {
  const animation = useAnimation()
  const { ref, inView, entry } = useInView({
    threshold: 0.1, triggerOnce: true
  });

  useEffect(() => {

    if (inView) {


      animation.start({
        translateX: 0,
        translateY: 0,
        opacity: 1,
        filter: "grayscale(0%)",

      })

    }
    if (!inView) {
      animation.start({
        translateX: -50,
        translateY: -50,
        opacity: 0,
        filter: "grayscale(100%)"


      })

    }

  }, [inView])
  return (
    <section className="lg:w-5/6 w-full px-1 mx-auto ">
      <h1 className="text-4xl font-extrabold">
        QUALITY WORK <br />
        RECENTLY DONE PROJECT
      </h1>
      <ul className="uppercase flex flex-row md:flex-row gap-8 my-10 items-center">
        <li className="text-[#f56]">
          All
        </li>
        <li>
          Popular
        </li>
        <li>
          Latest
        </li>

        <li>
          Upcoming
        </li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 h-max" ref={ref}>
        {
          [1, 2, 5, 9, 6, 7, 9].map((item, i) =>
            <motion.div key={i} animate={animation} transition={{
              duration: 1,
              delay: i * 0.5
            }}>
              <ProjectCard />
            </motion.div>
          )
        }


      </div>
    </section>

  );
};
export default Projects;
