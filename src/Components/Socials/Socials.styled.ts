import styled from 'styled-components';

export const SocialsStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease-in-out;

  .ss {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    &:hover {
      background-color: var(--mainColorLighter);
    }

    svg {
      width: 1rem;
      height: 1rem;
      color: var(--secondaryColor);
      cursor: pointer;
    }
  }
`;
