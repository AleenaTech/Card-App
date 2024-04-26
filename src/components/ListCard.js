import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetchData from '../functions/api_get';

const ListContainer = styled.div`
  margin: 20px auto;
  max-width: 600px;
`;

const ListItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
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
        setData(responseData);
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
      <h2>List Display</h2>
      <ul>
        {data.map(item => (
          <ListItem key={item.id}>{item.title}</ListItem>
        ))}
      </ul>
    </ListContainer>
  );
};

export default ListCard;
