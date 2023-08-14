// TestimonialSlider.js
import React, { useState, useEffect } from 'react';
import { messages } from "./data/testimonialData";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

c
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
    const updateImageIndex = () => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % testimonies.length
      );
    };

    // Call the updateImageIndex function every five seconds
    const interval = setInterval(updateImageIndex, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [testimonies.length]);

  return (
    <div className='md:ml-[30%] mx-[10%] bg-white-400 mt-10'>
      <div className='space-y-[10px] verflow-x-scroll'>
        {testimonies.map((items, index) =>
          index === currentImageIndex ? (
            <div
              key={items.id}
              className="grid p-[10px] bg-[cyan] md:w-[70%] lg:w-[70%] sm:w-[100%] border-2 border-black rounded-lg text-[#28205E]"
              data-aos-duration="2000"
              data-aos="fade-down-left"
            >
              <p>{items.message}</p>
              <p className='italic text-sm'>{items.name}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TestimonialSlider;


