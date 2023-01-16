import styled from 'styled-components';

export const WallpapersStyled = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 3rem;

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
