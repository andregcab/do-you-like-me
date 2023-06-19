import { Questions } from '@types';
import OptionsList from '@components/OptionsList';
import styles from '@styles/PassedNote.module.scss';

const PassedNote = () => {
  const yesActions = [() => console.log('yes')];
  const noActions = [() => console.log('no')];
  const maybeActions = [() => console.log('maybe')];

  const options = [
    { label: Questions.YES, actions: yesActions },
    { label: Questions.NO, actions: noActions },
    { label: Questions.MAYBE, actions: maybeActions },
  ];

  return (
    <OptionsList
      showSendBtn
      className={styles.passed_note}
      options={options}
    />
  );
};

export default PassedNote;
