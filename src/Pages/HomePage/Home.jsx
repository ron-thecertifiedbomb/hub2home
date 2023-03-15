import React from 'react'
import Hero from "../../components/Hero/Hero";
import GoToTop from "../../components/GoToTop/GoToTop";

const Home = () => {
  return (
    <main className="w-full">
    <Hero title={"Home"} />
    <GoToTop />
  </main>
  )
}

export default Home