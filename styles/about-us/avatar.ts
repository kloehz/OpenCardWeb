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

  .avatar-container {
    width: 35vw;
    height: 45vh;
    position: relative;
  }

  #avatar-1 {
    position: absolute;
    left: 0;
  }

  #avatar-2 {
    position: absolute;
    top: 100px;
    left: 115px;
  }

  #avatar-3 {
    position: absolute;
    top: 200px;
    left: 0;
    margin-left: 15px;
  }

  #avatar-4 {
    position: absolute;
    top: 240px;
    left: 115px;
  }

  .description-container {
    width: 65vw;
    height: fit-content;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  figure {
    display: flex;
  }


  @media (max-width: 800px) {
    section {
      flex-direction: column;
    }

    .avatar-container {
      height: 40vh;
      display: flex;
      justify-content: center;
      width: 100vw;;
    }

    #avatar-2 {
      top: 23%;
    }

    #avatar-3 {
      top: 50%;
    }

    #avatar-4 {
      top: 70%;
    }
  }
`;