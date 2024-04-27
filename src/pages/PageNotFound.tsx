import React from "react";
import { PageContainer } from "./styles/PageStyle";

const PageNotFound: React.FC = () => {
    return (
        <PageContainer className="page-not-found-container">
            <h2>404</h2>
            <p>Page Not Found</p>
        </PageContainer>
    );
};

export default PageNotFound;
