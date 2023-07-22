import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AppContext } from '@context';
import { Answers, Options } from '@types';
// import HeartDoodle from '@components/HeartDoodle';
import { delay } from '@utils';
import OptionsList from '@components/OptionsList';

const Main = () => {
  const router = useRouter();
  const { setSelectedAnswer, setResponding } = useContext(AppContext);

  const linkToExternal = (link: string) => {
    delay(() => window.open(link, '_blank'));
  };
  const linkToInternal = (link: string) => {
    delay(() => router.push(link));
  };

  const askActions = [
    () => setSelectedAnswer(Answers.ASK),
    () => linkToInternal('/send-note'),
  ];
  const seeActions = [
    () => setSelectedAnswer(Answers.SEE),
    () => linkToInternal('/note'),
  ];
  const whoActions = [
    () => setSelectedAnswer(Answers.WHO),
    () => linkToExternal('https://github.com/andregcab'),
  ];
  const secretActions = [
    () => setSelectedAnswer(Answers.SECRET),
    () => linkToExternal('https://www.climatetownproductions.com/'),
  ];

  const options: Options = [
    { label: Answers.ASK, actions: askActions },
    { label: Answers.SEE, actions: seeActions },
    { label: Answers.WHO, actions: whoActions },
    { label: Answers.SECRET, actions: secretActions },
  ];

  useEffect(() => {
    setSelectedAnswer(null);
    setResponding(false);
  }, [setSelectedAnswer, setResponding]);

  return (
    <>
      <Head>
        <title>Do u like me?</title>
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
      {/* <HeartDoodle /> */}
      <OptionsList options={options} />
    </>
  );
};

export default Main;
