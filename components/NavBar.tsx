import { Link, useTheme} from '@nextui-org/react';


const NavBar = () => {

    const { palette, breakpoints } = useTheme();

    return (
        <>
            <div className="navbar-container">

                <Link underline color="success">Inicio</Link>
                <Link underline color="success">Empresas</Link>
                <Link underline color="success">Personas</Link>
                <Link underline color="success">Contacto</Link>
            </div>
            <style jsx>
            {`
                .navbar-container {
                    display: flex;
                    height: 7vh;
                    justify-content: space-evenly;
                    align-items: center;
                    background-color: rgba(255, 255, 255, 0.7);
                }

                @media (max-width: ${breakpoints.xs.max}){
                    .navbar-container {
                        background-color: red;
                    }
                }
            `}
            </style>
        </>
    )
}

export default NavBar;