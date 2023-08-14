"use client"
import TestimonialSlider from "../../src/app/components/testimonialSlider"
import Navbar from "../../src/app/components/navbar"
import HomeContainer from "../../src/app/components/homeContainer"
import AdoptButton  from "../../src/app/components/adobtButton"

export default function Home() {

  return (
    <main>
      <Navbar/>
      <HomeContainer/>
      <TestimonialSlider/>
      <AdoptButton/>
    </main>
  )
}
