import Head from 'next/head';
import { getSession } from '../node_modules/next-auth/client';
import { db } from '../firebase';

import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

export default function Home({ session, posts }) {
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
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
