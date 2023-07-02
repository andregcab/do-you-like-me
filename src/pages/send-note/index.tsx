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
  Heading,
  Highlight,
  Input,
  Text,
  useClipboard,
} from '@chakra-ui/react';
import { encodeText, decodeText } from '@utils';
import styles from '@styles/EmailForm.module.scss';

const schema = yup
  .object({
    senderEmail: yup
      .string()
      .email()
      .required('Need your email, we wont sell it. Probably.'),
    senderName: yup.string().required('Let them know who its from.'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const SendNote = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const [generatedLink, setGeneratedLink] = useState<string>();
  const { onCopy, setValue, hasCopied } = useClipboard('');

  const onSubmit = (values: FormData) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const { senderEmail, senderName } = values;
        const encodedEmail = encodeText(senderEmail);
        const encodedName = encodeText(senderName);
        const link = `http://localhost:3000/note/?se=${encodedEmail}&sn=${encodedName}`;

        setValue(link);
        setGeneratedLink(link);
        resolve();
      }, 500);
    });
  };

  const formInvalid = !!(
    errors.senderEmail?.message || errors.senderName?.message
  );

  return (
    <>
      <form
        className={styles.container}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Card p={4} maxW="2xl">
          <Box m={3}>
            <Heading
              as="h3"
              size="lg"
              fontFamily="inherit"
              lineHeight="tall"
            >
              <Highlight
                query="sharable link"
                styles={{
                  px: '2',
                  py: '1',
                  rounded: 'full',
                  bg: 'orange.100',
                }}
              >
                Create a sharable link using your name and email
              </Highlight>
            </Heading>
          </Box>
          <FormControl isInvalid={formInvalid}>
            <Box maxW="lg ">
              <Box mb={4}>
                <FormLabel htmlFor="senderName">senderName</FormLabel>
                <Input id="senderName" {...register('senderName')} />
                <FormErrorMessage mt={3}>
                  <span>{errors.senderName?.message}</span>
                </FormErrorMessage>
              </Box>
              <Box mb={4}>
                <FormLabel htmlFor="senderEmail">
                  senderEmail
                </FormLabel>
                <Input
                  id="senderEmail"
                  {...register('senderEmail')}
                />
                <FormErrorMessage mt={3}>
                  <span>{errors.senderEmail?.message}</span>
                </FormErrorMessage>
              </Box>
              <Button
                ml={2}
                mt={4}
                fontSize="xl"
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Generate link
              </Button>
            </Box>
          </FormControl>
        </Card>
        <Box maxW="100%">
          {generatedLink && (
            <Card mt={14} variant="elevated">
              <CardBody>
                <Text fontSize="xl">
                  Copy this link and send to whoever you want. Its
                  kind of like passing a note!
                </Text>
                <Box display="flex" alignItems="center">
                  <Code
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    colorScheme="orange"
                    maxW="lg"
                  >
                    {generatedLink}
                  </Code>
                  <Button ml={2} onClick={onCopy}>
                    {hasCopied ? 'Copied!' : 'Copy'}
                  </Button>
                </Box>
              </CardBody>
            </Card>
          )}
        </Box>
      </form>
    </>
  );
};

export default SendNote;

// TODO: add back button after generate link
