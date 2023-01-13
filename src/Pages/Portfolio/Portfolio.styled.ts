import styled from 'styled-components';

export const PortfolioStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--secondaryColor);
    font-size: 1.5rem;
    font-family: var(--secondaryFont);
    margin: 1rem 0;
  }

  .picsGrid {
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fit, 1fr);

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(auto-fit, 1fr);
    }

    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(auto-fit, 1fr);
    }
  }
`;
