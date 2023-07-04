import { ChangeEvent, useContext, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';
import { AppContext } from '@context';
import { decodeText } from '@utils';
import PaperPlaneIcon from '@public/paper-plane-icon.png';

interface SendModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const SendModal = ({ isOpen, onClose }: SendModalProps) => {
  const searchParams = useSearchParams();
  const { selectedAnswer } = useContext(AppContext);

  const [responderName, setResponderName] = useState('');

  const senderName = searchParams.get('sn')!;
  const senderEmail = searchParams.get('se')!;

  const handleClick = async () => {
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        to: decodeText(senderEmail),
        responder: responderName,
        response: selectedAnswer,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      console.error(error);
      // toast with error
    }

    // trigger toast
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResponderName(e.target.value);
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(2px) hue-rotate(20deg)"
      />
      <ModalContent>
        <ModalHeader>{`Let ${decodeText(
          senderName
        )} know how you feel`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={responderName}
            onChange={handleInputChange}
            placeholder="your name"
          />
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            display="flex"
            justifyContent="space-between"
            width="5.8rem"
            colorScheme="whatsapp"
            variant="outline"
            onClick={handleClick}
          >
            Send
            <Image
              alt="paper plane"
              src={PaperPlaneIcon}
              height={20}
              width={20}
            />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SendModal;
