import { useContext } from 'react';
import { AppContext } from '@context';
import { Options } from '@types';
import styles from '@styles/Checkbox.module.scss';

interface CheckboxProps {
  option: Options;
  checked: boolean;
}

const Checkbox = ({ option, checked }: CheckboxProps) => {
  const { setSelectedOption } = useContext(AppContext);

  return (
    <>
      <input
        className={styles.input}
        id={option}
        checked={checked}
        type="checkbox"
        onClick={() => setSelectedOption(option)}
        readOnly
      />
      <label className={styles.label} htmlFor={option}>
        <div className={styles.tick} />
      </label>
    </>
  );
};

export default Checkbox;
