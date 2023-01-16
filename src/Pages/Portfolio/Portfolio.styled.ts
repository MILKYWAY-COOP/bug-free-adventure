import styled from 'styled-components';

export const PortfolioStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  h1 {
    width: 100%;
    text-align: center;
    color: var(--secondaryColor);
    font-size: 1.5rem;
    font-family: var(--secondaryFont);
    font-weight: 400;
    margin: 0.4rem 0;
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
