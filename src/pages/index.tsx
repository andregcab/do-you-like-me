import { useContext } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AppContext } from '@context';
import { Questions } from '@types';
import OptionsList from '@components/OptionsList';
import styles from '@styles/LandingPage.module.scss';

const Main = () => {
  const { setEditing } = useContext(AppContext);
  const router = useRouter();

  const askActions = [
    () => setEditing(true),
    () => router.push('/note'),
  ];
  const seeActions = [() => router.push('/note')];
  const whoActions = [() => setEditing(true)];
  const secretActions = [() => setEditing(true)];

  const options = [
    { label: Questions.ASK, actions: askActions },
    { label: Questions.SEE, actions: seeActions },
    { label: Questions.WHO, actions: whoActions },
    { label: Questions.SECRET, actions: secretActions },
  ];

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
