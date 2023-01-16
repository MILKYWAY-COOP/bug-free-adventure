import styled from 'styled-components';

import { imgs } from '../../Elements';
const { logo } = imgs;

export const NavbarContainer = styled.div`
  width: 100%;
  .nav {
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--mainColor);
    transition: all 0.2s ease-in-out;

    .links {
      display: flex;
      gap: 1rem;
      transition: all 0.3s ease-in-out;

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
      transition: all 0.3s ease-in-out;

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

    .toggle {
      width: 2rem;
      aspect-ratio: 1/1;
      display: none;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease-in-out;

      button {
        width: 100%;
        height: 100%;
        display: none;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;

        svg {
          width: 100%;
          aspect-ratio: 1/1;
        }
      }

      .open {
        display: flex;
      }

      @media (max-width: 768px) {
        display: flex;
      }
    }

    .socials {
      display: flex;
      align-items: center;
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
      }

      svg {
        width: 1rem;
        height: 1rem;
        color: var(--secondaryColor);
        cursor: pointer;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      justify-content: space-between;
      padding: 1rem 2rem;

      .links {
        display: none;
      }

      .socials {
        display: none;
      }
    }
  }

  .show {
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    transition: all 0.3s ease-in-out;

    .logo {
      display: none;
    }

    .toggle {
      top: 0;
      right: 0;
      position: absolute;
      margin: 30px;
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50%;
      transition: all 0.4s ease-in-out;

      > * {
        font-size: 2rem;
        margin: 1rem 0;
        text-decoration: underline;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .socials {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid var(--secondaryColor);
      padding: 2.5rem 0;
      transition: all 0.4s ease-in-out;

      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
`;
