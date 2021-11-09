import { styles } from '../../styles/about-us/boy-and-checks';
import Image from 'next/image';

export const BoyAndChecks = () => {
  return (
    <>
      <figure>
        <Image
          src='/images/about-us/boy-and-checks.svg'
          height={450}
          width={600}
        />
      </figure>
      <style jsx>{styles}</style>
    </>
  );
};
