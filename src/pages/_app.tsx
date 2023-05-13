import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import AppContextProvider from '@context';
import NotebookPaper from '@components/NotebookPaper';
import '@styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <NotebookPaper>
          <Component {...pageProps} />;
        </NotebookPaper>
      </AppContextProvider>
    </ChakraProvider>
  );
}
