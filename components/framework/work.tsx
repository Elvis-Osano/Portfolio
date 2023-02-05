import Image from 'next/image'
import React from 'react'
import * as animationData from "../../public/coding guy.json"

import Lottie from 'react-lottie';
const Work = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <section className='w-5/6 mb-24 mx-auto grid grid-cols-2'>
            <h1 className='text-3xl font-bold text-center w-full col-span-2 my-5 text-black'>Work Experience</h1>
            <div className=" w-[400px]">
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}

                />
            </div>
            <div className='mt-4'>
                <p className='text-center '>From spearheading projects to collaborating with talented colleagues, most of my experience is largely attributed to these awesome places I've been a part of.</p>
                <ul>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
            </div>



        </section>
    )
}

export default Work