import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import GoBack from '../components/GoBack'
import Link from 'next/link'

const Games: NextPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-black">
      <Head>
        <title>Archishman App | A fun application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="app">
        <Header />
        <GoBack />
        <main className="my-2">
          <h1 className="p-3 pb-5 text-4xl font-bold text-slate-900">
            Play his games
          </h1>
          <div>
            <ul className="mx-10 flex list-none flex-col justify-center gap-4">
              <Link href="/games/interview">
                <li className="cursor-pointer rounded-lg border-2 border-black bg-[#3FD8CF] px-5 py-4  transition active:opacity-50">
                  <p className="text-center text-xl font-semibold">
                    Interview him
                  </p>
                  <br />
                  <p>Ask him some questions and know his dark secrets.</p>
                </li>
              </Link>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Games
