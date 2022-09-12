import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 222px;
  padding: 30px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  flex-direction: column;
  align-items: start;
  
  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
  }
  
  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    height: 45px;
    overflow: auto;
    overflow: overlay;
    text-align: justify;
    margin: 10px 0 0;
  }

  > div {
    margin-top: 10px;
  }

  > div:last-child {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    gap: 8px;
    margin-top: 15px;
  }
`