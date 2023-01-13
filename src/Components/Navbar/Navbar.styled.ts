import styled from 'styled-components';

import { imgs } from '../../Elements';
const { logo } = imgs;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--mainColor);

  .links {
    display: flex;
    gap: 1rem;

    > * {
      font-family: var(--secondaryFont);
      color: var(--secondaryColor);
      font-size: 1rem;
      text-decoration: none;
      text-transform: uppercase;

      &:hover {
        text-decoration: line-through;
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    padding-top: 0.5rem;

    .img {
      width: 100%;
      height: 100%;
      background-image: url(${logo});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      cursor: pointer;
      z-index: 100;
    }
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 1rem;

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
    }

    svg {
      width: 1rem;
      height: 1rem;
      color: var(--secondaryColor);
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .logo {
      display: none;
    }
  }
`;
