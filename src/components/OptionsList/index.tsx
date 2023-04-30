import { Options } from '@types';
import Option from '@components/Option';
import styles from '@styles/OptionsList.module.scss';

interface OptionsListProps {
  options: Array<Options>;
  className?: string;
}

const OptionsList = ({ options, className }: OptionsListProps) => {
  return (
    <div className={className || styles.container}>
      {options.map((option) => {
        return <Option key={option} option={option} />;
      })}
    </div>
  );
};

export default OptionsList;
