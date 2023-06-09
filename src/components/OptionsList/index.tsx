import { Options } from '@types';
import Option from '@components/Option';

interface OptionsListProps {
  className: string;
  options: Options;
}

const OptionsList = ({ className, options }: OptionsListProps) => {
  return (
    <div className={className}>
      {options.map((option) => {
        return <Option key={option.label} option={option} />;
      })}
    </div>
  );
};

export default OptionsList;
