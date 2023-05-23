import React from 'react';
import { useState, useEffect } from 'react';

import styles from '../styles';
import Card from './Card';
import { exploreTeam } from '../constants';
import Typed from 'react-typed';
const TeamDivision = () => {
  const [active, setActive] = useState('team-programming');
  useEffect(() => {
    setActive('team-programming');
  }, []);
  return (
    <section className={`${styles.paddings} relative`} id="TeamDivision">
      <div className="gradient-03 z-0" />

      <div className={`${styles.innerWidth} mx-auto flex flex-col z-10`}>
        <Typed
          strings={['| Team Divisions']}
          typeSpeed={130}
          backSpeed={80}
          loopCount={1}
          className="font-normal text-right text-lg md:text-xl text-secondary-white z-10"
        />
        <h2
          className={`wow fadeInUp text-right my-2 md:mt-4 font-bold md:text-5xl text-2xl text-white z-10`}
          data-wow-delay="0.8s"
        >
          Diverse Departments, United as One.
        </h2>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 z-10">
          {exploreTeam.map((team, index) => (
            <Card
              key={team.id}
              {...team}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TeamDivision;
