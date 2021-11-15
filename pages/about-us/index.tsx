import { styles } from '../../styles/about-us/about-us';
import { OurEnterprise } from '../../components/about-us/OurEnterprise';
import { Dialogs } from '../../components/about-us/BubbleDialog';
import { BoyAndChecks } from '../../components/about-us/BoyAndChecks';
import { Avatar } from '../../components/about-us/Avatar';

const aboutUs = () => {

  return (
    <>
      <div className="about-us-container">
        <OurEnterprise />
        <div className="dialogs-container">
          <div>
            <Dialogs margin='left'>
              Nuestro objetivo es implementar un servicio integral de desarrollo, administración y gestión de los productos a través de una Aplicación y Pagina web como lo requieren los tiempos actuales, poniendo a disposición el asesoramiento comercial, operativo e informático necesario para llevar adelante el negocio con los resultados esperados.
            </Dialogs>
            <Dialogs margin='left' color='tertiary'>
              Nuestro objetivo es implementar u
              Nuestro objetivo es implementar u
              Nuestro objetivo es implementar u
              Nuestro objetivo es implementar u
              Nuestro objetivo es implementar un servicio integral de desarrollo, administración y gestión de los productos a través de una Aplicación y Pagina web como lo requieren los tiempos actuales, poniendo a disposición el asesoramiento comercial, operativo e informático necesario para llevar adelante el negocio con los resultados esperados.
            </Dialogs>
          </div>
          <div>
            <Dialogs margin='left' color='tertiary'>
              Lorem ipsum dolor sit amet consectetur,
              Lorem ipsum dolor sit amet consectetur,
              Lorem ipsum dolor sit amet consectetur,
              Lorem ipsum dolor sit amet consectetur,
              Lorem ipsum dolor sit amet consectetur,
              Lorem ipsum dolor sit amet consectetur,
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sunt laboriosam dolorem voluptatem velit dolorum odio ullam qui accusantium labore soluta rerum quisquam, fugit enim sed eum. Deleniti, dolores iure.
            </Dialogs>
            <Dialogs margin='right'>
              Lorem ipsum dolor sit amet consectetur,
              Lorem ipsum dolor sit amet consectetur,
              Lorem ipsum dolor sit amet consectetur,
            </Dialogs>
          </div>
        </div>
        <BoyAndChecks />
        {/* <Avatar /> */}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default aboutUs;