enum IPages {
  '/',
  '/about-us',
  '/contact',
  '/commerces'
}

export const headerInfo = (page: string) => {
  switch (page) {
  case '/':
    return {
      title: 'OpenCard - Inicio',
      description: 'OpenCard es la tarjeta de la region de pergamino y alrededores para comprar todo lo que quieras en comodas cuotas y con mucha facilidad'
    };
  case '/about-us':
    return {
      title: 'OpenCard - Sobre Nosotros',
      description: 'Somos una empresa nacida en pergamino y en continua expansion con mas de 20 años de experiencia en el rubro de las finanzas'
    };
  case '/contact':
    return {
      title: 'OpenCard - Contacto',
      description: 'Contactanos para asi poder asesorarte en todo lo que necesites para solicitar nuestra tarjeta y asi poder usar todos nuestros beneficios al instante'
    };
  case '/commerces':
    return {
      title: 'OpenCard - Comercios adheridos',
      description: 'Te ofrecemos mas la opcion de consumir con nuestra tarjeta en mas de 40 comercios adheridos solo en la ciudad de pergamino y muchos otros en rojas colon y mas'
    };
  
  default:
    return {
      title: 'OpenCard - Inicio',
      description: 'OpenCard es la tarjeta de la region de pergamino y alrededores para comprar todo lo que quieras en comodas cuotas y con mucha facilidad'
    };
  }
};