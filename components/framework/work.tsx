import { Button } from '@mui/material';
import { defaultOptions } from 'helpers';
import Image from 'next/image'
import React from 'react'
import { MdAdd } from "react-icons/md"

import Lottie from 'react-lottie';
const Work = () => {



    return (
        <section className='w-5/6 mb-24 mx-auto grid grid-cols-2'>
            <h1 className='text-3xl font-bold text-center w-full col-span-2 mb-16 text-black'>Work Experience</h1>
            <div className=" w-[400px]">
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}

                />
            </div>
            <div className='mt-4'>
                <p className='text-center '>From spearheading projects to collaborating with talented colleagues, most of my experience is largely attributed to these awesome places I've been a part of.</p>
                <ul>
                    <li className='border-y-[1px] border-black grid grid-cols-5 px-4 py-1 gap-4 items-center h-max w-full'>
                        <div className='flex flex-col  justify-center col-span-2'>
                            <small>Feb 2021 • Dec 2021(1Yr)</small>

                            <b> Mackenzia Security</b>

                        </div>

                        <p className='flex  col-span-2'>Cyber Security</p>
                        <span className='flex justify-end'><MdAdd className='text-black cursor-pointer' /></span>
                    </li>
                    <li className='border-b-[1px] border-black grid grid-cols-5 px-4 py-1 gap-4 items-center h-max w-full'>
                        <div className='flex flex-col  justify-center col-span-2'>
                            <small>Aug 2022 • Nov 2022(2Mos)</small>

                            <b> Musembi RealEstate</b>

                        </div>

                        <p className='flex  col-span-2'>Wordpress Tech</p>
                        <span className='flex justify-end'><MdAdd className='text-black cursor-pointer' /></span>
                    </li>
                    <li className='border-b-[1px] border-black grid grid-cols-5 px-4 py-1 gap-4 items-center h-max w-full'>
                        <div className='flex flex-col  justify-center col-span-2'>
                            <small>Aug 2022 • Nov 2022(2Mos)</small>

                            <b> Ralph FastFood</b>

                        </div>

                        <p className='flex  col-span-2'>SaaS Application</p>
                        <span className='flex justify-end'><MdAdd className='text-black cursor-pointer' /></span>
                    </li>
                    <li className='border-b-[1px] border-black grid grid-cols-5 px-4 py-1 gap-4 items-center h-max w-full'>
                        <div className='flex flex-col  justify-center col-span-2'>
                            <small>Jan 2023 • (Present)</small>

                            <b> Milkyway Technologies</b>

                        </div>

                        <p className='flex  col-span-2'>Network Developer</p>
                        <span className='flex justify-end'><MdAdd className='text-black cursor-pointer' /></span>
                    </li>


                </ul>
                <center className='my-16'>
                    <button className='bg-[#f56] border px-3 py-1 text-white rounded-full shadow-none hover:bg-transparent border-[#f56] hover:text-black hover:shadow-none  hover:border-black'>Let's Connect On LinkedIn</button>

                </center>
            </div>



        </section>
    )
}

export default Work