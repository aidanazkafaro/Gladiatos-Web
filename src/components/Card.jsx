import { useState, useEffect } from 'react';
import styles from '../styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
let delay = 1;
const Card = ({
  id,
  imgUrl,
  logoUrl,
  title,
  desc,
  index,
  active,
  handleClick,
}) => {
  const [hide, setHide] = useState(true);
  useEffect(() => {
    setHide(true);
  }, []);

  return (
    <div
      className={`wow fadeInRight relative overflow-hidden ${
        active === id
          ? 'lg:flex-[3.5] flex-[20] md:flex-[30]'
          : 'lg:flex-[0.5] flex-[4] md:flex-[6]'
      } flex items-center justify-center min-w-[170px] h-[750px] md:h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      data-wow-delay={(delay + id * 2).toString() + 's'}
      onClick={() => {
        handleClick(id);
      }}
    >
      <LazyLoadImage
        src={imgUrl}
        alt="A division"
        className="absolute w-full h-full object-cover rounded-xl"
      />
      {active !== id ? (
        <h3 className="font-semibold lg:text-[26px] md:text-[20px] text-[18px] text-white absolute z-0 lg:bottom-28 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div
          className={` ${
            hide ? '' : 'rounded-xl'
          } absolute  bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-lg`}
        >
          <div
            className={`${styles.flexCenter} w-[40px] h-[40px] rounded-xl glassmorphism mb-[16px]`}
          >
            <img
              src={logoUrl}
              alt="title"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <h2 className="mt-lg font-semibold sm:text-[32px] text-lg text-white cursor-text">
            {title}
          </h2>
          <p
            href="#"
            className=" my-4 font-normal text-xs md:text-md leading-[22px] text-white uppercase"
            onClick={() => {
              setHide(!hide);
            }}
          >
            {hide ? 'See More' : 'See Less'}
          </p>
          <p
            className={`${
              hide ? 'hidden' : ''
            } mt-2 text-white text-xs md:text-lg cursor-text`}
          >
            {desc}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
