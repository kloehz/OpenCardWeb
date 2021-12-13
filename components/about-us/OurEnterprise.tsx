import Image from 'next/image';
import { colors } from '../../styles/theme';

export const OurEnterprise = () => {
  return (
    <>
      <figure>
        <Image
          src='/images/about-us/people2.svg'
          height={600}
          width={1000}
        />
      </figure>
      <style jsx>{`
        .our-enterprise {
          background-color: ${colors.secondary};
          border-radius: 10px 50px 10px 50px;
          margin-right: 40%;
        }

        h2 {
          padding: 0 20px;
        }

        figure {
          margin-top: 0;
        }

        @media (max-width: 800px) {
          .our-enterprise {
            margin-left: 20px;
          }
        }
      `}</style>
    </>
  );
};
