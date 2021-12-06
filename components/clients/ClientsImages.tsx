import Image from 'next/image';
import { useState } from 'react';
import { shares } from '../../constants/shares';
import { shops } from '../../constants/shops';
import { styles } from '../../styles/clients/clients-images';
import { IImage } from '../../types/shops';
import { AnswersModal } from '../home/answers/AnswersModal';

export const ClientsImages = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState({} as IImage);

  const handleModal = ( image: IImage ) => {
    setImage(image);
    setModalOpen((state) => !state);
  };

  return (
    <>
      <div className="images-container">
        {
          shops.map((image, index) => {
            return (
              <div key={index} className="image-next" onClick={(e) => handleModal(image)}>
                <Image src={`/images/our_clients/${image.id}.jpeg`} key={index} height={100} width={100} />
              </div>
            );
          })
        }
      </div>
      <AnswersModal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <div className='children-container'>
          <h3 style={{textAlign: 'center', padding: '0 50px'}}>{image.name}</h3>
          <ul>
            {
              image.address && image.address.map((item, i) => {
                return (
                  <>
                    <li key={i}>{item}</li>
                  </>
                );
              })
            }
          </ul>
          <h4 style={{textAlign: 'center'}}>Hasta {shares[image.sector]?.maxShares} cuotas</h4>
        </div>
      </AnswersModal>
      <style jsx>{styles}</style>
    </>
  );
};