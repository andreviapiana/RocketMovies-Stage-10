import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow: auto;
        overflow: overlay;
        padding: 40px 0;
    }
`;

export const Content = styled.div`
    max-width: 100%;
    margin: 0 123px auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: start;
    }

    > div {
        font-size: 20px;
        line-height: 47.5px;
        font-weight: 500;

        display: flex;
        align-items: center;
        gap: 10px;

        h2 {
            font-size: 36px;
            margin-right: 9px;
            padding: 24px 0 24px;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.BLUE};
            margin-left: 10px;
        }

        svg:nth-child(1) {
            color: ${({ theme }) => theme.COLORS.BLUE};
            margin: 0 10px -5px 0;
            size: 45px;
            font-size: 50px;
        }

        img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid #0099ff;
        }

        span {
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
        }
    }

    > .tags span {
        font-size: 12px;
    }

    > p {
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        text-align: justify;
        margin-top: 40px;
    }

    > div:nth-child(odd) {
        margin-bottom: 40px;
    }

    > .buttons button:first-child {
        margin-top: 40px;
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.BLUE};
        border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
    }
`;