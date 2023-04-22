import { PropsWithChildren } from 'react';
import styles from '@styles/Questions.module.scss';

const Questions = ({ children }: PropsWithChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default Questions;
