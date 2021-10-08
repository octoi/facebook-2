import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { signIn } from 'next-auth/client'

export default function Login() {
  return (
    <div className='grid place-items-center'>
      <Head>
        <title>Login</title>
        <link href='https://links.papareact.com/5me' rel='icon' />
      </Head>

      <Image
        src='https://links.papareact.com/t4i'
        height={400}
        width={400}
        objectFit='contain'
        alt='Facebook'
      />

      <h1 onClick={signIn} className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login With Facebook</h1>
    </div>
  )
}
