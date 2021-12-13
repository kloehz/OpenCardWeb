import css from 'styled-jsx/css';

export const styles = css`
  section {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    padding-left: 20%
  }

  @media (max-width: 800px) {
    h2 {
      padding-left: unset;
      text-align: center;
    }
  }
`;