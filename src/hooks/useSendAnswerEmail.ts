import { useCallback, useState } from 'react';
import type { EmailServiceProps } from '@types';
import { emailService } from '@services';

export const useSendAnswerEmail = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const sendAnswerEmail = useCallback(
    async ({
      responderName,
      selectedAnswer,
      senderEmail,
      senderName,
    }: EmailServiceProps) => {
      setLoading(true);

      await emailService({
        senderEmail,
        selectedAnswer,
        responderName,
        senderName,
      })
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    },
    []
  );

  return { error, loading, sendAnswerEmail };
};
