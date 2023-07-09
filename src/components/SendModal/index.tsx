import { ChangeEvent, useContext, useState } from 'react';
import { useRouter } from 'next/router';
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
  useToast,
} from '@chakra-ui/react';
import { AppContext } from '@context';
import { decodeText } from '@utils';
import PaperPlaneIcon from '@public/paper-plane-icon.png';

interface SendModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const SendModal = ({ isOpen, onClose }: SendModalProps) => {
  const toast = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { selectedAnswer } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [responderName, setResponderName] = useState('');

  const encodedSenderName = searchParams.get('sn')!;
  const senderName = decodeText(encodedSenderName);
  const senderEmail = searchParams.get('se')!;

  const handleClick = async () => {
    setLoading(true);
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        to: decodeText(senderEmail),
        response: selectedAnswer,
        responder: responderName,
        senderName,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      console.error(error);
      setLoading(false);
      return toast({
        title: `Oops! Something went wrong (╥﹏╥)`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }

    setLoading(false);
    onClose();
    return toast({
      title: `Thanks! We'll let ${senderName} know (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧`,
      status: 'success',
      duration: 9000,
      isClosable: true,
      onCloseComplete: () => router.push('/'),
    });
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
