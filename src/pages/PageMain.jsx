import React, { useEffect } from 'react';
import WOW from 'wow.js';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import OurRobots from '../components/OurRobots';
import TeamDivision from '../components/TeamDivisions';
import ContactUs from '../components/ContactUs';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

const PageMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const wow = new WOW({ live: false }); // disables sync requirement
    wow.init();
  }, []);
  return (
    <div className="bg-primary-black overflow-hidden overflow">
      <Navbar />
      <Hero />
      <About />
      <OurRobots />
      <TeamDivision />
      <ContactUs />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default PageMain;
