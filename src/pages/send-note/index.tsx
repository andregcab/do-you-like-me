import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
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

const EmailForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  function onSubmit(values: FormData) {
    console.log({ values });
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box>
        <FormControl isInvalid={!!errors.yourEmail?.message}>
          <FormLabel htmlFor="yourEmail">
            Email where you&apos;ll get the result
          </FormLabel>
          <Input
            id="yourEmail"
            placeholder="email address"
            {...register('yourEmail')}
          />
          <FormErrorMessage>
            <span>{errors.yourEmail?.message}</span>
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default EmailForm;

// TODO:

// 1. create an actual landing page file
// 2. migrate this code to another component called idk
// 3. convert the "new" form component and page component to routes
// 4. the landing page will act as a navigator component
// 5. choices will be send to someone, check out page, check out creator (me), and a fourth sillier thing (secret thing meme?)
