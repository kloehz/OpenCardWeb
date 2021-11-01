import css from 'styled-jsx/css';

export const styles = css`
    .div-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }

    .images-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 0 2.5%;
    }


    .image-next {
        filter: grayscale(100%);
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
        animation: image_filter .3s;
        filter: grayscale(0%);
    }

    @keyframes image_filter {
        0% { -webkit-filter: grayscale(100%);}
        50%; { -webkit-filter: grayscale(50%);}
        100% { -webkit-filter: grayscale(0%);}
    }
`;