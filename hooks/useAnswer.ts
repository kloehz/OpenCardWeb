
export const useAnswer = ( id: number ): string => {

  let answer = 'Sin respuesta';

  switch (id) {
  case 0:
    answer = 'Respuesta numero 0';
    break;
  case 1:
    answer = 'Respuesta numero 1';
    break;
  case 2:
    answer = 'Respuesta numero 2';
    break;
  case 3:
    answer = 'Respuesta numero 3';
    break;
  }
  return answer;

};