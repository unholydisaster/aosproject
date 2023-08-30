import React from "react";
import { festivalsData } from "./data/testimonialData";

const Content=()=>{

    return (
        <div className="flex flex-col justify-center md:mx-[30%] md:w-[40%] w-[90vw] mt-10 mx-4">
            <div className="flex">
            <h1 className="text-[24px] text-cyan-500 font-bold">Cat Conventions & Festivals</h1>
            </div>
            <div className="flex flex-col text-[18px] text-black-500 font-md">
                {
                    festivalsData.map((data)=>{
                        return(
                            <ol key={data.id}>
                                <li>{data.name}</li>
                            </ol>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Content