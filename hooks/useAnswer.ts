import { IAnswer } from '../types/answer';

export const useAnswer = ( id: number ): IAnswer => {

  let answer: IAnswer = {
    title: 'Titulo',
    content: 'Contenido'
  };

  switch (id) {
  case 0:
    answer = {
      title: 'Titulo 1',
      content: 'Contenido 1'
    };
    break;
  case 1:
    answer = {
      title: 'Titulo 2',
      content: 'Contenido 2'
    };
    break;
  case 2:
    answer = {
      title: 'Titulo 3',
      content: 'Contenido 3'
    };
    break;
  case 3:
    answer = {
      title: 'Titulo 4',
      content: 'Contenido 4'
    };
    break;
  }
  return answer;

};