import { styles } from '../../styles/navBarStyles';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

const NavBar = () => {
  const [isOpen, setisOpen] = useState(true);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="navbar-container">
      <div className='imageLogo'>
        <Image
          src="/images/icon-logo.png"
          height={65}
          width={250}
          alt=""
          onClick={(e) => handleClick(e)}
        />
      </div>

      <div className="menu-media" onClick={() => setisOpen((open) => !open)}>
        <span className={isOpen ? 'close' : 'open'}></span>
        <span className={isOpen ? 'close' : 'open'}></span>
        <span className={isOpen ? 'close' : 'open'}></span>
      </div>
        
      <div className={
        `link-container ${isOpen ? '' : 'show'}`
      }>
        <Link href="/">
          <a className='link' onClick={() => setisOpen((open)=> !open)}>Inicio</a>
        </Link>
        <Link href="/clients">
          <a className='link'onClick={() => setisOpen((open)=> !open)} >Empresas</a>
        </Link>
        <Link href="/about-us">
          <a className='link' onClick={() => setisOpen((open)=> !open)} >Nosotros</a>
        </Link>
        <Link href="/contact">
          <a className='link'onClick={() => setisOpen((open)=> !open)} >Contacto</a>
        </Link>
      </div>

      <style jsx>
        { styles }
      </style>
    </div>
  );

};

export default NavBar;