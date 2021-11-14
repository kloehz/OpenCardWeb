import css from 'styled-jsx/css';
import { colors } from '../theme';

export const styles = css`
    .div-container {
        height: fit-content;
        background-color: ${colors.primary};
        display: flex;
        padding: 8vh 0;
    }

    .titles-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50vw;
    }
    
    .have-doubts {
        color: ${colors.secondary};
        font-weight: 600;
        font-size: 1.8rem;
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
        width: 50vw;
    }

    .questions h5 {
        margin: 0;
        width: 300px;
        font-size: 1.2rem;
    }

    .question-container {
        display: flex;
        align-items: center;
        cursor: pointer;
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
    }
`;