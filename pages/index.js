import Head from 'next/head';
import { getSession } from '../node_modules/next-auth/client';

import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook</title>
        <link href='https://links.papareact.com/5me' rel='icon' />
      </Head>

      <Header />

      <main className='flex'>
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
