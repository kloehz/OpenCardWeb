import css from 'styled-jsx/css';
import { colors } from '../theme';

export const styles = css`
    .div-container {
        height: fit-content;
        background-color: ${colors.tertiary};
        display: flex;
        padding: 8vh 0;
        justify-content: center;
    }

    .titles-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 40vw;
    }
    
    .have-doubts {
        font-weight: 300;
        font-size: 1.8rem;
        width: 100%;
        margin-left: 50px;
        margin-bottom: 0;
    }
    
    .frequent-questions {
        text-align: center;
        font-weight: 500;
        font-size: 2.2rem;
    }
    
    .questions {        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40vw;
    }

    .questions h5 {
        margin: 0;
        width: 300px;
        font-size: 1.3rem;
        font-weight: 500;
    }

    .question-container {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin: 5px 0;
    }

    .question-container h5 {
        padding: 5px 0;
    }

    .arrow-img {
        height: 25px;
        margin-left: 0px;
        transition: .5s;
    }

    .question-container:hover .arrow-img {
        margin-left: 5px;
        transition: .5s;
    }

    .childrenContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 800px) {
        .div-container {
            flex-direction: column;
            align-items: center;
        }

        .titles-container {
            width: unset;
        }

        .question-container {
            margin-top: 20px;
        }

        .questions {
            width: unset;
        }

        .have-doubts {
            width: unset;
            margin: unset;
        }
    }
`;