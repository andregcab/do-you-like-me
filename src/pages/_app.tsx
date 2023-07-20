import { useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import AppContextProvider from '@context';
import TransitionWrapper from '@components/TransitionWrapper';
import NotebookPaper from '@components/NotebookPaper';
import '@styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = useState(router.asPath);

  return (
    <ChakraProvider>
      <AppContextProvider>
        <TransitionWrapper>
          <NotebookPaper>
            <Component key={pageKey} {...pageProps} />;
          </NotebookPaper>
        </TransitionWrapper>
      </AppContextProvider>
    </ChakraProvider>
  );
}
