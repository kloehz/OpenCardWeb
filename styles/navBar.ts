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
        height: 80px;
        justify-content: space-evenly;
        position: fixed;
        width: 100%;
        z-index: 100;
      
    }

    .imageLogo {
        align-items: center;
        display: flex;
        min-width: 200px;
        margin: 0px 5px 0px 10px
    }

    .menu-media {
        display: none;
        flex-direction: column;
        background-color: ${ colors.secondary} ;
        padding: 9px 7px;
        border-radius: 9px;
    }

    .menu-media span {
        background-color: ${colors.fontColor};
        width: 25px;
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
        color: ${colors.fontColor};
        padding: 20px;
        text-decoration: none;
        border-radius: 15px;
        font-size: 20px;
        font-weight: 300;
        text-transform: uppercase;
    }

    .link:hover{
        background-color: ${colors.secondary};
        border-radius: 45px;
        transition: .5s;
        width: auto;
    }

    @media (max-width: 900px){
        .navbar-container {
          background-color: ${colors.primary};
          justify-content: space-between;
        }

        
        .link-container{
          padding: 10px 5px;
          display: flex;
          flex-direction: column;
          background-color: ${colors.primary};
          width: 50%;
          align-items: center;
          position: absolute;
          top: 100%;    
          right: -60%;
          border-bottom-left-radius: 30px;
          transition: .7s cubic-bezier(0.39, 0.58, 0.57, 1);
        }

        .show {
          right: 0;
          transition: .7s cubic-bezier(0.39, 0.58, 0.57, 1);
          box-shadow:  -5px 5px 8px 0px rgb(0,0,0,.1);
        }

        .link:hover {
          width: -webkit-fill-available;
          display: flex;
          justify-content: center;
          transition: .5s;
        }
        

        .menu-media{
          display:flex;
          justify-content: flex-end;
          margin: 0px 15px 0px 5px;
          cursor: pointer;
        }



    }
`;

export default styles;