import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AdoptButton(){

        useEffect(() => {
          AOS.init();
        }, []);
      
    return(
       <div className="ml:[50%mt-10">
        <button
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          className="text-[cyan] w-[250px] border-white border-2 h-16 rounded-md text-[30px] font-bold"
        >
          <Link href="https://www.cats.org.uk/adopt-a-cat">Adopt a Cat</Link>
        </button>
      </div>
    
    )
}