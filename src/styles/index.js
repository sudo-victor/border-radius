import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
        color: #333;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background: #f9f9f9;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    margin: 30px;
`;
