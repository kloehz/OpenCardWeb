import { styles } from '../../styles/footer';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const Footer = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <>
      <section>
        <div className="footer-container">
          <h5>Copyright SimplexBytes</h5>
          <figure>
            <Image
              src="/images/logo.png"
              height={65}
              width={65}
              onClick={(e) => handleClick(e)}
            />
          </figure>
          <h5>Pergamino - Buenos Aires</h5>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
};
