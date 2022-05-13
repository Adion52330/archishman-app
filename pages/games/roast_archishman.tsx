import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import GoBack from '../../components/GoBack'

const Roast: NextPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-black">
      <Head>
        <title>Archishman App | A fun application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="app">
        <Header />
        <GoBack />
        <main className="w-full bg-white pb-1"></main>
      </div>
    </div>
  )
}

export default Roast
