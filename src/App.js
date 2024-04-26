import React from 'react';
import styled from 'styled-components';
import ListCard from './components/ListCard';
import SideNav from './components/SideNav';

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #333;
  padding: 20px;
  color: white;
`;

const Main = styled.main`
  padding: 20px;
`;

const App = () => {
  return (
    <AppContainer>
      <Header>
        <h1>Card List Display</h1>
        <SideNav />
      </Header>
      <Main>
        <ListCard apiUrl="https://jsonplaceholder.typicode.com/posts" />

      </Main>
    </AppContainer>
  );
}

export default App;
