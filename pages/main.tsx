import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

const Main: NextPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-black">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="app">
        <Header />
        <main className="my-2">
          <h1 className="p-3 pb-5 text-4xl font-bold text-slate-900">
            Explore him more
          </h1>
          <div>
            <ul className="mx-10 flex list-none flex-col justify-center gap-4">
              <Link href="/about">
                <li className="cursor-pointer rounded-full border-2 border-black bg-[#3FD8CF] px-5 py-4 text-center text-xl font-semibold transition active:opacity-50">
                  About Archishman
                </li>
              </Link>
              <Link href="/game_list">
                <li className="cursor-pointer rounded-full border-2 border-black bg-[#3FD8CF] px-5 py-4 text-center text-xl font-semibold transition active:opacity-50">
                  The Archishman Game
                </li>
              </Link>
              <Link href="/review">
                <li className="cursor-pointer rounded-full border-2 border-black bg-[#3FD8CF] px-5 py-4 text-center text-xl font-semibold transition active:opacity-50">
                  Reviews
                </li>
              </Link>
              <Link href="/nft">
                <li className="cursor-pointer rounded-full border-2 border-black bg-[#3FD8CF] px-5 py-4 text-center text-xl font-semibold transition active:opacity-50">
                  Check out his NFT
                </li>
              </Link>
              <Link href="/buyhim">
                <li className="cursor-pointer rounded-full border-2 border-black bg-[#3FD8CF] px-5 py-4 text-center text-xl font-semibold transition active:opacity-50">
                  Buy Him?
                </li>
              </Link>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Main
