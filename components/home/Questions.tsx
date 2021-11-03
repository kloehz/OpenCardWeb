import { styles } from '../../styles/questions';

export const Questions = () => {
  return (
    <>
      <div className='div-container'>
        <div className='titles-container'>
          <h4 className='have-doubts'>¿Tienes dudas?</h4>
          <h3 className='frequent-questions'>Conoce las preguntas frecuentes</h3>
        </div>
        <div className='questions'>
          <div className='question-container'>
            <h5>¿Cuanto dinero puedo solicitar?</h5>
            <img className='arrow-img' src='/images/home/arrow.svg'/>
          </div>
          <div className='question-container'>
            <h5>¿Cuanto tengo que pagar por cuota?</h5>
            <img className='arrow-img' src='/images/home/arrow.svg'/>
          </div>
          <div className='question-container'>
            <h5>¿Como pago el prestamo?</h5>
            <img className='arrow-img' src='/images/home/arrow.svg'/>
          </div>
          <div className='question-container'>
            <h5>¿Que pasa si no termino el proceso?</h5>
            <img className='arrow-img' src='/images/home/arrow.svg'/>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>   
    </>
  );
};