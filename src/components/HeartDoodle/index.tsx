import Image from 'next/image';
import heartDoodle from '@public/noun-heart-doodle-335497.svg';
import styles from '@styles/HeartDoodle.module.scss';

const HeartDoodle = () => {
  return (
    <Image
      className={styles.heartDoodle}
      src={heartDoodle}
      alt="heartDoodle"
    />
  );
};

export default HeartDoodle;
