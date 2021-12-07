import { useState } from 'react';
import { shares } from '../../constants/shares';

export const SharesModal = () => {

  const [credit, setCredit] = useState<number>(0);
  const cuotas = shares.normal.prices;
  
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if( typeof event.currentTarget.valueAsNumber !== 'number' ) return;
    setCredit(event.currentTarget.valueAsNumber);
  };

  return (
    <div style={{padding: '0 40px'}}>
      <h3 style={{textAlign: 'center'}}>¿Cuanto dinero puedo solicitar?</h3>
      <h4 style={{textAlign: 'center'}}>Ingresa el monto</h4>
      <div className="input-container">
        <div>$<input type="number" onChange={handleOnChange}/></div>
      </div>
      <h4>1 cuota de $ {isNaN(credit) ? 0 : (credit * cuotas[1]).toFixed(2)}</h4>
      <h4>2 cuotas de $ {isNaN(credit) ? 0 : (credit * cuotas[2]).toFixed(2)}</h4>
      <h4>3 cuotas de $ {isNaN(credit) ? 0 : (credit * cuotas[3]).toFixed(2)}</h4>
      <style jsx>{`
        .input-container {
          display: flex;
          margin: 0 auto;
          padding: 10px;
          border-radius: 10px;
          max-width: 60%;
          background-color: rgba(255,255,255, 50%);
        }

        input {
          max-width: 90%;
          border: 0;
          background-color: rgba(255,255,255, 0%);
        }

        input:focus {
          outline: 0;
        }

        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
          -webkit-appearance: none; 
          margin: 0; 
        }

        input[type=number] { -moz-appearance:textfield; }
      `}</style>
    </div>
  );
};
