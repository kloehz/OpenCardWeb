
export const isPromo = () => {

  const actualDay = new Date().getDay();
  
  if( actualDay === 3 || actualDay === 4 ){
    return true;
  }

  return false;
};
