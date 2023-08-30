// TestimonialSlider.js
import React, { useState, useEffect } from "react";
import { messages } from "./data/testimonialData";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

const TestimonialSlider = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to fetch testimonials from the API
    const fetchTestimonies = () => {
      try {
        const data = messages;
        setTestimonies(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTestimonies();
  }, []);

  useEffect(() => {
    // Function to update the current image index
    AOS.init();

    const updateImageIndex = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
    };

    // Call the updateImageIndex function every five seconds
    const interval = setInterval(updateImageIndex, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [testimonies.length]);

  return (
    <div className="md:ml-[30%] sm:mx-[2%] md:mx-[10%] bg-white-400 mt-10">
      <div className="space-y-[10px] verflow-x-scroll">
        {testimonies.map((items, index) =>
          index === currentImageIndex ? (
            <div
              key={items.id}
              className="grid p-[20px] bg-[cyan] md:w-[75%] lg:w-[66%] sm:w-[100%] border-2 border-[#28205E] rounded-lg text-[#28205E]"
              data-aos-duration="3000"
              data-aos="zoom-in-down"
            >
              <div className="relative flex flex-row">
              <Image className="w-[70px] h-[70px] rounded-[50%] " src={items.pic} width={1000} height={1000}/>
              <p className="italic text-sm">{items.name}</p>
              </div> 
              <p>{items.message}</p>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};

export default TestimonialSlider;
