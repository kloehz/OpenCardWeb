
export const HowToPay = () => {
  return (
    <>
      <div className="div-container">
        <h3>Las cuotas las podes abonar en nuestra sucursal mas cercana</h3>
        <br/>
        <h3>¡Y proximamente en nuestra App!</h3>
      </div>
      <style jsx>{`
        .div-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }

        h3:nth-child(1n) {
          text-align: center;
        }
      `}</style>
    </>
  );
};
