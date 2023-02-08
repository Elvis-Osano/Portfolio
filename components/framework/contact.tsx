
import { tech } from "helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineTwitter } from "react-icons/ai"
const Contact = () => {
  return <section className="grid grid-cols-2 w-5/6 mx-auto my-32">
    <div>

      <div className="grid grid-cols-3 gap-4 my-4">
        {tech.map((item, i) => <div key={i} className="w-[170px] h-[100px] hover:shadow-2xl transition-shadow  duration-150 border-[1px] border-[#faf8ff]/75 grid place-items-center">
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


    </div>
    <div className="flex justify-end pt-16">
      <div className="bg-[#faf8ff]/50 relative h-96 w-96">
        <div className="flex gap-6 ml-10 items-center">
          <b className="text-[#f56] text-8xl -translate-x-3 font-extrabold">3</b>
          <b className="font-sans font-bold">Years <br /> Experience</b>
        </div>
        <div className="w-[175px] h-[175px] absolute -top-16 -left-16 ">
          <Image
            src="/images/client-bg.png"
            alt="head"

            width={175}
            height={175}
          />
        </div>
        <div className="absolute top-32 w-full">
          <span className="flex items-center">
            <AiOutlineMail size={18} />:Elvoosano7@gmail.com
          </span>
          <span className="flex items-center"><AiOutlinePhone />:0797088981/0795316603

          </span>
          <span className="flex items-center">
            <AiOutlineGithub size={18} />: <Link href={"https://github.com/Elvis-Osano"} target="_blank">
              Elvis-Osano
            </Link>
          </span>
          <span className="flex items-center">
            <AiOutlineTwitter size={18} />:
          </span>
          <span className="flex items-center">
            <AiOutlineLinkedin size={18} />:
          </span>
          <span className="flex items-center">
            <AiOutlineInstagram size={18} />:
          </span>


          <center className="mt-10"><a href={"mailto:elvoosano7@gmail.com"}  >
            <button className='bg-[#f56] border px-3 py-1 text-white rounded-full shadow-none hover:bg-transparent border-[#f56] hover:text-black hover:shadow-none  hover:border-black'>Message Me</button>

          </a></center>








        </div>
      </div>

    </div>


  </section>;
};

export default Contact;
