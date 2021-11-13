import css from 'styled-jsx/css';
import { colors } from '../theme';

export const styles = css`

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  h3 {
    color: ${colors.secondary};
    padding: 0 35px;
  }

  .description-container {
    width: 65vw;
    height: fit-content;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .description-container h2 {
    text-align: center;
  }

  @media (max-width: 800px) {
    section {
      flex-direction: column;
    }
`;