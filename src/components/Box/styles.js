import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    height: 500px;

    display: grid;
    grid-template-areas:
        "bl bor br"
        "bl bor br"
        "db db db";
    grid-template-columns: 1fr 400px 1fr;
    grid-template-rows: 1fr 1fr 80px;
`;

export const Input = styled.input`
    width: 35px;
    height: 20px;
    padding: 5px;

    border: 1px solid #333;
`;

export const BoxLeft = styled.div`
    grid-area: bl;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;
export const BoxRight = styled.div`
    grid-area: br;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const TopLeft = styled(Input)``;
export const TopRight = styled(Input)``;
export const BottomLeft = styled(Input)``;
export const BottomRight = styled(Input)``;
