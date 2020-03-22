import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    margin-top: auto;

    background: tomato;
    color: #f5f5f5;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    p {
        color: #f5f5f5;
    }

    p strong {
        color: #f5f5f5;
    }

    ul {
        display: flex;
        flex-direction: column;

        color: #f5f5f5;

        li {
            color: #f5f5f5;
        }

        li a {
            text-decoration: none;

            color: #f5f5f5;
        }

        li a:hover {
            text-decoration: underline;
        }
    }
`;
