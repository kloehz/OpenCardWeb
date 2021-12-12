import { HowToPay } from '../components/modalAnswers/howToPay';
import { InputModal } from '../components/modalAnswers/InputModal';
import { SharesModal } from '../components/modalAnswers/SharesModal';

export const useAnswer = ( id: number ) => {

  switch (id) {
  case 0:
    return <InputModal />;
  case 1:
    return <SharesModal />;
  default:
    return <HowToPay />;
  }
};