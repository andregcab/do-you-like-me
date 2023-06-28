import { useContext } from 'react';
import Image from 'next/image';
import { AppContext } from '@context';
import PaperPlaneIcon from '@public/paper-plane-icon.png';
import styles from '@styles/SendButton.module.scss';

interface SendButtonProps {
  checked: boolean;
  show: boolean;
}

const SendButton = ({ checked, show }: SendButtonProps) => {
  const { editing } = useContext(AppContext);

  const hideButton = !show || !editing || !checked;

  if (hideButton) return null;

  const handleClick = async () => {
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        to: 'cabrerandre@gmail.com',
        responder: 'dre',
        response: 'yes',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      console.error(error);
      // toast with error
    }

    // trigger toast
  };

  return (
    // todo change this to a link v v v and instead of using router, use next link...maybe depending on user flow (checkbox - form - page vs checkbox page - form)
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
