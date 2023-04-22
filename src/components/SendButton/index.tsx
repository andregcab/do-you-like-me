import Image from 'next/image';
import PaperPlaneIcon from '@public/paper-plane-icon.png';

interface SendButtonProps {
  checked: boolean;
}

const SendButton = ({ checked }: SendButtonProps) => {
  if (!checked) return null;

  const handleClick = () => {
    console.log('sent');
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '3rem',
        cursor: 'pointer',
      }}
    >
      <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>
        let them know
      </span>
      <Image
        alt="paper plane"
        src={PaperPlaneIcon}
        height={40}
        width={40}
      />
    </div>
  );
};

export default SendButton;
