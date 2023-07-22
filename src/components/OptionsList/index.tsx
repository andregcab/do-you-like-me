import { Options } from '@types';
import Option from '@components/Option';
import styles from '@styles/Options.module.scss';

interface OptionsListProps {
  options: Options;
}

const OptionsList = ({ options }: OptionsListProps) => {
  return (
    <div className={styles.options}>
      {options.map((option) => {
        return <Option key={option.label} option={option} />;
      })}
    </div>
  );
};

export default OptionsList;
