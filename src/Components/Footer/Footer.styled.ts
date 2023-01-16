import styled from 'styled-components';

export const FooterStyled = styled.footer`
  width: 100%;
  height: fit-content;
  padding: 3rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--secondaryColor);

  .icons {
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;

    .ss {
      &:hover {
        background-color: transparent;
      }
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        fill: var(--darkerSecondaryColor);
        scale: 1.2;
      }
    }
  }

  p {
    font-size: 1rem;
    font-family: var(--secondaryFont);
    font-weight: 400;
    color: var(--secondaryColor);
    margin: 1rem 0;
  }
`;
