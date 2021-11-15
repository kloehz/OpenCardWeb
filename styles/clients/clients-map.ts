import css from 'styled-jsx/css';
import { colors } from '../theme';

export const styles = css`
  .map-container {
    height: 500px;
    width: 700px;
    border: 20px solid ${colors.tertiary};
    border-radius: 0 0 20px 20px;
  }

  h1 {
    letter-spacing: 3px;
    font-weight: 400;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: ${colors.tertiary};

    border-radius: 20px;
  }

  @media (max-width: 800px) {
    .map-container {
      max-width: 90vw;
      margin: 0 auto;
    }

  }
`;