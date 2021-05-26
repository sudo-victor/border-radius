import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    margin-top: auto;

    background: #191622;
    color: #E1E1E6;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    p {
        color: #E1E1E6;
    }

    p strong {
        color: #E1E1E6;
    }

    ul {
        display: flex;
        flex-direction: column;

        color: #E1E1E6;

        li {
            color: #E1E1E6;
        }

        li a {
            text-decoration: none;

            color: #E1E1E6;
        }

        li a:hover {
            text-decoration: underline;
        }
    }
`;
