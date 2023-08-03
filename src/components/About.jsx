import React, { useState, useEffect } from 'react';
import styles from '../styles';
import fotoTim from '../assets/foto-tim-min.png';
import Typed from 'react-typed';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Import the Cloudinary classes.
import { fill } from '@cloudinary/url-gen/actions/resize';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

const About = () => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    setToggle(true);
  }, []);
  const textWhoWeAre =
    'We are a college robotic team from Universitas Indonesia competing in the annual Humanoid Football Robot contest in Indonesia. ';
  const textWhatWeDo =
    'We perform end-to-end development of the robots that is divided into the following categories: Programming, Electrical, Mechanics, Managerial.';
  const myImage = new CloudinaryImage('foto-tim2', {
    cloudName: 'dfagfrp5k',
  });

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <div className={`${styles.innerWidth} mx-auto flex-col `}>
        <Typed
          strings={['| About Gladiatos UI']}
          typeSpeed={130}
          backSpeed={80}
          loopCount={1}
          className="font-normal text-lg md:text-xl text-secondary-white z-10"
        />
        <h2
          className={` wow fadeInUp text-left my-2 md:mt-4 font-bold md:text-5xl text-2xl text-white  z-10`}
          data-wow-delay="0.8s"
        >
          Brief Introduction About Us
        </h2>

        {/* <div className='absolute w-full h-[200px] hero-gradient rounded-top-[140px] z-[-99] -top-[25px]' /> */}
        <div className=" flex justify-center items-center h-auto flex-wrap gap-10 relative z-10 mt-6 md:mt-12">
          {/* team image */}
          <div className="wow fadeInUp w-full md:w-1/2 " data-wow-delay="1s">
            {/* <LazyLoadImage
              className="w-auto h-auto lg:float-left z-10 shadow-lg rounded-lg"
              src={fotoTim}
              width={600}
              height={400}
              alt="foto tim"
            /> */}
            <AdvancedImage
              cldImg={myImage}
              className="w-auto h-auto lg:float-left z-10 shadow-lg rounded-lg"
            />
          </div>
          <div className="w-full md:w-full lg:w-1/3  lg:float-right lg:ml-20">
            <div
              className="wow fadeInRight w-full h-auto z-10"
              data-wow-delay="0.8s"
            >
              <div className="flex flex-row w-full gap-4 md:gap-2 mb-10 justify-center">
                <p
                  className={`${
                    toggle
                      ? 'underline text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400'
                      : 'text-secondary-white'
                  } text-2xl  md:text-3xl lg:text-4xl cursor-pointer z-10`}
                  onClick={() => {
                    setToggle(true);
                  }}
                >
                  Who We Are
                </p>
                <p
                  className={`${
                    !toggle
                      ? 'underline  text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600'
                      : 'text-secondary-white'
                  } text-2xl md:text-3xl lg:text-4xl  cursor-pointer z-10`}
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  What We Do
                </p>
              </div>
              <div className="w-full">
                <p className="text-[#8ba5b3] text-md lg:text-xl relative z-10">
                  {toggle ? textWhoWeAre : textWhatWeDo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
