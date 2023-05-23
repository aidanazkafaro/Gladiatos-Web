import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PageMain from './pages/PageMain';
import ArticleList from './pages/ArticleList';
import Article from './components/Article';
import TeamPage from './pages/TeamPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PageMain />} />
        <Route exact path="/articles" element={<ArticleList />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
