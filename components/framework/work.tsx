import { defaultOptions } from 'helpers';
import { AiOutlinePlus } from "react-icons/ai";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from 'react-lottie';
const Work = () => {
    const animation = useAnimation()
    const { ref, inView, entry } = useInView({
        threshold: 0.1, triggerOnce: true
    });

    useEffect(() => {

        if (inView) {


            animation.start({

                translateY: 0,
                opacity: 1,


            })

        }
        if (!inView) {
            animation.start({

                translateY: 50,
                opacity: 0,



            })


        }

    }, [inView])


    return (
        <section ref={ref} className='lg:w-5/6 sm:w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2'>
            <motion.h1 animate={animation} transition={
                { duration: 1 }
            } className='text-3xl font-bold text-center mb-8 w-full col-span-2 md:col-span-3  text-black'>Work Experience</motion.h1>
            <div className="w-[400px] hidden sm:block">
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
            <div className='mt-4 col-span-2 md:col-span-1'>
                <motion.p animate={animation} transition={
                    { duration: 1 }
                } className='lg:text-center text-center px-2  my-5 '>From spearheading projects to collaborating with talented colleagues, most of my experience is largely attributed to these awesome places I've been a part of.</motion.p>
                <motion.ul >
                    {[1, 2, 3, 4, 5, 6].map((work, i) => <motion.li animate={animation} transition={{
                        duration: 0.6,
                        delay: i * 0.5
                    }} key={i} className='border-t-[1px] work border-black grid grid-cols-5 px-4 py-1 gap-4 items-center h-max w-full'>
                        <div className='flex flex-col justify-center col-span-2'>
                            <small>Feb 2021 • Dec 2021(1Yr)</small>
                            <b> Mackenzia Security</b>
                        </div>
                        <p className='flex col-span-2'>Cyber Security</p>
                        <span className='flex justify-end'><AiOutlinePlus className='text-black cursor-pointer' /></span>
                    </motion.li>)}


                </motion.ul>
                <center className='my-16'>
                    <button className='bg-[#f56] border px-3 py-1 text-white rounded-full shadow-none hover:bg-transparent border-[#f56] hover:text-black hover:shadow-none  hover:border-black'>Let's Connect On LinkedIn</button>
                </center>
            </div>
        </section>

    )
}

export default Work