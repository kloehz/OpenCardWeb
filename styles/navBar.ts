import css from 'styled-jsx/css';
import { colors } from "./theme";

const styles = css`
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

    .menu-media {
        display: none;
        flex-direction: column;
    }

    .menu-media span {
        background-color: gray;
        width: 32px;
        height: 4px;
        margin: 4px;
        border-radius: 2px;
        transition:all ease 0.5s;
    }

    .open:nth-child(1) {
      transform: rotate(45deg) translateY(8px) translateX(8px);
    }

    .open:nth-child(2) {
      opacity: 0;
    }

    .open:nth-child(3) {
      transform: rotate(-45deg) translateY(-8px) translateX(8px);
    }


    .close:nth-child(1) {
      transform: rotate(0) translateY(0);
    }

    .close:nth-child(2) {
      opacity: 1;
    }

    .close:nth-child(3) {
      transform: rotate(0) translateY(0);
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

export default styles;