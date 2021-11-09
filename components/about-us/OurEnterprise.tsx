import Image from 'next/image';

export const OurEnterprise = () => {
  return (
    <>
      <h2>NUESTRA EMPRESA</h2>
      <figure>
        <Image
          src='/images/about-us/people-image.svg'
          height={450}
          width={600}
        />
      </figure>
    </>
  );
};
