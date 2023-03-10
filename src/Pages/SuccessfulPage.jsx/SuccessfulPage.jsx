import React from "react";
import SuccessfulPageHero from "../../components/SuccessfulPageHero/SuccessfulPageHero";
import GoToTop from "../../components/GoToTop/GoToTop";
const SuccessfulPage = () => {
  return (
    <main className="w-full h-screen bg-[#FFF7F3]">
      <section className="flex justify-center items-center max-w-[1140px] w-full h-screen m-auto bg-[#FFF7F3]">
        <SuccessfulPageHero />
        <GoToTop />
      </section>
    </main>
  );
};

export default SuccessfulPage;
