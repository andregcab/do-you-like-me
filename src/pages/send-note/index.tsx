import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  Button,
  Card,
  CardBody,
  Code,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useClipboard,
} from '@chakra-ui/react';
import { encodeEmail } from '@utils';
import styles from '@styles/EmailForm.module.scss';

const schema = yup
  .object({
    yourEmail: yup
      .string()
      .email()
      .required('Need your email, we wont sell it. Probably.'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const CreateLink = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const [generatedLink, setGeneratedLink] = useState<string>();
  const { onCopy, setValue, hasCopied } = useClipboard('');

  function onSubmit(values: FormData) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const { yourEmail } = values;
        const encodedEmail = encodeEmail(yourEmail);
        const link = `http://localhost:3000/note/${encodedEmail}`;
        setValue(link);
        setGeneratedLink(link);
        resolve();
      }, 500);
    });
  }

  return (
    <>
      <form
        className={styles.container}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box maxW="xl">
          <FormControl isInvalid={!!errors.yourEmail?.message}>
            <FormLabel htmlFor="yourEmail">
              Create a sharable link using your email. Send this link
              to anyone and receive their response via email.
            </FormLabel>
            <Box display="flex" alignItems="center">
              <Input
                id="yourEmail"
                placeholder="email address"
                {...register('yourEmail')}
              />

              <Button
                ml={2}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Generate link
              </Button>
            </Box>
            <FormErrorMessage>
              <span>{errors.yourEmail?.message}</span>
            </FormErrorMessage>
          </FormControl>
        </Box>
        {generatedLink && (
          <Card mt={10} variant="elevated">
            <CardBody>
              <Text fontSize="xl">Your generated link</Text>
              <Code marginRight={2} colorScheme="orange">
                {generatedLink}
              </Code>
              <Button onClick={onCopy}>
                {hasCopied ? 'Copied!' : 'Copy'}
              </Button>
            </CardBody>
          </Card>
        )}
      </form>
    </>
  );
};

export default CreateLink;

// TODO: add back button after generate link
//
