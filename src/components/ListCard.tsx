import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fetchData from "../functions/api_get";
import ListCardItem from "./ListCardItem";

interface Item {
    id: number;
    name: string;
    image: string;
}

interface ListItem extends Item {}

interface Props {
    apiUrl: string;
}

const ListContainer = styled.div`
    margin: 20px auto;
    width: 100%;

    h2 {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 50px;
    }

    .item-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;

        @media (min-width: 576px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 992px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media (min-width: 1200px) {
            grid-template-columns: repeat(5, 1fr);
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

const ListCard: React.FC<Props> = ({ apiUrl }) => {
    const [data, setData] = useState<ListItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchDataFromAPI() {
            try {
                const responseData = await fetchData(apiUrl);
                setData(responseData?.recipes || []);
            } catch (error) {
                setError("Error fetching data. Please try again later.");
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
                {data.map((item) => (
                    <ListCardItem key={item.id} item={item} />
                ))}
            </div>
        </ListContainer>
    );
};

export default ListCard;
