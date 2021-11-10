import css from 'styled-jsx/css';
import { colors } from '../theme';

export const styles = css`
  section {
    width: 100vw;
    padding: 0 5vw;
    height: fit-content;
    display: flex;
    justify-content: center;
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
    align-items: center:
    width: 100%;
  }

  figure {
    display: flex;
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
    }
  }
`;