import React from 'react'
import blogImg1 from "../assets/blogs1.png"
import profileImg from "../assets/profile.png"
import blogImg2 from "../assets/Image.png"

function Blog() {
  return (
    <section>
        <div className=' w-[85%] mx-auto my-14'>
            <div className=' grid grid-cols-1'>
                <h2 className=' text-[32px] font-semibold font-poppins text-center md:text-left'>From the blog</h2>
                <hr className='w-10 h-1 bg-red-500 rounded-xl my-6 mx-auto md:mx-0'/>
            </div>
            <div className=' flex flex-col justify-center items-center gap-14 py-10 md:flex-row md:flex-wrap lg:justify-start md:items-start xl:justify-between'>
                <Blogs 
                    img__src = {blogImg1}
                    profile__img = {profileImg}
                    title = "Make your team a Design driven company"
                    para = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                    name = "BY MIKE DAMON"
                />
                <Blogs 
                    img__src = {blogImg2}
                    profile__img = {profileImg}
                    title = "How to nurture a calm and organized work culture"
                    para = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                    name = "BY TIM NORTON"
                />
                <Blogs 
                    img__src = {blogImg1}
                    profile__img = {profileImg}
                    title = "How can the architecture influence our mood"
                    para = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33."
                    name = "BY JESSICA JONES"
                />
            </div>
        </div>
    </section>
  )
}

export default Blog

const Blogs = (props) => {
    return (
        <div className=' max-w-[362px]'>
            <img src={props.img__src} alt="" />
            <div>
                <h4 className=' font-spartan text-[25px] font-bold py-6 text-[#1E2E50]'>{props.title}</h4>
                <p className=' font-spartan font-medium text-[17px] mb-4 text-[#5A6C90]'>{props.para}</p>
                <div className=' flex justify-start items-center gap-2'>
                    <img src={props.profile__img} alt="" />
                    <span className=' text-[14px] font-semibold font-spartan'>{props.name}</span>
                </div>
            </div>
        </div>
    )
  };