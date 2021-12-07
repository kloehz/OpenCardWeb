import css from 'styled-jsx/css';
import { colors } from '../theme';

export const styles = css`
  section {
    height: fit-content;
    display: flex;
    justify-content: center;
    padding: 0 10px;
  }

  .map-container {
    height: 500px;
    width: 700px;
    border: 10px solid ${colors.secondary};
    border-radius: 20px;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
  }

  figure {
    display: flex;
    margin-right: 0;
    margin-left: 0;
    width: 100%;
  }

  figure h3 {
    padding: 0 25px;
  }

  @media (max-width: 800px) {
    section {
      flex-direction: column;
    }

    .map-container {
      max-width: 90vw;
      margin: 0 auto;
    }
  }
`;