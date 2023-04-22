import Head from 'next/head';
import { Answers } from '@types';
import AppContextProvider from '@context';
import Answer from '@components/Answer';
import Page from '@components/Page';
import Questions from '@components/Questions';

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
          <Page>
            <Questions>
              <Answer title={Answers.YES} />
              <Answer title={Answers.NO} />
              <Answer title={Answers.MAYBE} />
            </Questions>
          </Page>
        </AppContextProvider>
      </main>
    </>
  );
};

export default Main;
