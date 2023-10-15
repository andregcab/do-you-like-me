import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
} from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { AppContext } from '@context';
import { decodeText } from '@utils';
import { emailService } from '@services';
import { useToast } from '@chakra-ui/react';

type EmailServiceProps = {
  onClose: () => void;
  responderName: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const useSendEmail = () => {
  const searchParams = useSearchParams();
  const { selectedAnswer } = useContext(AppContext);
  const toast = useToast();
  const router = useRouter();

  const encodedSenderName = searchParams.get('sn')!;
  const senderName = decodeText(encodedSenderName);
  const senderEmail = searchParams.get('se')!;

  const sendEmail = useCallback(
    async ({
      onClose,
      responderName,
      setLoading,
    }: EmailServiceProps) => {
      if (!selectedAnswer)
        return toast({
          title: `Oops! Something went wrong (╥﹏╥)`,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });

      setLoading(true);

      await emailService({
        senderEmail,
        selectedAnswer,
        responderName,
        senderName,
      })
        .then(() => {
          setLoading(false);
          onClose();
          router.push('/');

          return toast({
            title: `Thanks! We'll let ${senderName} know`,
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        })
        .catch(() => {
          setLoading(false);
          return toast({
            title: `Oops! Something went wrong (╥﹏╥)`,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        });
    },
    [router, selectedAnswer, senderEmail, senderName, toast]
  );

  return sendEmail;
};
