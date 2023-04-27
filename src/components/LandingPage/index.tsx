import { Box } from '@chakra-ui/react';
import { Answers } from '@types';
import Questions from '@components/Questions';
import styles from '@styles/LandingPage.module.scss';

const LandingPage = () => {
  const answers = [
    Answers.ASK,
    Answers.SEE,
    Answers.WHO,
    Answers.SECRET,
  ];

  return (
    <Box>
      <Questions
        className={styles.question_overrides}
        answers={answers}
      />
    </Box>
  );
};

export default LandingPage;

// TODO:

// 3. convert the "new" form component and page component to routes
// 4. the landing page will act as a navigator component
// 4.5 only show send button if url params exist, maybe some extra logic too
// 5. choices will be send to someone, check out page, check out creator (me), and a fourth sillier thing (secret thing meme?)
