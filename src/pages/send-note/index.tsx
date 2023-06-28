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
        <Box maxW="2xl">
          <FormControl isInvalid={!!errors.yourEmail?.message}>
            <FormLabel margin={2} maxW="80%" htmlFor="yourEmail">
              Create a sharable link using your email. Send this link
              to anyone and receive their response via email.
            </FormLabel>
            <Box display="flex" alignItems="center" flexWrap="wrap">
              <Input
                id="yourEmail"
                margin={2}
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
        <Box maxW="100%">
          {generatedLink && (
            <Card mt={14} variant="elevated">
              <CardBody flexWrap="wrap">
                <Text fontSize="xl">Your generated link</Text>
                <Code
                  display="initial"
                  maxW="100%"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  colorScheme="orange"
                >
                  {generatedLink}
                </Code>
                <Button ml={2} onClick={onCopy}>
                  {hasCopied ? 'Copied!' : 'Copy'}
                </Button>
              </CardBody>
            </Card>
          )}
        </Box>
      </form>
    </>
  );
};

export default CreateLink;

// TODO: add back button after generate link
//
