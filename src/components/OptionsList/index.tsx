import { Options } from '@types';
import Option from '@components/Option';
import styles from '@styles/LandingPage.module.scss';

interface OptionsListProps {
  className: string;
  options: Options;
}

const OptionsList = ({ className, options }: OptionsListProps) => {
  return (
    <div className={styles.landing_page}>
      {options.map((option) => {
        return <Option key={option.label} option={option} />;
      })}
    </div>
  );
};

export default OptionsList;
