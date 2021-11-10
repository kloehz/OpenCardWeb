import { styles } from '../../styles/about-us/avatar';
// import Image from 'next/image';

export const Avatar = () => {
  return (
    <>
      <section>
        <div className="description-container">
          <h2>NUESTROS CLIENTES</h2>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis consequuntur officiis, quia voluptate cupiditate doloremque non aliquid laboriosam corrupti nisi quod quibusdam repellendus esse. Sit officia delectus accusantium magnam corporis.</h3>
        </div>
        {/* <div className="avatar-container">
          <figure id="avatar-1">
            <Image
              src='/images/about-us/avatar-1.svg'
              width='140'
              height='140'
            />
          </figure>
          <figure id="avatar-2">
            <Image
              src='/images/about-us/avatar-2.svg'
              width='140'
              height='140'
            />
          </figure>
          <figure id="avatar-3">
            <Image
              src='/images/about-us/avatar-3.svg'
              width='140'
              height='140'
            />
          </figure>
          <figure id="avatar-4">
            <Image
              src='/images/about-us/avatar-4.svg'
              width='140'
              height='140'
            />
          </figure>
        </div> */}
      </section>
      <style jsx>{styles}</style>
    </>
  );
};
