// import Image from 'next/image';
import { PropsWithChildren } from '@types';
import styles from '@styles/NotebookPaper.module.scss';
// import uwuImage from '@public/Stylized_uwu_emoticon.png';

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
        <span className={styles.page_title}>Do u like me?</span>
        {/* <Image src={uwuImage} alt="UwU" width={100} height={50} /> */}
      </header>
      {children}
    </div>
  );
};

export default NotebookPaper;
