import styled from "styled-components";
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.BLUE};
    }

    > h2 {
        font-size: 24px;
        margin-top: 48px;
        margin-bottom: 48px;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > .button {
        margin-top: 42px;
        color: ${({ theme }) => theme.COLORS.BLUE};

        display: flex;
        justify-content: center;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;