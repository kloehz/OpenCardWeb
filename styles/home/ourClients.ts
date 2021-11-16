import css from 'styled-jsx/css';

export const styles = css`
    .div-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .images-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        max-width: 35%;
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

    .image-next:hover {
        box-shadow: 0 0 11px rgba(33,33,33,.5);
    }

    @media (max-width: 800px) {

        .images-container {

            max-width: unset;
        }

        .image-next {
            height: 80px;
            width: 80px;
            filter: unset;
            opacity: 1;
        }
    }
`;