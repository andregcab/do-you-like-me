import { Answers } from '@types';
import Answer from '@components/Answer';
import styles from '@styles/Questions.module.scss';

interface QuestionsProps {
  answers: Array<Answers>;
  className?: string;
}

const Questions = ({ answers, className }: QuestionsProps) => {
  return (
    <div className={className || styles.container}>
      {answers.map((answer) => {
        return <Answer key={answer} title={answer} />;
      })}
    </div>
  );
};

export default Questions;
