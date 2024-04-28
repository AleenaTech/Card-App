import React from "react";
import { PageContainer } from "./styles/PageStyle";
import ListItemDetails from "../components/ListItemDetails";

const RecipeDetails: React.FC = () => {
    return (
        <PageContainer className="recipe-detail-container">
            <ListItemDetails />
        </PageContainer>
    );
};

export default RecipeDetails;
