import React from 'react'
import img1 from "../assets/Item - 1.png";
import img2 from "../assets/Item - 2.png";
import img3 from "../assets/Item - 1 (1).png";
import img4 from "../assets/Item - 2 (1).png";
import img5 from "../assets/Item - 1 (3).png";
import img6 from "../assets/Item - 1 (2).png";
import img7 from "../assets/Diagonal.png"


function Heros() {
  return (
    <section>
      {/* hero content  */}
      <div className='w-full py-10'>
        <div className=' w-[90%] mx-auto py-8'>
          <h2 className=' font-poppins text-[32px] font-semibold text-center'>Welcome to the Inertia Agency</h2>
          <div className=' w-10 rounded-xl h-1 bg-red-500 mx-auto my-6'></div>
          <p className=' text-center font-inter text-[16px] font-mediu lg:max-w-[39em] lg:mx-auto'>Inertia was founded to help developers and designers with their projects by offering great quality products. By developing a nicely designed, easy to customize theme, we strive to offer a good variety of options to anyone without spending a lot of time and money.</p>
        </div>
      </div>
      {/* featured projects  */}
      <div>
      <div className=' w-full bg-[#EEF3F9] pt-10'>
        <div className="w-[90%] mx-auto py-8">
          <h2 className=' capitalize font-poppins text-[32px] font-semibold text-center'>featured projects</h2>
          <div className=' w-10 rounded-xl h-1 bg-red-500 mx-auto my-6'></div>
          <div className=' grid grid-cols-1 py-10 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8'>
          <Project 
              img={img1}
              project__number="1"
            />
            <Project 
              img={img2}
              project__number="2"
            />
            <Project 
              img={img3}
              project__number="3"
            />
            <Project 
              img={img6}
              project__number="4"
            />
            <Project 
              img={img5}
              project__number="5"
            />
            <Project 
              img={img4}
              project__number="6"
            />
          </div>
        </div>
      <img src={img7} alt="" className='w-full'/>
      </div>
      </div>
    </section>
  )
}

export default Heros


const Project = (props) => {
  return (
    <div className=' w-fit h-fit flex justify-center items-center relative mx-auto group'>
    <img src={props.img} alt="" />
    <div className=' absolute z-10 bg-[#1a1a5ec7] w-full h-full flex justify-center items-center flex-col text-white scale-x-0 opacity-0 duration-500 origin-left group-hover:scale-100 group-hover:opacity-100'>
      <h3 className=' mb-4 font-poppins text-xl'>Project {props.project__number}</h3>
      <button className=' px-3 py-2 rounded-md bg-red-500'>See Demo</button>
    </div>
  </div>
  )
};