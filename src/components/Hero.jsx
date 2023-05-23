import React from 'react';
import { Link } from 'react-scroll';
// import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import logoPlain from '../assets/gladiatos-logo-hero-no-text.png';
import Typed from 'react-typed';
// import {
//   staggerContainer,
//   textVariant,
//   fadeIn,
// } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.paddings} mt-14`} id="hero">
    <div className="absolute left- w-[10%] h-[20%] inset-0 gradient-01 z-10" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div
        className={` flex flex-wrap w-full justify-center items-center relative z-10`}
      >
        <div className="w-1/2 md:w-1/2">
          <Typed
            strings={['| Welcome to']}
            typeSpeed={130}
            backSpeed={80}
            loopCount={1}
            className="font-normal text-lg md:ml-2  md:text-xl text-secondary-white ${textStyles} z-10"
          />

          <div className={styles.heroHeading}>
            <h1
              className=" wow fadeInUp md:text-4xl lg:text-7xl md:mt-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400 md:ml-2"
              data-wow-delay="1s"
            >
              GLADIATOS UI
            </h1>
          </div>
          <h5 className={styles.heroText} data-wow-delay="1.2s">
            <Link
              to="about"
              spy
              smooth
              className="text-[8px] md:text-sm w-full md:w-auto h-6 md:h-10 border-2 rounded-xl p-2 cursor-pointer hover:bg-slate-500"
            >
              Get to know Us!
            </Link>
          </h5>
        </div>
        <div
          className="wow fadeInRight w-1/2 md:w-1/2 "
          data-wow-delay="1s"
          data-wow-duration="2s"
        >
          <img
            className="w-auto h-auto md:w-[400px] md::h-[400px] float-right"
            src={logoPlain}
            alt="gladiatos logo hero"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
