import testStyle from "../../../styles/navBar";
import Link from 'next/link'
import Image from 'next/image';
import { Button } from '@nextui-org/react';

const NavBar = () => {

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

        <label htmlFor='menuMedia'></label>
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
    )
}

export default NavBar;