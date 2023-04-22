import { Answers } from '@types';
import Answer from '@components/Answer';
import styles from '@styles/Questions.module.scss';

const Questions = () => {
  return (
    <div className={styles.container}>
      <Answer title={Answers.YES} />
      <Answer title={Answers.NO} />
      <Answer title={Answers.MAYBE} />
    </div>
  );
};

export default Questions;
