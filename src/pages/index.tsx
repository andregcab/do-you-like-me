import { useContext } from 'react';
import Head from 'next/head';
import { AppContext } from '@context';
import { Questions } from '@types';
import OptionsList from '@components/OptionsList';
import styles from '@styles/LandingPage.module.scss';

const Main = () => {
  const { setEditing } = useContext(AppContext);

  const options = [
    { label: Questions.ASK, action: () => setEditing(true) },
    { label: Questions.SEE, action: () => setEditing(true) },
    { label: Questions.WHO, action: () => setEditing(true) },
    { label: Questions.SECRET, action: () => setEditing(true) },
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
