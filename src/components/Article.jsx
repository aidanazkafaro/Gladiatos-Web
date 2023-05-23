import React from 'react';
import { BrowserRouter as Link, useParams } from 'react-router-dom';
import articlesData from '../assets/articles/articles.json';
import Navbar from './Navbar';
import Sponsors from './Sponsors';
import Footer from './Footer';
import styles from '../styles';
import fotoSanadhi from '../assets/sanadhi-sutandi.jpg';

const Article = () => {
  const { id } = useParams();
  const article = articlesData.find((article) => article.id === parseInt(id));

  const createMarkup = () => {
    return { __html: article.content };
  };
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <div className={`${styles.yPaddings} mt-10 relative z-20`}>
        <div
          className={`${styles.innerWidth} mx-auto flex flex-col sm:px-16 px-8`}
        >
          <div className="inline">
            <time
              className="text-md text-gray-300 text-justify w-1/4"
              dateTime={article.date}
            >
              {article.date}
            </time>
          </div>
          <h2 className="md:text-6xl text-3xl text-white font-bold  mt-4 mb-8 ">
            {article.title}
          </h2>
          <p className="text-md text-gray-300 text-justify">
            Author: {article.author}
          </p>
          <img
            className="mx-auto mt-4 mb-8 md:w-2/3"
            src={fotoSanadhi}
            alt="Author"
          />
          <p
            className="mx-auto text-white md:w-2/3 "
            dangerouslySetInnerHTML={createMarkup()}
          ></p>
          {/* <div className="mx-auto my-10">
        <Link to="/articles">Back to Articles Page</Link>
      </div> */}
        </div>
        <Sponsors />
        <Footer />
      </div>
    </div>
  );
};

export default Article;
