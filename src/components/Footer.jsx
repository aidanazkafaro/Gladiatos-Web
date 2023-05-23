import React from 'react';
import styles from '../styles';

const Footer = () => (
  <footer
    className={`${styles.xPaddings} py-8 relative wow fadeInUp`}
    data-wow-delay="0.5s"
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col text-center">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <p className="font-normal text-[14px] text-white opacity-50">
          Copyright © 2022 - 2023 Gladiatos UI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
