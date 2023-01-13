import styled from 'styled-components';

export const ImageStyled = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/0.6;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in-out;

    span {
      color: white;
      font-size: 1.5rem;
      font-family: var(--secondaryFont);
      text-align: center;
    }
  }

  &:hover {
    .span {
      display: flex;
      cursor: pointer;
    }
  }
`;
