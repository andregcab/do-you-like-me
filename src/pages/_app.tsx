import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import AppContextProvider from '@context';
import TransitionWrapper from '@components/TransitionWrapper';
import NotebookPaper from '@components/NotebookPaper';
import '@styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppContextProvider>
        {/* <TransitionWrapper> */}
        <NotebookPaper>
          <Component {...pageProps} />;
        </NotebookPaper>
        {/* </TransitionWrapper> */}
      </AppContextProvider>
    </ChakraProvider>
  );
}
