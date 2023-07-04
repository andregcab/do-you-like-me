import { useContext } from 'react';
import Image from 'next/image';
import {
  Button,
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
import PaperPlaneIcon from '@public/paper-plane-icon.png';

interface SendModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const SendModal = ({ isOpen, onClose }: SendModalProps) => {
  const { responding } = useContext(AppContext);

  const handleClick = async () => {
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        to: 'cabrerandre@gmail.com',
        responder: 'dre',
        response: 'yes',
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

  if (!responding) return null;

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(2px) hue-rotate(20deg)"
      />
      <ModalContent>
        <ModalHeader>Let them know!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Custom backdrop filters!</Text>
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
