import React from 'react'
import {CiLocationOn} from '../../node_modules/react-icons/ci'
import {BiRightArrowAlt} from '../../node_modules/react-icons/bi'

function CareerContent() {

  const li = " text-[16px] font-medium mb-[16px]";
  return (
    <section className=' bg-[#F6F9FC]'>
        <div className=' w-[90%] mx-auto py-16 md:w-[85%]'>
            <div className=' grid grid-cols-1 justify-center items-center mb-14'>
                <div className=' grid grid-cols-1 justify-center items-start'>
                    <h2 className=' text-[32px] font-semibold font-poppins'>Careers at Inertia</h2>
                    <hr className='w-10 h-1 bg-red-500 rounded-xl my-6 '/>
                    <p className=' text-[16px] font-spartan font-medium leading-7 max-w-[415px]'>Join us in our quest to bring the best experiences through design and technology to the world, our most important vision is to have the best work culture possible.</p>
                </div>
            </div>
            <div className=' flex flex-col justify-center items-start gap-10 md:flex-row md:justify-between'>
              <div>
                {/* city loaction  */}
                <div className='flex justify-start items-center mb-4 gap-[64px]'><h4 className=' text-[20px] font-semibold font-spartan'>Dublin</h4><CiLocationOn className=' text-xl'/></div>
                <ul>
                  <li className={li}>Head of Marketing</li>
                  <li className={li}>UX Designer</li>
                  <li className={li}>Senior Programmer</li>
                  <li className={li}>Mobile UI Designer</li>
                  <li className={li}>Lead Product Designer</li>
                </ul>
              </div>
              <div>
                {/* city loaction  */}
                <div className='flex justify-start items-center mb-4 gap-[64px]'><h4 className=' text-[20px] font-semibold font-spartan'>Amsterdam</h4><CiLocationOn className=' text-xl'/></div>
                <ul>
                  <li className={li}>Head of Operations</li>
                  <li className={li}>Mobile Engineer</li>
                  <li className={li}>Animation Designer</li>
                </ul>
              </div>
              <div>
                {/* city loaction  */}
                <div className='flex justify-start items-center mb-4 gap-[64px]'><h4 className=' text-[20px] font-semibold font-spartan'>Mexico City</h4><CiLocationOn className=' text-xl'/></div>
                <ul>
                  <li className={li}>Head of Motion Design</li>
                  <li className={li}>Graphics Engineer</li>
                  <li className={li}>Senior UI Designer</li>
                  <li className={li}>Backend Engineer</li>
                </ul>
              </div>
            </div>
            <div className=' mt-8 '>
              <button className=' flex justify-center items-center gap-2 bg-red-500 p-[12px] rounded-xl text-white before:w-[0%] before:left-0 before:bottom-0 before:h-full hover:before:w-full before:bg-cyan-900 before:absolute relative before:duration-300 before:rounded-xl'> <h4 className=' relative z-10'>Careers At Intertia</h4> <BiRightArrowAlt className=' relative z-10'/></button>
            </div>
        </div>
    </section>
  )
}

export default CareerContent