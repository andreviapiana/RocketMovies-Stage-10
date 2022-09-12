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

    > .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 37.45px;
    }

    h1 {
        font-weight: 400;
    }

    > .header button {
        width: 207px;
        height: 48px;
    }
`;
