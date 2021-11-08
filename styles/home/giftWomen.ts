import css from 'styled-jsx/css';
import { colors } from '../theme';

export const styles = css `
    .div-container {
        display: flex;
        justify-content: center;
        width: 100vw;
        margin-top: 30px;
    }

    .credit-card {
        padding: 15px;
        height: 180px;
        width: 40vw;
        background-color: ${colors.primary};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
    }

    .title {
        font-weight: 300;
        width: 100%;
        margin: 0 0 0 10%;
        font-size: 1.5rem;
    }

    .buy-with-card {
        margin: 0;
        font-size: 1.5rem;
    }

    .buy-it {
        margin: 0;
        font-size: 1.5rem;
        text-align: center;
    }

    .image-container {
        max-width: 35%;
        min-width: 400px;
    }

    @media (max-width: 350px) {
        .image-container {
            min-width: 250px !important;
        }

        .title {
            font-size: .7rem !important;
        }

        .buy-with-card {
            font-size: .8rem !important;
        }

        .buy-it {
            font-size: .8rem !important;
        }

        .credit-card {
            margin-left: -120px !important;
        }
    }

    @media (max-width: 800px) {
        .credit-card {
            height: 140px;
            max-width: 40vw;
            margin-left: -100px;
        }

        .image-container {
            min-width: 320px;
        }

        .buy-with-card {
            text-align: center;
            font-size: 1rem;
        }

        .title {
            font-size: 1rem;
        }

        .buy-it {
            font-size: 1rem;
        }
    }
`;