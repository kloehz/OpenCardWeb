import Image from 'next/image';
import { styles } from '../../styles/clients/clients-images';

export const ClientsImages = () => {

  const images = [];

  for(let i = 1; i<=28; i++){
    images.push(`/images/our_clients/${i}.jpeg`);
  }

  return (
    <>
      <div className="images-container">
        {
          images.map((image, index) => {
            return (
              <div key={index} className="image-next" >
                <Image src={image} key={index} height={100} width={100} />
              </div>
            );
          })
        }
      </div>
      <style jsx>{styles}</style>
    </>
  );
};