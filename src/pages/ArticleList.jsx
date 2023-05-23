import React from 'react';
import articlesData from '../assets/articles/articles.json';
import Navbar from '../components/Navbar';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import styles from '../styles';
import ArticlePreview from '../components/ArticlePreview';
import Typed from 'react-typed';

const ArticleList = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <div
        className={`${styles.paddings} ${styles.innerWidth} mt-10 relative z-10 mx-auto`}
      >
        <Typed
          strings={['| Our Articles']}
          typeSpeed={130}
          backSpeed={80}
          loopCount={1}
          className="font-normal text-lg md:text-xl text-secondary-white z-10"
        />
        <h2
          className={` wow fadeInUp text-left my-2 md:mt-4 font-bold md:text-5xl text-2xl text-white  z-10`}
          data-wow-delay="0.8s"
        >
          Some of Our Stories
        </h2>
        <div className={`${styles.yPaddings} ${styles.xPaddings}`}>
          {articlesData.map((article) => (
            <ArticlePreview key={article.id} article={article} />
          ))}
        </div>
        <Sponsors />
        <Footer />
      </div>
    </div>
  );
};

export default ArticleList;
