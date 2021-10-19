import testStyle from "../../styles/navBar";
import Link from 'next/link'
import Image from 'next/image';
import { useState } from "react";

const NavBar = () => {

    const [isOpen, setisOpen] = useState(false);

    const handleOpen = () => {
        setisOpen((open) => !open)
    }

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

        <div className={`menu-media ${isOpen ? 'open' : ''}`} onClick={handleOpen}>
            <button className="button">
                <span className={`top-line ${isOpen ? 'open' : ''}`}></span>
                <span className={`center-line ${isOpen ? 'open' : ''}`}></span>
                <span className={`botton-line ${isOpen ? 'open' : ''}`}></span>
            </button>
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
        

    )

}

export default NavBar;