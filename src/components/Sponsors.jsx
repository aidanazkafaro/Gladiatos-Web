import React from 'react';
import styles from '../styles';
import { sponsorsImage } from '../constants';
import Typed from 'react-typed';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Sponsors = () => (
  <section className={`${styles.paddings} relative`} id="Sponsors">
    <div className="gradient-03 z-0" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col z-10`}>
      <Typed
        strings={['| Sponsors']}
        typeSpeed={130}
        backSpeed={80}
        loopCount={1}
        className="font-normal text-center text-lg md:text-xl text-secondary-white z-10"
      />
      <h2
        className={`wow fadeInUp text-center my-2 md:mt-4 font-bold md:text-5xl text-2xl text-white z-10`}
        data-wow-delay="0.8s"
      >
        Supported By
      </h2>
      <div className=" md:mt-[50px] flex flex-wrap min-h-[50vh] gap-2 md:gap-5 z-10 justify-center">
        {sponsorsImage.map((sponsor, index) => (
          <LazyLoadImage
            key={index}
            alt={sponsor.name}
            src={sponsor.imgUrl}
            className="wow fadeInUp w-1/3 h-auto md:w-1/4 md:h-1/4 object-contain"
            data-wow-delay="0.8s"
            width={600}
            height={400}
          />
        ))}
      </div>
    </div>
  </section>
);
export default Sponsors;
