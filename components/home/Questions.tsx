import { useState } from 'react';
import { useAnswer } from '../../hooks/useAnswer';
import { styles } from '../../styles/home/questions';
import { IAnswer } from '../../types/answer';
import { AnswersModal } from './answers/AnswersModal';

export const Questions = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [answer, setAnswer] = useState({} as IAnswer);

  const handleModal = (id: number) => {
    setAnswer(useAnswer(id));
    setModalOpen((state) => !state);
  };

  return (
    <>
      <div className='div-container'>
        <div className='titles-container'>
          <h3 className='have-doubts'>¿Tienes dudas?</h3>
          <h2 className='frequent-questions'>Conoce las preguntas<br/>frecuentes</h2>
        </div>
        <div className='questions'>
          <div className='question-container' onClick={() => handleModal(0) }>
            <h5>¿Cuanto dinero puedo solicitar?</h5>
            <div style={{width: '20px'}}>
              <img className='arrow-img' src='/images/home/arrow.svg'/>
            </div>
          </div>
          <div className='question-container' onClick={() => handleModal(1)}>
            <h5>¿Cuanto tengo que pagar por cuota?</h5>
            <div style={{width: '20px'}}>
              <img className='arrow-img' src='/images/home/arrow.svg'/>
            </div>
          </div>
          <div className='question-container' onClick={() => handleModal(2)}>
            <h5>¿Como pago el prestamo?</h5>
            <div style={{width: '20px'}}>
              <img className='arrow-img' src='/images/home/arrow.svg'/>
            </div>
          </div>
          <div className='question-container' onClick={() => handleModal(3)}>
            <h5>¿Que pasa si no termino el proceso?</h5>
            <div style={{width: '20px'}}>
              <img className='arrow-img' src='/images/home/arrow.svg'/>
            </div>
          </div>
        </div>
        <AnswersModal isOpen={modalOpen} setIsOpen={setModalOpen} answer={answer}/>
      </div>
      <style jsx>{styles}</style>   
    </>
  );
};