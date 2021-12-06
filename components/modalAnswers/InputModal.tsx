import { useState } from 'react';

export const InputModal = () => {

  const [credit, setCredit] = useState<number>(0);
  
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if( typeof event.currentTarget.valueAsNumber !== 'number' ) return;
    setCredit(event.currentTarget.valueAsNumber / 2);
  };

  return (
    <div style={{padding: '0 40px'}}>
      <h3 style={{textAlign: 'center'}}>¿Cuanto dinero puedo solicitar?</h3>
      <h4 style={{textAlign: 'center'}}>Ingresa el monto de tu sueldo</h4>
      <div className="input-container">
        <div>$<input type="number" onChange={handleOnChange}/></div>
      </div>
      <h4>Puedes solicitar: ${isNaN(credit) ? 0 : credit}</h4>
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
