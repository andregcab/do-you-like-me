import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from '@types';
import styles from '@styles/NotebookPaper.module.scss';
import backIcon from '@public/noun-hand-drawn-arrow-2930303.png';

const NotebookPaper = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.page}>
      <div className={`${styles.l_margin} ${styles.margin}`}>
        <div className={`${styles.hole} ${styles.first_hole}`}></div>
        <div className={`${styles.hole} ${styles.second_hole}`}></div>
        <div className={`${styles.hole} ${styles.third_hole}`}></div>
      </div>
      <div className={`${styles.r_margin} ${styles.margin}`}></div>
      <header>
        <Link className={styles.homeBtn} href="/">
          <Image src={backIcon} alt="back" />
        </Link>
        <span className={styles.page_title}>Do u like me?</span>
      </header>
      {children}
    </div>
  );
};

export default NotebookPaper;
