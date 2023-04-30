import Head from 'next/head';
import AppContextProvider from '@context';
import { Box } from '@chakra-ui/react';
import NotebookPaper from '@components/NotebookPaper';
import OptionsList from '@components/OptionsList';
import { Options } from '@types';
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
      <main>
        <AppContextProvider>
          <NotebookPaper>
            <Box>
              <OptionsList
                className={styles.options_list_overrides}
                options={options}
              />
            </Box>
          </NotebookPaper>
        </AppContextProvider>
      </main>
    </>
  );
};

export default Main;
