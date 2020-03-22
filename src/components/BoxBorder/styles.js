import styled from "styled-components";

export const Container = styled.div`
    grid-area: bor;
`;
export const BorderRadius = styled.div`
    width: 300px;
    height: 300px;
    margin: 70px auto;

    background: tomato;
    border: 1px solid #333;
    box-shadow: 20px 30px 10px rgba(0, 0, 0, 0.4);
`;

export const BoxSpan = styled.div`
    width: 200px;
    height: 100px;
    margin: -300px auto;

    border-radius: 30px;
    box-shadow: 2px 2px 10px rgba(3, 3, 3, 0.5);
    background: rgba(3, 3, 3, 0.5);

    display: none;
    justify-content: center;
    align-items: center;

    p {
        color: #f5f5f5;
    }
`;
