import React from "react";
import { PageContainer } from "./styles/PageStyle";
import ListCard from "../components/ListCard";

const Home: React.FC = () => {
    return (
        <PageContainer className="home-container">
            <ListCard apiUrl="https://dummyjson.com/recipes" />
        </PageContainer>
    );
};

export default Home;
