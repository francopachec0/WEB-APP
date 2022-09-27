import React, { useState } from "react";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/data";
import { Landing } from "../components/Landing";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import UbicationSection from "../components/Ubication";

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
      <UbicationSection {...homeObjThree} />
      <ContactSection {...homeObjFour}/>
      <Footer />
    </>
  );
};

export default Home;
