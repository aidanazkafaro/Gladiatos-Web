import React from 'react';
import Typed from 'react-typed';
import { robots } from '../constants';
import styles from '../styles';

let delay = 0.8;

const OurRobots = () => (
  <section className={`${styles.paddings} relative`} id="OurRobots">
    <div className="gradient-05 z-0" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col z-10`}>
      <Typed
        strings={['| Our Robots']}
        typeSpeed={130}
        backSpeed={80}
        loopCount={1}
        className="font-normal text-lg md:text-xl text-secondary-white z-10 text-right"
      />
      <h2
        className={`wow fadeInUp text-right my-2 md:mt-4 font-bold md:text-5xl text-2xl text-white  z-10`}
        data-wow-delay="0.8s"
      >
        Robots At Your Service
      </h2>{' '}
      <div className="mt-4 md:mt-[50px] justify-center flex items-center flex-wrap h-auto gap-5 z-10">
        {robots.map((robot, index) => (
          <div
            className="wow fadeInLeft w-1/3 md:w-1/4 h-52 md:h-[400px] lg:h-[500px] bg-white rounded-lg overflow-hidden"
            key={index}
            data-wow-delay={(delay + index * 0.1).toString() + 's'}
          >
            <img
              className="w-full h-5/6 object-cover"
              src={robot.imgUrl}
              alt="foto"
              quality="100"
            />
            <div className="z-10 relative h-1/6 p-2 my-1 justify-center items-center ">
              <h2 className="text-[8px] md:text-lg font-bold text-center">
                {robot.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default OurRobots;
