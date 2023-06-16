import { useContext } from 'react';
import Image from 'next/image';
import { AppContext } from '@context';
import PaperPlaneIcon from '@public/paper-plane-icon.png';
import styles from '@styles/SendButton.module.scss';

interface SendButtonProps {
  checked: boolean;
}

const SendButton = ({ checked }: SendButtonProps) => {
  const { editing } = useContext(AppContext);
  if (!checked || !editing) return null;

  const handleClick = () => {
    console.log('sent');
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <span className={styles.text}>let them know</span>
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
