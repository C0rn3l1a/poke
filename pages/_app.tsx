import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import MetaHead from '../components/meta-head/meta-head-component';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
      <MetaHead 
        title='Poke' 
        description='Pokedex inspired site to lookup information about pokemon in general.' 
        image='https://cdn.dribbble.com/users/13774/screenshots/2908884/media/8c1f31b039f081d291f332af0645bda8.png' />
      <Component {...pageProps} />;
  </>
}

export default MyApp;
