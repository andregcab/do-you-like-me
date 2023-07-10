import { useContext, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDisclosure } from '@chakra-ui/react';
import { AppContext } from '@context';
import { Answers, Options } from '@types';
import BackButton from '@components/BackButton';
// import HeartDoodle from '@components/HeartDoodle';
import OptionsList from '@components/OptionsList';
import SendModal from '@components/SendModal';
import styles from '@styles/PassedNote.module.scss';

const Note = () => {
  const searchParams = useSearchParams();
  const { responding, setResponding, setSelectedAnswer } =
    useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenModal = () => {
    if (responding) {
      onOpen();
    }
  };

  const yesActions = [
    () => setSelectedAnswer(Answers.YES),
    () => handleOpenModal(),
  ];
  const noActions = [
    () => setSelectedAnswer(Answers.NO),
    () => handleOpenModal(),
  ];
  const maybeActions = [
    () => setSelectedAnswer(Answers.MAYBE),
    () => handleOpenModal(),
  ];

  const options: Options = [
    { label: Answers.YES, actions: yesActions },
    { label: Answers.NO, actions: noActions },
    { label: Answers.MAYBE, actions: maybeActions },
  ];

  const senderName = searchParams.get('sn');
  const senderEmail = searchParams.get('se');

  useEffect(() => {
    setSelectedAnswer(null);
    if (senderEmail && senderName) {
      setResponding(true);
    }
  }, [senderEmail, senderName, setResponding, setSelectedAnswer]);

  return (
    <>
      {/* <HeartDoodle /> */}
      <BackButton />
      <OptionsList className={styles.passed_note} options={options} />
      <SendModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Note;
