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
import { encodeText } from '@utils';
import styles from '@styles/EmailForm.module.scss';

const schema = yup
  .object({
    yourEmail: yup
      .string()
      .email()
      .required('Need your email, we wont sell it. Probably.'),
    yourName: yup.string().required('Dont be a creep, whos it from?'),
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
    console.log({ values }); // TODO: add name to link
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const { yourEmail } = values;
        const encodedEmail = encodeText(yourEmail);
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
          <FormControl isInvalid={!!errors.yourEmail?.message}>
            <Box display="flex" alignItems="center" flexWrap="wrap">
              <FormLabel margin={2} maxW="80%" htmlFor="yourName">
                Name
              </FormLabel>
              <Input
                id="yourName"
                margin={2}
                placeholder="secret admirer"
                {...register('yourName')}
              />
              <FormLabel margin={2} maxW="80%" htmlFor="yourEmail">
                Email
              </FormLabel>
              <Input
                id="yourEmail"
                margin={2}
                placeholder="email address"
                {...register('yourEmail')}
              />
              <Button
                ml={2}
                mt={8}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Generate link
              </Button>
            </Box>
            {/* TODO Add another error for name */}
            <FormErrorMessage>
              <span>{errors.yourEmail?.message}</span>
            </FormErrorMessage>
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

export default CreateLink;

// TODO: add back button after generate link
