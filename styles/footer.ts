import css from 'styled-jsx/css';
import { colors } from './theme';

export const styles = css`
  .footer-container {
    margin-top: 20px;
    height: 80px;
    background-color: ${colors.primary};
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  figure:hover {
    cursor: pointer;
  }

  h5 {
    cursor: default;
  }

  section {
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    figure {
      margin: 0 10px;
    }

    h5 {
      max-width: 150px;
      text-align: center;
    }
  }
`;