import { Dispatch, SetStateAction } from 'react';
import { colors } from '../../styles/theme';
import { IAnswer } from '../../types/answer';

interface IAnswersModal {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  answer: IAnswer
}

export const Modal = ({ isOpen, setIsOpen, answer: { title, content } }: IAnswersModal) => {
  
  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (e.currentTarget.dataset.js === 'root-modal') {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className="modal-container"
        data-js="root-modal"
        onClick={(e) => handleClickBackground(e)}
      >
        <div className="modal">
          <span onClick={ () => setIsOpen(false) }>X</span>
          <h1>{title}</h1>
          <h5>{content}</h5>
        </div>
      </div>
      <style jsx>{`
        .modal-container {
          background-color: rgba(0, 0, 0, 0.7);
          position: fixed;
          visibility: ${ isOpen ? 'visible' : 'hidden' };
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-Index: 9999;
          display: flex;
          justify-Content: center;
          align-items: center;
          animation: modal_fade .5s;
          opacity: ${ isOpen ? '1' : '0' };
        }

        @keyframes modal_fade {
          0% { opacity: 0;}
          50%; { opacity: 0.5;}
          100% { opacity: 1;}
        }

        .modal {
          background-color: ${colors.tertiary};
          padding-bottom: 15px;
          min-width: 220px;
          max-width: 600px;
          max-height: 400px;
          display: flex;
          flex-direction: column;
          border-radius: 25px;
          animation: up_to_mid .5s;
        }

        @keyframes up_to_mid {
          0% { margin-top: 100%}
          50%; { margin-top: 50%;}
          100% { margin-top: 0;}
        }

        span {
          display: flex;
          justify-content: flex-end;
          padding-right: 0px;
          padding-top: 12px;
          top: 0;
          margin-right: 15px;
          cursor: pointer;
          color: ${colors.quaternary}
        }

        h1 {
          height: 25%;
          width: 100%;
          text-align: center;
          padding-top: 10px;
        }

        h5 {
          height: 75%;
          width: 100%;
          text-align: center;
          color: #3E3F3D;
        }


        @media (max-width: 800px) {
          .modal {
            max-width: 90vw;
          }
        }
        `
      }</style>
    </>
  );
};