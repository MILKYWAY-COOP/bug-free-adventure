import styled from 'styled-components';

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  p {
    margin: 0;
    line-height: 1.5;
    font-size: 16px;
    color: var(--secondaryColor);
    font-family: var(--secondaryFont);
    font-weight: 300;
    text-align: center;
    margin-bottom: 1rem;
  }
`;
