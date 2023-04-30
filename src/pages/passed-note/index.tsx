import { Options } from '@types';
import Option from '@components/Option';
import styles from '@styles/Questions.module.scss';

const PassedNote = () => {
  return (
    <div className={styles.container}>
      <Option option={Options.YES} />
      <Option option={Options.NO} />
      <Option option={Options.MAYBE} />
    </div>
  );
};

export default PassedNote;
