import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Options } from '@types';
import OptionsList from '@components/OptionsList';
import styles from '@styles/LandingPage.module.scss';

const options = [
  Options.ASK,
  Options.SEE,
  Options.WHO,
  Options.SECRET,
];

const Main = () => {
  return (
    <>
      <Head>
        <title>Do you like me?</title>
        <meta
          name="description"
          content="An app for seeing if someone likes you"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.cdnfonts.com/css/handwriting"
          rel="stylesheet"
        />
      </Head>
      <Box>
        <OptionsList
          className={styles.landing_page}
          options={options}
        />
      </Box>
    </>
  );
};

export default Main;
