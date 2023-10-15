import { ChangeEvent, useState } from 'react';
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
} from '@chakra-ui/react';
import { useSendEmail } from '@hooks';
import { decodeText } from '@utils';
import PaperPlaneIcon from '@public/paper-plane-icon.png';

interface SendModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const SendModal = ({ isOpen, onClose }: SendModalProps) => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [responderName, setResponderName] = useState('');
  const sendEmail = useSendEmail();

  const encodedSenderName = searchParams.get('sn')!;
  const senderName = decodeText(encodedSenderName);

  const handleClick = async () =>
    sendEmail({ onClose, responderName, setLoading });

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
        <ModalHeader>{`Respond to ${senderName}`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={responderName}
            onChange={handleInputChange}
            placeholder="your name (optional)"
          />
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            display="flex"
            width="5.8rem"
            justifyContent="space-between"
            variant="outline"
            colorScheme="whatsapp"
            isLoading={loading}
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
