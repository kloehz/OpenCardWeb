import { ClientsImages } from '../../components/clients/ClientsImages';
import { ClientsMap } from '../../components/clients/ClientsMap';
import { WomanBuy } from '../../components/clients/WomanBuy';

const Clients = () => {

  return (
    <>
      <div className="clients-container">
        <WomanBuy />
        <ClientsImages />
        <ClientsMap />
      </div>
      <style jsx>{`
        .clients-container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default Clients;