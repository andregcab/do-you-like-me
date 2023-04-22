import { useContext } from 'react';
import { AppContext } from '@context';
import { Answers } from '@types';
import styles from '@styles/Checkbox.module.scss';

interface CheckboxProps {
  cbId: Answers;
  checked: boolean;
}

const Checkbox = ({ cbId, checked }: CheckboxProps) => {
  const { setAnswer } = useContext(AppContext);

  return (
    <>
      <input
        className={styles.input}
        id={cbId}
        checked={checked}
        type="checkbox"
        onClick={() => setAnswer(cbId)}
        readOnly
      />
      <label className={styles.label} htmlFor={cbId}>
        <div className={styles.tick} />
      </label>
    </>
  );
};

export default Checkbox;
