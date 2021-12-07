import dynamic from 'next/dynamic';
import { ClientsImages } from '../../components/clients/ClientsImages';
import { WomanBuy } from '../../components/clients/WomanBuy';

const ClientsMap = dynamic(() => {
  return import('../../components/clients/ClientsMap');
}, {ssr: false});

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