import css from 'styled-jsx/css';

export const styles = css`
  .images-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 30px 0;
  }

  .image-next:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.5); 
  }

  .image-next {
    opacity: 0.8;
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    height: 100px;
    width: 100px;
    transition: box-shadow .3s;
  }
`;