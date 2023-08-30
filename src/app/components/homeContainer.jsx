const { default: Image } = require("next/image");
import { imageData } from "./data/testimonialData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeContainer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="md:mx-[30%] md:w-[40%] w-[90vw] mt-10">
      <h1 className="text-[24px] text-[cyan] font-medium mb-10 pl-2">
        From hypoallergenic cat breeds and DIY cat bed plans to cat food reviews
        and recommendations that will keep your kitty satisfied, we cover all
        things feline!
      </h1>
      <div className="grid lg:grid-cols-3 pl-2 pr-2 grid-cols-2 lg:gap-x-1 gap-x-12 gap-y-2">
        {imageData.map((images) => (
          <div
            className="relative grid lg:w-[230px] w-[180px] h-[200px]"
            key={images.id}
          >
            <Image src={images.image} fill alt={images.title} />
          </div>
        ))}
      </div>

    </div>
  );
};
export default HomeContainer;
