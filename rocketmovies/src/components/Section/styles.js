import styled from "styled-components";

export const Container = styled.section`
    > h3 {
        padding-bottom: 24px;

        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
    }
`;