import { useContext } from 'react';
import { AppContext } from '@context';
import { Answers } from '@types';
import Checkbox from '@components/Checkbox';
import SendButton from '@components/SendButton';
import styles from '@styles/Answer.module.scss';

interface AnswerProps {
  title: Answers;
}

const Answer = ({ title }: AnswerProps) => {
  const { answer } = useContext(AppContext);

  const checked = answer === title;

  return (
    <div className={styles.wrapper}>
      <Checkbox cbId={title} checked={checked} />
      <label className={styles.label} htmlFor={title}>
        {title}
      </label>
      {/* some logic here only to show when the app is in a certain
      "state", should probably be triggered in context from either url
      params only */}
      {/* <SendButton checked={checked} /> */}
    </div>
  );
};

export default Answer;
