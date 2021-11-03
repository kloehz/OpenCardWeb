import css from 'styled-jsx/css';
import { colors } from './theme';

export const styles = css`
    .div-container {
        height: fit-content;
        width: 100vw;
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
    }
    
    .frequent-questions {
        text-align: center;
        font-weight: 500;
    }
    
    .questions {        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }

    .questions h5 {
        width: 300px;
    }

    .question-container {
        display: flex;
    }

    .arrow-img {
        height: 25px;
    }

    @media (max-width: 800px) {
        .div-container {
            flex-direction: column;
            align-items: center;
        }

        .titles-container {
            width: unset;
        }

        .questions-container {
            margin-top: 20px;
            width: unset;
        }
    }
`;