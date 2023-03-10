import React from "react";
import Form from "../../components/Form/Form";
import Hero from "../../components/Hero/Hero";
import GoToTop from "../../components/GoToTop/GoToTop";

const ContactPage = () => {
  return (
    <main className="w-full">
      <Hero title={"Contact Us"} />
      <Form />
      <GoToTop />
    </main>
  );
};

export default ContactPage;
