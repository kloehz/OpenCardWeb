import testStyle from '../../styles/navBar';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NavBar = () => {

  const [isOpen, setisOpen] = useState('closed');

  return (
    <div className="navbar-container">
      <div className='imageLogo'>
        <Image
          src="/images/icon-logo.png"
          height={65}
          width={250}
          alt=""
        />
      </div>

      <div className="menu-media" onClick={() => setisOpen(isOpen === 'open' ? 'close' : 'open')}>
        <span className={isOpen}></span>
        <span className={isOpen}></span>
        <span className={isOpen}></span>
      </div>

      <Link href="/">
        <a className='link'>Inicio</a>
      </Link>
      <Link href="/about-us">
        <a className='link'>Empresas</a>
      </Link>
      <Link href="/">
        <a className='link'>Personas</a>
      </Link>
      <Link href="/">
        <a className='link'>Contacto</a>
      </Link>


      <style jsx>
        { testStyle }
      </style>
    </div>
        

  );

};

export default NavBar;