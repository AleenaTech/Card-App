import React from 'react';
import { PageContainer } from './styles/PageStyle';
import ListCard from '../components/ListCard';

const Home = () => {
  return (
    <PageContainer className="home-container">
      <ListCard apiUrl="https://dummyjson.com/recipes" />
    </PageContainer>
  );
};

export default Home;
