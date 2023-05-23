import React from 'react';
import Typed from 'react-typed';
import styles from '../styles';
import gmail from '../assets/gmail.png';
import instagram from '../assets/instagram.png';
import whatsapp from '../assets/whatsapp.png';

const ContactUs = () => (
  <section className={`${styles.paddings} relative`} id="TeamStructure">
    <div className="gradient-04 z-0" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col z-10`}>
      <Typed
        strings={['| Contact Us']}
        typeSpeed={130}
        backSpeed={80}
        loopCount={1}
        className="font-normal text-center text-lg md:text-xl text-secondary-white z-10"
      />
      <h2
        className={`wow fadeInUp text-center my-2 md:mt-4 font-bold md:text-5xl text-2xl text-white z-10`}
        data-wow-delay="0.8s"
      >
        Reach Out to Us Here
      </h2>
      <div className="flex flex-wrap justify-between my-12 w-full md:w-1/2 mx-auto z-10">
        <a
          className="wow fadeInUp w-1/3 hover:scale-110 duration-200  "
          data-wow-delay="0.8s"
          target="_blank"
          rel="noreferrer"
          href="mailto:gladiatos.trui@gmail.com"
        >
          <img
            src={gmail}
            alt="GMAIL"
            quality="100"
            width={100}
            height={100}
            className="mx-auto w-1/3 md:w-2/3 h-auto object-cover"
          />
        </a>
        <a
          className="wow fadeInUp w-1/3 hover:scale-110 duration-200"
          data-wow-delay="0.8s"
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/+6281315379058?text=Hi%20Gladiatos%20UI!%20"
        >
          <img
            src={whatsapp}
            width={100}
            height={100}
            className="mx-auto w-1/3 md:w-2/3 h-auto object-cover"
          />
        </a>
        <a
          className="wow fadeInUp w-1/3 hover:scale-110 duration-200"
          data-wow-delay="0.8s"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/gladiatos.ui/"
        >
          <img
            src={instagram}
            width={100}
            height={100}
            className="mx-auto w-1/3 md:w-2/3 h-auto object-cover"
          />
        </a>
      </div>
    </div>
  </section>
);

export default ContactUs;
