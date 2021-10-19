import React from "react";
import Banner from "../../Components/Banner/Banner";
import FAQ from "../../Components/FAQ/FAQ";
import Services from "../../Components/Services/Services";
import ShortInfo from "../../Components/ShortInfo/ShortInfo";
import Specialist from "../../Components/Specialist/Specialist";

const Home = () => {
  return (
    <>
      <Banner />
      <ShortInfo />
      <Services />
      <Specialist />
      <FAQ />
    </>
  );
};

export default Home;
