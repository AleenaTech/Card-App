import React from "react";

interface Props {
    mealType: string;
    active: boolean;
    onClick: () => void;
}

const FilterButton: React.FC<Props> = ({ mealType, active, onClick }) => {
    return (
        <button
            className={`filter-button ${active ? "active" : ""}`}
            onClick={onClick}
        >
            {mealType}
        </button>
    );
};

export default FilterButton;
