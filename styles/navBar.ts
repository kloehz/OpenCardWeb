import css from 'styled-jsx/css';
import { colors } from "./theme";

export default css`
    .navbar-container {
        align-items: center;
        background-color: ${colors.primary};
        color: #636658;
        display: flex;
        font-size: 23px;
        font-weight: 300;
        height: 80px;
        justify-content: space-evenly;
    }

    .link{
        color: #747474;
        font-weight: 40;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 15px;
    }

    .link:hover{
        background-color: #E3F0A8;
        border-radius: 15px;
        color: #000000;
        transition: .3s;
        width: auto;
    }

    .imageLogo {
        display: flex;
        justify-content: flex-start;
        width: 25vw;
    }

    @media (max-width: 800px){
        .navbar-container {
            background-color: ${colors.primary};
        }
    }
`;
