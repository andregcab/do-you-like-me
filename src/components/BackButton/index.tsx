import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@styles/BackButton.module.scss';
import backIcon from '@public/noun-hand-drawn-arrow-2930303.png';

const BACK_BTN_ROUTES = ['/note', '/send-note'];

const BackButton = () => {
  const { asPath } = useRouter();
  const [showBackBtn, setShowBackBtn] = useState(false);

  useEffect(() => {
    if (BACK_BTN_ROUTES.includes(asPath)) {
      setShowBackBtn(true);
    }
  }, [asPath]);

  if (!showBackBtn) return null;

  return (
    <Link className={styles.backBtn} href="/">
      <Image src={backIcon} alt="back" />
    </Link>
  );
};

export default BackButton;
