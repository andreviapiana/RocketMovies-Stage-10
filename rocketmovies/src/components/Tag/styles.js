import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
`;