import css from 'styled-jsx/css';

export const styles = css`
  section {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 20px 0 40px;
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