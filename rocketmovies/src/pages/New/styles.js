import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        height: auto;
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 40px;
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        align-items: flex-start;
    }

    .buttons {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }

    > main {
        grid-area: content;
        overflow: auto;
        overflow: overlay;
    }
`;

export const Form = styled.form`
    max-width: 100%;
    margin: 40px 123px auto;

    > header {
        display: block;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 36px;

        h1 {
            font-size: 36px;
            margin: 24px 0 40px;
        }
    }

    > .title {
        display: flex;
        gap: 40px;
        margin-bottom: 30px;
    }

    > .title select {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border-radius: 10px;
    border: none;

    height: 56px;
    width: 100%;

    padding: 12px;

    font-size: 16px;

    line-height: 26px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    font-family: 'Roboto Slab', serif;
    }
`;
