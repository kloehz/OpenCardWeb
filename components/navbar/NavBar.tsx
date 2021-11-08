import testStyle from '../../styles/navBarStyles';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NavBar = () => {

  const [isOpen, setisOpen] = useState(true);

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

      <div className="menu-media" onClick={() => setisOpen((open) => !open)}>
        <span className={isOpen === true ? 'close' : 'open'}></span>
        <span className={isOpen === true ? 'close' : 'open'}></span>
        <span className={isOpen === true ? 'close' : 'open'}></span>
      </div>
        
      <div className={
        `link-container ${isOpen !== true ? 'show': ''}`
      }>
        <Link href="/">
          <a className='link' onClick={() => setisOpen((open)=> !open)}>Inicio</a>
        </Link>
        <Link href="/about-us">
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
        { testStyle }
      </style>
    </div>
        

  );

};

export default NavBar;