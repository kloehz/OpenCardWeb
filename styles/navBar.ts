import css from 'styled-jsx/css';
import { colors } from "./theme";

export default css`
    .navbar-container {
        align-items: center;
        background-color: ${colors.primary};
        box-shadow: 0 0 9px 0 rgb(0,0,0,.1);
        color: #636658;
        display: flex;
        font-size: 23px;
        font-weight: 300;
        height: 80px;
        justify-content: space-evenly;
        // position: fixed:
    }

    .imageLogo {
        align-items: center;
        display: flex;
        min-width: 230px;
        margin: 5px;
    }

    .menu-media{
        display: none;
    }

    .menu-media .button{
        background: #E3F0A8;
        border: 0px;
        border-radius: 8px;
        cursor: pointer;
        width: 50px;
        height: 60px;

    }
    .menu-media .button span{
        border-radius: 15px;
        background:  #747474;
        display: block;
        width: 70%;
        margin: 7px auto;
        height: 3px;

        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

    .menu-media .open .top-line {
        animation-name: top-line-animation;

    }

    .menu-media .open .center-line {
        animation-name: center-line-animation;
        background-color: red;
    }

    .menu-media .open .bottom-line {
        animation-name: bottom-line-animation;

    }

    .menu-media .top-line {
        animation-name: top-line-animation;

    }


    .menu-media .bottom-line {
        animation-name: bottom-line-animation;

    }

    @keyframes top-line-animation{
        50%, 100%{
            margin: 0 auto;
            transform: translateY(2px) rotate(-45deg);
        }
    }

    @keyframes bottom-line-animation{
        50%, 100%{
            margin: 0 auto;
            transform: translateY(2px) rotate(45deg);
        }
    }

    @keyframes center-line-animation{
        20%, 100%{
            margin: 0 auto;
            opacity: 0;
            width: 0px;
        }
    }


    .link{
        color: #747474;
        padding: 15px 20px;
        text-decoration: none;
        border-radius: 15px;
        font-size: 20px;
        text-transform: uppercase;
    }

    .link:hover{
        background-color: #E3F0A8;
        border-radius: 15px;
        color: #000000;
        transition: .3s;
        width: auto;
    }


    @media (max-width: 900px){
        .navbar-container {
            background-color: ${colors.primary};
            justify-content: space-between;
            padding: 0 15px;
        }

        .link{
            display:none;
        }

        .menu-media{
            display:flex;
            justify-content: flex-end;
        }


    }
`;
