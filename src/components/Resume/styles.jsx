import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 1120px;
    width: 98%;
    margin: 0 auto;
    gap: 20px;
    margin-top: -50px;
    justify-content: space-around;

    @media (max-width: 750px) {
        width: 20%;
    }

    p {
        font-size: 12px;
    }

    span {
        font-size: 20px;
    }

    svg {
        display: none;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;

    svg {
        width: 25px;
        height: 25px;
    }
`;