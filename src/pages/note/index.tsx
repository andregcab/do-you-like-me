import { useContext, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { AppContext } from '@context';
import { Answers, Options } from '@types';
import OptionsList from '@components/OptionsList';
import styles from '@styles/PassedNote.module.scss';

const Note = () => {
  const searchParams = useSearchParams();
  const { setResponding, setSelectedAnswer } = useContext(AppContext);

  const yesActions = [() => setSelectedAnswer(Answers.YES)];
  const noActions = [() => setSelectedAnswer(Answers.NO)];
  const maybeActions = [() => setSelectedAnswer(Answers.MAYBE)];

  const options: Options = [
    { label: Answers.YES, actions: yesActions },
    { label: Answers.NO, actions: noActions },
    { label: Answers.MAYBE, actions: maybeActions },
  ];

  const senderName = searchParams.get('sn');
  const senderEmail = searchParams.get('se');

  useEffect(() => {
    if (senderEmail && senderName) {
      setResponding(true);
    }
  }, [senderEmail, senderName, setResponding]);

  return (
    <OptionsList className={styles.passed_note} options={options} />
  );
};

export default Note;
