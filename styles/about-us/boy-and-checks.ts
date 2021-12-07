import css from 'styled-jsx/css';
import { colors } from '../theme';

export const styles = css`

  figure {
    margin-right: 0;
    display: flex;
    align-items: center;
  }

  .boy-and-checks-container {
    display: flex;
    flex-direction: row;
    max-width: 80vw;
  }

  .checks-text-container {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h3 {
    color: ${colors.secondary};
    padding: 0 35px;
  }

  .description-container {
    height: fit-content;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 800px) {
    figure {
      flex-direction: column;
    }
  }
`;