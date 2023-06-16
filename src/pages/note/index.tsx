import { Questions } from '@types';
import OptionsList from '@components/OptionsList';
import styles from '@styles/PassedNote.module.scss';

const PassedNote = () => {
  const options = [
    { label: Questions.YES, action: () => console.log('yes') },
    { label: Questions.NO, action: () => console.log('no') },
    { label: Questions.MAYBE, action: () => console.log('maybe') },
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
