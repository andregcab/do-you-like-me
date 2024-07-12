import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useDisclosure } from '@chakra-ui/react';
import { AppContext } from '@context';
import { Answers, Options } from '@types';
import { encodeText } from '@utils';
// import HeartDoodle from '@components/HeartDoodle';
import OptionsList from '@components/OptionsList';
import SendModal from '@components/SendModal';

const Note = () => {
  const router = useRouter();
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

  const updateQueryParams = (key: string, value: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(key, value);

    router.push({
      pathname: window.location.pathname,
      search: queryParams.toString(),
    });
  };

  const encodedName = encodeText('Andre');
  const encodedEmail = encodeText('doulikemebot@gmail.com');

  useEffect(() => {
    updateQueryParams('sn', encodedName);
    updateQueryParams('se', encodedEmail);
  });

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
      <OptionsList options={options} />
      <SendModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Note;
