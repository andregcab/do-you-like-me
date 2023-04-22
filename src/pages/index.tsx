import Head from 'next/head';
import AppContextProvider from '@context';
import Page from '@components/Page';
import LandingPage from '@components/LandingPage';
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
            <LandingPage />
            <Questions />
          </Page>
        </AppContextProvider>
      </main>
    </>
  );
};

export default Main;
