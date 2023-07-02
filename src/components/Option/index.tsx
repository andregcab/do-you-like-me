import { useContext } from 'react';
import { AppContext } from '@context';
import { Option } from '@types';
import Checkbox from '@components/Checkbox';
import SendButton from '@components/SendButton';
import styles from '@styles/Option.module.scss';

interface OptionProps {
  option: Option;
}

const Option = ({ option }: OptionProps) => {
  const { selectedAnswer } = useContext(AppContext);

  const { label } = option;
  const checked = selectedAnswer === label;

  return (
    <div className={styles.wrapper}>
      <Checkbox option={option} checked={checked} />
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <SendButton checked={checked} />
    </div>
  );
};

export default Option;
