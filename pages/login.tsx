import type { NextPage } from 'next'
import Head from 'next/head'

const Login: NextPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-black">
      <Head>
        <title>Archishman App | A fun application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="app"></div>
    </div>
  )
}

export default Login
