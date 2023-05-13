import Head from 'next/head';
import { Options } from '@types';
import OptionsList from '@components/OptionsList';
import styles from '@styles/LandingPage.module.scss';

const OPTIONS = [
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
      </Head>
      <OptionsList
        className={styles.landing_page}
        options={OPTIONS}
      />
    </>
  );
};

export default Main;
