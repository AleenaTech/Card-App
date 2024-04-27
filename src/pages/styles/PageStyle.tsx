import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    background-color: #000;
    color: #fff;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 20px 50px;

    h1 {
        text-align: center;
        font-size: 45px;
        @media (min-width: 768px) {
            font-size: 35px;
        }
    }
`;
