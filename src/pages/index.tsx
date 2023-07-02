import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AppContext } from '@context';
import { Answers, Options } from '@types';
import OptionsList from '@components/OptionsList';
import styles from '@styles/LandingPage.module.scss';

const Main = () => {
  const router = useRouter();

  const { setSelectedAnswer } = useContext(AppContext);

  const askActions = [() => router.push('/send-note')];
  const seeActions = [() => router.push('/note')];
  const whoActions = [
    () => {
      /*page with my links?*/
    },
  ];
  const secretActions = [
    () => {
      /* promote climate town? */
    },
  ];

  const options: Options = [
    { label: Answers.ASK, actions: askActions },
    { label: Answers.SEE, actions: seeActions },
    { label: Answers.WHO, actions: whoActions },
    { label: Answers.SECRET, actions: secretActions },
  ];

  useEffect(() => {
    setSelectedAnswer(null);
  }, [setSelectedAnswer]);

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
      </Head>
      <OptionsList
        className={styles.landing_page}
        options={options}
      />
    </>
  );
};

export default Main;
