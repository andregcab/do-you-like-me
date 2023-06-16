import { useContext } from 'react';
import { AppContext } from '@context';
import { Option } from '@types';
import styles from '@styles/Checkbox.module.scss';

interface CheckboxProps {
  option: Option;
  checked: boolean;
}

const Checkbox = ({ option, checked }: CheckboxProps) => {
  const { setSelectedOption } = useContext(AppContext);

  const { label, action } = option;

  return (
    <>
      <input
        className={styles.input}
        id={label}
        checked={checked}
        type="checkbox"
        onClick={() => {
          setSelectedOption(option);
          action();
        }}
        readOnly
      />
      <label className={styles.label} htmlFor={label}>
        <div className={styles.tick} />
      </label>
    </>
  );
};

export default Checkbox;
