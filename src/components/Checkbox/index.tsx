import { Option } from '@types';
import styles from '@styles/Checkbox.module.scss';

interface CheckboxProps {
  option: Option;
  checked: boolean;
}

const Checkbox = ({ option, checked }: CheckboxProps) => {
  const { label, actions } = option;

  return (
    <>
      <input
        className={styles.input}
        id={label}
        checked={checked}
        type="checkbox"
        onClick={() => {
          actions.forEach((action) => action());
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
