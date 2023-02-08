import { Button } from "@mui/material";
import { tech } from "helpers";
import Image from "next/image";
import React from "react";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineTwitter } from "react-icons/ai"
const Contact = () => {
  return <section className="grid grid-cols-2 w-5/6 mx-auto my-32">
    <div>

      <div className="grid grid-cols-3 gap-4 my-4">
        {tech.map((item) => <div className="w-[170px] h-[100px] hover:shadow-2xl transition-shadow  duration-150 border-[1px] border-[#faf8ff]/75 grid place-items-center">
          <Image
            src={`./svg/${item}.svg`}
            alt="head"
            className="grayscale  cursor-pointer align-middle"
            width={75}
            height={75}
            title="Frame"
          />
        </div>)}

      </div>
      <p className="text-center" >Whether it's an interesting idea for a project that you have,
        some consultancy work you may need, or just a quick hello, I'd love to chat! I typically
        respond within a few hours.</p>

      {/* <center className='my-16'>
        <Button variant='outlined' className='bg-[#f56] text-white rounded-full shadow-none hover:bg-transparent border-[#f56] hover:text-black hover:shadow-none  hover:border-black'>Message</Button>

      </center> */}
    </div>
    <div className="flex justify-end pt-16">
      <div className="bg-[#faf8ff]/50 relative h-96 w-96">
        <div className="flex gap-6 ml-10 items-center">
          <b className="text-[#f56] text-8xl font-extrabold">3</b>
          <b className="font-sans">Years <br /> Experience</b>
        </div>
        <div className="w-[175px] h-[175px] absolute -top-16 -left-16 ">
          <Image
            src="/images/client-bg.png"
            alt="head"

            width={175}
            height={175}
          />
        </div>
        <div className="absolute top-32">
          <span className="flex items-center">
            <AiOutlineMail />:Elvoosano7@gmail.com
          </span>
          <span className="flex items-center"><AiOutlinePhone />:0797088981/0795316603

          </span>
          <span className="flex items-center">
            <AiOutlineGithub />:https://github.com/Elvis-Osano
          </span>
          <span className="flex items-center">
            <AiOutlineTwitter />:
          </span>
          <span className="flex items-center">
            <AiOutlineLinkedin />:
          </span>
          <span className="flex items-center">
            <AiOutlineInstagram />:
          </span>










        </div>
      </div>

    </div>


  </section>;
};

export default Contact;
