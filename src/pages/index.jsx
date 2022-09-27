import React, { useState } from "react";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/data";
import { Landing } from "../components/Landing";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Landing />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <InfoSection {...homeObjFour}/>
      <Footer />
    </>
  );
};

export default Home;
