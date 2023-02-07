import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return <section>
    <p>Whether it's an interesting idea for a project that you have, some consultancy work you may need, or just a quick hello, I'd love to chat! I typically respond within a few hours.</p>
    <div className="w-2/5 h-full  flex justify-center relative items-center">
      {/* <Image
        src="/khaby.jpg"
        alt="head"
        className="absolute"
        width={540}
        height={340}
      /> */}
    </div>
    <center className='my-16'>
      <Button variant='outlined' className='bg-[#f56] text-white rounded-full shadow-none hover:bg-transparent border-[#f56] hover:text-black hover:shadow-none  hover:border-black'>Message</Button>

    </center>
  </section>;
};

export default Contact;
