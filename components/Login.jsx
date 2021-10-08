import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

export default function Login() {
  return (
    <div>
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
    </div>
  )
}
