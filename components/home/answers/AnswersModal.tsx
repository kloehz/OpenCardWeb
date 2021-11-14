import { Modal } from '@nextui-org/react';
import { Dispatch, SetStateAction } from 'react';

interface IAnswersModal {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  answer: string
}

export const AnswersModal = ({ isOpen, setIsOpen, answer }: IAnswersModal) => {
  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      closeButton={true}
    >
      { answer }
    </Modal>
  );
};
