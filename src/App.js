import { Fragment } from 'react';
import './App.css';
import ArticleList from './components/ArticleList/ArticleList';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <Fragment>
      <Nav />
      <Header />
      <div className='page-container'>
        <ArticleList />
        </div>
    </Fragment>
  );
};

export default App;
