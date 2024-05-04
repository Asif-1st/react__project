import React from 'react'
import {BiRightArrowAlt} from '../../node_modules/react-icons/bi'
import Background__Img from "../assets/Image (6).png";

import {BsFillArrowUpCircleFill} from "../../node_modules/react-icons/bs"
import {AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiFillGithub} from "../../node_modules/react-icons/ai"


// const scrollBtn = document.querySelector("#botToTop");

// window.addEventListener('scroll', () => {
//   if(window.scrollY > 100) {
//     scrollBtn.style.display = "flex";
//   } else{
//     scrollBtn.style.display = "hidden";
//   }
// })

function Footer() {
  const title = 'font-spartan text-[14px] font-bold tracking-[2px]';

  // bottom to top btn function 
  const btmToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  return (
    <section className=' w-full h-full bg-cover' style={{backgroundImage: "url(" + Background__Img + ")" }}>
        <div className=' w-[90%] mx-auto flex justify-center items-center flex-col py-[135px]'>
            <div>
                <h2 className=' text-[40px] font-semibold font-spartan mb-3 text-center'>Want to hire us?</h2>
                <p className=' text-[20px] font-spartan font-medium text-center'>Have an idea for an awesome project? We'd love to help make it real.</p>
                <div className=' mt-8 flex justify-center items-center'>
                  <button className=' flex justify-center items-center gap-2 bg-red-500 p-4 rounded-xl text-white before:w-[0%] before:left-0 before:bottom-0 before:h-full hover:before:w-full before:bg-cyan-900 before:absolute relative before:duration-300 before:rounded-xl'> <h4 className=' relative z-10'>Get in touch</h4> <BiRightArrowAlt className=' relative z-10'/></button>
                </div>
            </div>
        </div>
        <div>
        <div className=' bg-black text-white'>
              <div className='  w-[85%] mx-auto flex flex-col justify-center items-center gap-16 py-14 md:justify-center md:flex-row md:flex-wrap lg:justify-between'>
                <ul className=' flex justify-center items-center flex-col'>
                  <li className=' mb-8'><a href="/"><strong className={title}>COMPANY</strong></a></li>
                  <li className=' pb-2'><a href="/" className=' text-[14px] font-spartan font-medium'>Portfolio</a></li>
                  <li className=' pb-2'><a href="/">Our clients</a></li>
                  <li className=' pb-2'><a href="/">Careers</a></li>
                </ul>
                <ul className=' flex justify-center items-center flex-col'>
                  <li className=' mb-8'><a href="/"><strong className={title}>OFFICES</strong></a></li>
                  <li className=' pb-2'><a href="/">345 Main St. San Francisco, CA</a></li>
                  <li className=' pb-2'><a href="/">103 N. 13th Street. Seattle, WA</a></li>
                </ul>
                <ul className=' flex justify-center items-center flex-col'>
                  <li className=' mb-8'><a href="/"><strong className={title}>CONTACT</strong></a></li>
                  <li className=' pb-2'><a href="/">+81 555 489 902</a></li>
                  <li className=' pb-2'><a href="/">info@themes.com</a></li>
                </ul>
                <ul className=' flex justify-center items-center flex-col'>
                  <li className=' mb-8'><a href="/"><strong className={title}>ABOUT</strong></a></li>
                  <li className=' pb-2'><a href="/">Log in to your account</a></li>
                  <li className=' pb-2'><a href="/">Support</a></li>
                </ul>
              </div>
              <div className=' w-[85%] mx-auto flex flex-col justify-center items-center py-8'>
                <ul className=' flex justify-center items-center gap-3'>
                  <li className=' p-2 bg-red-500 rounded-full'><AiFillFacebook className=' text-white text-2xl'/></li>
                  <li className=' p-2 bg-red-500 rounded-full'><AiOutlineTwitter className=' text-white text-2xl'/></li>
                  <li className=' p-2 bg-red-500 rounded-full'><AiFillGithub className=' text-white text-2xl'/></li>
                  <li className=' p-2 bg-red-500 rounded-full'><AiFillLinkedin className=' text-white text-2xl'/></li>
                </ul>
                <h4 className=' text-[12px] font-medium font-spartan mt-16'>All rights reserved. © 2020.</h4>
                <div className='flex justify-center items-center gap-10'>
                  <h4 className='text-[12px] font-medium font-spartan mt-2'>Privacy & terms</h4>
                  <h4 className='text-[12px] font-medium font-spartan mt-2'>Terms of Service</h4>
                </div>
              </div>
              <div id='botToTop' className=' flex  w-14 justify-center items-center h-14 rounded-full bg-red-500 fixed right-6 bottom-6 active:scale-95' onClick={btmToTop}><BsFillArrowUpCircleFill className=' text-2xl'/></div>
            </div>
        </div>
    </section>
  )
}

export default Footer