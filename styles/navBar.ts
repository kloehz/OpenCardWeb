import css from 'styled-jsx/css';
import { primaryColor } from "./theme";

export default css`
    .navbar-container {
        align-items: center;
        background-color: #E3F0A859;
        color: #636658;
        display: flex;
        font-size: 23px;
        font-weight: 300;
        height: 9vh;
        justify-content: space-evenly;
    }

    .link{
        color: #747474;
        font-weight: 40;
        padding: 13px 23px;
        text-decoration: none;
    }

    .link:hover{
        background-color: #E3F0A8;
        border-radius: 6px;
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
            background-color: red;
        }
    }
`;
