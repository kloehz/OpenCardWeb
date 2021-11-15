import { styles } from '../../styles/about-us/boy-and-checks';
import Image from 'next/image';

export const BoyAndChecks = () => {
  return (
    <>
      <div className="boy-and-checks-container">
        <figure>
          <div className="description-container">
            <h2>NUESTROS CLIENTES</h2>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis consequuntur officiis, quia voluptate cupiditate doloremque non aliquid laboriosam corrupti nisi quod quibusdam repellendus esse. Sit officia delectus accusantium magnam corporis.</h3>
          </div>
          <Image
            src='/images/about-us/boy-and-checks.svg'
            height={600}
            width={600}
          />
        </figure>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
