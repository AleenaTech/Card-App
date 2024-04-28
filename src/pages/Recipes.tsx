import React from "react";
import { PageContainer } from "./styles/PageStyle";
import ListCard from "../components/ListCard";

const Recipes: React.FC = () => {
    return (
        <PageContainer className="Recipes-container">
            <ListCard apiUrl="https://dummyjson.com/recipes" />
        </PageContainer>
    );
};

export default Recipes;
