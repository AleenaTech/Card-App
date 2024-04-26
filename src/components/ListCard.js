import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetchData from '../functions/api_get';
import ListCardItem from './ListCardItem';

const ListContainer = styled.div`
  margin: 20px auto;
  width: 100%;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .item-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr); /* Three items per row in web view */
    }
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-style: italic;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const ListCard = ({ apiUrl }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const responseData = await fetchData(apiUrl);
        setData(responseData?.recipes);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchDataFromAPI();
  }, [apiUrl]);

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <ListContainer>
      <h2>Recipes</h2>
      <div className="item-grid">
        {data.map(item => (
          <ListCardItem key={item.id} item={item} />
        ))}
      </div>
    </ListContainer>
  );
};

export default ListCard;
