import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

interface Item {
    id: number;
    name: string;
    image: string;
}

const ListItemLink = styled.div`
    position: relative;
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 8px;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
`;

const ListItemTitle = styled.h5`
    padding: 10px 0 20px;
    color: #ffffff;
    text-transform: capitalize;
    font-size: 18px;
    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

const PosterWrap = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 5px;

    img {
        width: 100%;
        height: auto;
        object-fit: fill;
        border-radius: 8px;
    }

    &:hover img {
        filter: brightness(80%);
    }
`;

interface ListCardItemProps {
    item: Item;
}

const ListCardItem: React.FC<ListCardItemProps> = ({ item }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("jjjjj", item);
        navigate(`/recipes/${item.id}`, { state: { recipe: item } });
    };

    return (
        <ListItemLink className="list-item" onClick={handleClick}>
            <PosterWrap>
                <img
                    src={item.image || require("../assets/images/NoImage.png")}
                    alt={item.name}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.src = require("../assets/images/NoImage.png");
                    }}
                />
            </PosterWrap>
            <ListItemTitle>{item.name}</ListItemTitle>
        </ListItemLink>
    );
};

export default ListCardItem;
