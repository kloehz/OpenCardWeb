import css from 'styled-jsx/css';
import { colors } from '../theme';

export const styles = css`
  .image-container {
    max-width: 35%;
    min-width: 400px;
  }

  h3 {
    text-align: center;
    font-size: 30px;
    font-weight: 400;
  }

  .dialog-container {
    padding: 15px;
    height: 180px;
    width: 40vw;
    background-color: ${colors.tertiary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50px 10px;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {
    .dialog-container {
        height: 140px;
        max-width: 40vw;
        max-height: 80px;
        margin-left: 20px;
    }

    .image-container {
        min-width: 175px;
    }

    h3 {
      font-size: unset;
    }
  }
`;