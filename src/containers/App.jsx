import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import useInitalState from '../hooks/useInitalState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3001/initalState';

const App = () => {
  const initalState = useInitalState(API);
  return initalState.length === 0 ? <h1>Loading...</h1> : (
    <Layout>
      <Header />
      <Search />
      {initalState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initalState.mylist.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {initalState.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platfix">
        <Carousel>
          {initalState.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Footer />
    </Layout>
  );
}

export default App;























/*import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouseItem";
import useInitialState from "../hooks/useInitialState";

import "../assets/styles/app.scss";

const API = "http://localhost:3000/initialState";

const App = () => {
  const videos = useInitialState(API);

  const renderList = (list = []) => {
    return (
      <>
        {list.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </>
    );
  };

  return (
    <div>
      <Header />
      <Search />
      {videos.myList && videos.myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>{renderList(videos.myList)}</Carousel>
        </Categories>
      )}
      {videos.trends && videos.trends.length > 0 && (
        <Categories title="Tendencias">
          <Carousel>{renderList(videos.trends)}</Carousel>
        </Categories>
      )}
      {videos.originals && videos.originals.length > 0 && (
        <Categories title="Originales ">
          <Carousel>{renderList(videos.originals)}</Carousel>
        </Categories>
      )}
      <Footer />
    </div>
  );
};

export default App;




















