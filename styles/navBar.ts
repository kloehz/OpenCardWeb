import css from 'styled-jsx/css';
import { primaryColor } from "./theme";

export default css`
    .navbar-container {
        display: flex;
        height: 9vh;
        justify-content: space-evenly;
        align-items: center;
        background-color: #E3F0A859;
        font-weight: 300;
        font-size: 23px;
        color: #636658;
        margin:

    }

    .link{
        color: #50504F;
        text-decoration: none;
        font-weight: 40;
        padding: 13px 23px;

    }

    .link:hover{
        color: #000000;
        background-color: #E3F0A8;
        border-radius: 6px;
        width: auto;
        transition: .3s;
    }

    @media (max-width: 800px){
        .navbar-container {
            background-color: red;
        }
    }
`;
