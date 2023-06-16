import { Options } from '@types';
import Option from '@components/Option';

interface OptionsListProps {
  className: string;
  options: Options;
  showSendBtn?: boolean;
}

const OptionsList = ({
  className,
  options,
  showSendBtn,
}: OptionsListProps) => {
  return (
    <div className={className}>
      {options.map((option) => {
        return (
          <Option
            key={option.label}
            option={option}
            showSendBtn={showSendBtn}
          />
        );
      })}
    </div>
  );
};

export default OptionsList;
