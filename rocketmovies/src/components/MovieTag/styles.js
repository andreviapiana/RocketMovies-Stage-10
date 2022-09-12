import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 5px 16px;
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
`;