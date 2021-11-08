import { styles } from '../../styles/home/questions';

export const Questions = () => {
  return (
    <>
      <div className='div-container'>
        <div className='titles-container'>
          <h3 className='have-doubts'>¿Tienes dudas?</h3>
          <h2 className='frequent-questions'>Conoce las preguntas<br/>frecuentes</h2>
        </div>
        <div className='questions'>
          <div className='question-container'>
            <h5>¿Cuanto dinero puedo solicitar?</h5>
            <div style={{width: '20px'}}>
              <img className='arrow-img' src='/images/home/arrow.svg'/>
            </div>
          </div>
          <div className='question-container'>
            <h5>¿Cuanto tengo que pagar por cuota?</h5>
            <div style={{width: '20px'}}>
              <img className='arrow-img' src='/images/home/arrow.svg'/>
            </div>
          </div>
          <div className='question-container'>
            <h5>¿Como pago el prestamo?</h5>
            <div style={{width: '20px'}}>
              <img className='arrow-img' src='/images/home/arrow.svg'/>
            </div>
          </div>
          <div className='question-container'>
            <h5>¿Que pasa si no termino el proceso?</h5>
            <div style={{width: '20px'}}>
              <img className='arrow-img' src='/images/home/arrow.svg'/>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>   
    </>
  );
};