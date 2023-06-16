import { useContext } from 'react';
import { AppContext } from '@context';
import { Options } from '@types';
import Checkbox from '@components/Checkbox';
import SendButton from '@components/SendButton';
import styles from '@styles/Option.module.scss';

interface OptionProps {
  option: Options;
}

const Option = ({ option }: OptionProps) => {
  const { selectedOption } = useContext(AppContext);

  const checked = selectedOption === option;

  return (
    <div className={styles.wrapper}>
      <Checkbox option={option} checked={checked} />
      <label className={styles.label} htmlFor={option}>
        {option}
      </label>
      <SendButton checked={checked} />
    </div>
  );
};

export default Option;
