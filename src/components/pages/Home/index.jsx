import React from 'react';

import Logo from '../../atoms/Logo';
import Footer from '../../atoms/Footer';
import List from '../../molecules/List';

import {
  HomeContainer,
} from './style';

import data from './data.json';

function Home() {
  return (
    <HomeContainer>
      <Logo />
      {data.works.map((work) => (
        <List
          key={work.category}
          category={work.category}
          projects={work.projects}
        />
      ))}
      <Footer />
    </HomeContainer>
  );
}

export default Home;
