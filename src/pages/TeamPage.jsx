import React, { useEffect } from 'react';
import WOW from 'wow.js';
import Navbar from '../components/Navbar';
import TeamStructure from '../components/TeamStructure';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const wow = new WOW({ live: false }); // disables sync requirement
    wow.init();
  }, []);
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <TeamStructure />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default TeamPage;
