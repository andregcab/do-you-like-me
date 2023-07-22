import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

type TransitionProps = {
  children: React.ReactElement;
};

const Transition = ({ children }: TransitionProps) => {
  const { asPath } = useRouter();

  const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.3,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={asPath}
        variants={variants}
        animate="in"
        initial="out"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
