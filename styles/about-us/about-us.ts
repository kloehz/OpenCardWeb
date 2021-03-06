import css from 'styled-jsx/css';

export const styles = css`
  .about-us-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .about-us-container h2 {
    padding-top: 30px;
  }

  .dialogs-container {
    margin: 0 15vw;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 800px) {
    .dialogs-container {
      margin: 0 5vw;
    }
  }
`;