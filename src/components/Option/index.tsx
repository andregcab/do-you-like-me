import { useContext } from 'react';
import { AppContext } from '@context';
import { Option } from '@types';
import Checkbox from '@components/Checkbox';
import SendButton from '@components/SendButton';
import styles from '@styles/Option.module.scss';

interface OptionProps {
  option: Option;
  showSendBtn?: boolean;
}

const Option = ({ option, showSendBtn = false }: OptionProps) => {
  const { selectedOption } = useContext(AppContext);

  const { label } = option;
  const checked = selectedOption?.label === label;

  return (
    <div className={styles.wrapper}>
      <Checkbox option={option} checked={checked} />
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <SendButton show={showSendBtn} checked={checked} />
    </div>
  );
};

export default Option;
