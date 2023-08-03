import React from 'react';
import styles from '../styles';
import { teamStructure } from '../constants';
import Typed from 'react-typed';
import { LazyLoadImage } from 'react-lazy-load-image-component';

let delay = 0.5;

const TeamStructure = () => {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const apiKey = import.meta.env.CLOUDINARY_API_KEY;
  //   const apiSecret = import.meta.env.CLOUDINARY_API_SECRET;
  //   const folderName = 'anggota';

  //   // this gets cors error. need to fix
  //   const results = fetch(
  //     `https://api.cloudinary.com/v1_1/dfagfrp5k/resources/image`,
  //     {
  //       headers: {
  //         Authorization: `Basic ${Buffer.from(
  //           apiKey + ':' + apiSecret
  //         ).toString('base64')}`,
  //       },
  //     }
  //   ).then((r) => r.json());
  //   console.log('results', results);
  // }, []);

  return (
    <section className={`${styles.paddings} mt-10 relative`}>
      <div className="gradient-04 z-0" />

      <div className={`${styles.innerWidth} mx-auto flex flex-col z-10`}>
        <Typed
          strings={['| Team Structure']}
          typeSpeed={130}
          backSpeed={80}
          loopCount={1}
          className="font-normal text-center text-lg md:text-xl text-secondary-white z-10"
        />
        <h2
          className={`wow fadeInUp text-center my-2 md:mt-4 font-bold md:text-5xl text-2xl text-white relative z-10`}
          data-wow-delay="0.8s"
        >
          Meet The Talented Minds Behind Us
        </h2>
        <div className="mt-[50px] justify-center flex flex-wrap min-h-[70vh] gap-2 md:gap-5 z-10 ">
          {teamStructure.map((person, index) => (
            <div
              className=" w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/6 h-48 md:h-[350px] bg-white rounded-lg overflow-hidden "
              key={index}
              data-wow-delay={(delay + index * 0.2).toString() + 's'}
            >
              <LazyLoadImage
                className="w-full h-3/4 object-cover"
                src={person.imgUrl}
                alt="foto member"
                width={400}
                height={300}
                placeholder={<div className="aspect-w-3 aspect-h-4" />} // Aspect ratio placeholder
                loading="lazy" // Enable native lazy loading
              />
              <div className="z-10 relative h-10 p-2 my-1">
                <h2 className="text-[7px] md:text-lg font-bold ">
                  {person.name}
                </h2>
                <p className="text-[6.8px] md:text-sm font-semibold">
                  {person.role}
                </p>
                <p className="text-[5.3px] md:text-[10px]">{person.major}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TeamStructure;
