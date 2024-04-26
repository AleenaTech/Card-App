import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ListItemLink = styled(Link)`
position: relative;
border: 1px solid #ccc;
padding: 10px;
text-align: center;
cursor: pointer;
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
`;


const ListItemTitle = styled.h5`
    padding: 10px 0 20px;
    font-size:16px;
    color: #ffffff;
    text-decoration: none;
`;

const PosterWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &:hover img {
    filter: brightness(80%);
 }
`;

const NoImage = styled.img`
  width: 100%;
  height: auto;
`;

const ListCardItem = ({ item }) => {
  return (
    <ListItemLink to={`/${item.id}`} className="list-item">
      <ListItemTitle>{item.name}</ListItemTitle>
      <PosterWrap>
        <img
          src={item.image || require("../assets/images/NoImage.png")}
          alt={item.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = require("../assets/images/NoImage.png");
          }}
        />
      </PosterWrap>
    </ListItemLink>
  );
};

export default ListCardItem;
