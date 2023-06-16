import { Options } from '@types';
import OptionsList from '@components/OptionsList';
import styles from '@styles/PassedNote.module.scss';

const OPTIONS = [Options.YES, Options.NO, Options.MAYBE];

const PassedNote = () => {
  return (
    <OptionsList className={styles.passed_note} options={OPTIONS} />
  );
};

export default PassedNote;
