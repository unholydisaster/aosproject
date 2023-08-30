"use client"
import TestimonialSlider from "../../src/app/components/testimonialSlider"
import Navbar from "../../src/app/components/navbar"
import HomeContainer from "../../src/app/components/homeContainer"
import Content from "../../src/app/components/content"
export default function Home() {

  return (
    <main>
      <Navbar/>
      <HomeContainer/>
      <TestimonialSlider/>
      <Content/> 
    </main>
  )
}

// "use client"
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const MyAnimation = () => {
    
//   useEffect(() => {
//     AOS.init();
//   }, []);
    
//     return(
//       <div className="grid justify-items-center text-black relative top-[900px] space-y-10">
//         <div className="h-[200px] w-[50%] border-2 border-black" data-aos="fade-up">
//         "I am the best fade-up animation"
//         </div>
//         <div className="h-[200px]  w-[50%] border-2 border-black" data-aos="fade-up">
//         "I am the best fade-up animation"
//         </div>
//         <div className="h-[200px]  w-[50%] border-2 border-black" data-aos="zoom-out-left">
//         "I am the best fade-up animation"
//         </div>
//         <div className="h-[200px]  w-[50%] border-2 border-black" data-aos="fade-left">
//         "I am the best fade-up animation"
//         </div>
//       </div>
//   );
// };

// export default MyAnimation