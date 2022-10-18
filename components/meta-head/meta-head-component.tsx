
import Head from 'next/head';
import { ReactElement } from 'react';

interface MetatagsParams {
  title: string;
  description?: string;
  image?: string;
  fav?: string;
}

const MetaHead: React.FC<MetatagsParams> = ({ title, description, image, fav }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@fireship_dev" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

      <meta name="og:title" content={title} />
      {description && <meta name="og:description" content={description} />}
      {image && <meta name="og:image" content={image} />}
      
      {fav ? 
        <>
          <link rel="shortcut icon" href={`/${fav}.ico`}  type="image/x-icon" />
          <link rel="icon" href={`/${fav}.ico`}  type="image/x-icon" />
        </>
        :
        <>
          <link rel="shortcut icon" href="/favicon.ico"  type="image/x-icon" />
          <link rel="icon" href="/favicon.ico"  type="image/x-icon" />
        </>
      }
    </Head>
  );
};

export default MetaHead;