import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    grid-area: db;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p {
        font-size: 24px;
    }
`;

export const InputCopy = styled.input`
    width: 200px;
    height: 30px;
    padding: 5px;
    margin-left: 5px;

    color: #333;
    background: #f9f9f9;
    border: 1px solid #333;
`;

export const Copy = styled.button`
    width: 30px;
    height: 30px;

    background: #f9f9f9;
    border: 1px solid #333;
    border-left: none;
`;
