import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { PageContainer } from "../pages/styles/PageStyle";
import { BsStarFill, BsClock, BsPeople, BsCardHeading } from "react-icons/bs";
import { PiCookingPot, PiChartDonutLight } from "react-icons/pi";

interface Recipe {
    name: string;
    image: string;
    rating?: number;
    reviewCount?: number;
    difficulty?: string;
    cuisine?: string;
    servings?: number;
    prepTimeMinutes?: number;
    cookTimeMinutes?: number;
    caloriesPerServing?: number;
    ingredients?: string[];
    instructions?: string[];
}

const ListItemDetailsContainer = styled.div`
    padding: 20px 20px 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 50px;
    position: relative;
    width: 100%;
    @media (min-width: 768px) {
        margin-top: 200px;
    }
    h4 {
        font-size: 20px;
        padding: 10px 0 15px;
    }
`;

const RecipeImage = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 8px;
    margin-bottom: 20px;
    position: unset;
    overflow: hidden;

    @media (min-width: 768px) {
        border-radius: 50%;
        box-shadow: -10px 6px 11px rgb(0 0 0 / 71%);
        width: 300px;
        position: absolute;
        right: 22px;
        top: -155px;
    }
    img {
        border-radius: 8px;
        width: 100%;
        width: 100%;
        object-fit: cover;

        @media (min-width: 768px) {
            border-radius: 50%;
        }
    }
`;

const RecipeTitle = styled.h5`
    margin-bottom: 10px;
    font-size: 28px;
`;

const RecipeInfo = styled.div`
    display: grid;
    margin-bottom: 20px;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

const InfoMainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: self-start;
`;

const InfoSubContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: self-start;
    margin-top: 10px;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
`;

const ReviewWrap = styled.div`
    flex-grow: 1;
`;

const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const StarIcon = styled(BsStarFill)`
    color: #fadb14;
    font-size: 16px;
`;

const RatingText = styled.span`
    margin-left: 5px;
    font-size: 16px;
`;

const RecipeType = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    flex-direction: column;
`;

const RecipeTypeContent = styled.div`
    font-size: 16px;
`;

const InfoCard = styled.div`
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    p {
        font-size: 14px;
        font-weight: bold;
    }
`;

const InfoIcon = styled.div`
    font-size: 24px;
    margin-bottom: 5px;
`;

const IngredientsList = styled.ul`
    list-style-type: circle;
    list-style-position: inside;
    padding: 0;
    li {
        font-size: 15px;
        padding-bottom: 8px;
    }
`;

const InstructionList = styled.ol`
    list-style-position: inside;
    padding: 0;
    li {
        font-size: 15px;
        padding-bottom: 8px;
    }
`;

const ListItemDetails: React.FC = () => {
    const location = useLocation();
    const recipe: Recipe | undefined = location.state && location.state.recipe;

    if (!recipe) return <div>Recipe not found</div>;

    return (
        <ListItemDetailsContainer>
            <InfoMainContent>
                <RecipeImage>
                    <img src={recipe.image || ""} alt={recipe.name} />
                </RecipeImage>
                <RecipeTitle>{recipe.name}</RecipeTitle>
            </InfoMainContent>
            <InfoSubContent>
                <ReviewWrap>
                    <RatingContainer>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <RatingText>
                            ({recipe.reviewCount || 0} reviews)
                        </RatingText>
                    </RatingContainer>
                </ReviewWrap>
                <RecipeType>
                    <RecipeTypeContent>
                        <p>Difficulty: {recipe.difficulty || "N/A"}</p>
                    </RecipeTypeContent>
                    <RecipeTypeContent>
                        <p>Cuisine: {recipe.cuisine || "N/A"}</p>
                    </RecipeTypeContent>
                </RecipeType>
            </InfoSubContent>
            <RecipeInfo>
                <InfoCard>
                    <InfoIcon>
                        <BsPeople />
                    </InfoIcon>
                    <p>Servings</p> <p>{recipe.servings || "N/A"}</p>
                </InfoCard>
                <InfoCard>
                    <InfoIcon>
                        <BsClock />
                    </InfoIcon>
                    <p>Prep Time</p>{" "}
                    <p>
                        {recipe.prepTimeMinutes
                            ? recipe.prepTimeMinutes + " minutes"
                            : "N/A"}
                    </p>
                </InfoCard>
                <InfoCard>
                    <InfoIcon>
                        <PiCookingPot />
                    </InfoIcon>
                    <p>Cook Time</p>{" "}
                    <p>
                        {recipe.cookTimeMinutes
                            ? recipe.cookTimeMinutes + " minutes"
                            : "N/A"}
                    </p>
                </InfoCard>
                <InfoCard>
                    <InfoIcon>
                        <PiChartDonutLight />
                    </InfoIcon>
                    <p>Calories</p>{" "}
                    <p>{recipe.caloriesPerServing + " kcal" || "N/A"}</p>
                </InfoCard>
            </RecipeInfo>
            <h4>Ingredients</h4>
            <IngredientsList>
                {recipe.ingredients &&
                    recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
            </IngredientsList>
            <h4>Instructions</h4>
            <InstructionList>
                {recipe.instructions &&
                    recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
            </InstructionList>
        </ListItemDetailsContainer>
    );
};

export default ListItemDetails;
