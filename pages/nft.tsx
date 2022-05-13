import type { NextPage } from 'next'
import Head from 'next/head'
import GoBack from '../components/GoBack'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-black">
      <Head>
        <title>Archishman App | A fun application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="app">
        <Header />
        <GoBack />
        <main className="w-full pb-1">
          <h1 className="p-2 text-4xl font-bold text-slate-900">
            Archishman's NFT
          </h1>
          <div className="mx-2 flex flex-col justify-around gap-3 rounded-lg border-2 border-black p-2">
            <h2 className="text-2xl font-bold text-[#403b3b]">iArchishman</h2>
            <div className="flex gap-5">
              <div className="text-2xl font-bold">
                Owned by{' '}
                <a
                  href="https://instagram.com/velocity.coder_aditya"
                  target="_blank"
                  className="text-cyan-500"
                >
                  Adion_Codes
                </a>
              </div>
              <div>
                <img
                  src="https://lh3.googleusercontent.com/gpqz8GFlt2JUuTQ6bDGkNsuDZRsjeD0JZlexyrlzmFX0Qdqd5_3gYIpHO6WgbW5z0fySfd7i1O7IJrNLOWP7S3dBnd6lW0MhaLX-yg=w600"
                  alt=""
                  className="height rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="text-gray-900">
              This guy's name is Archishman. This guy alone costs 15000, which
              includes: - His spectacles = 4000 - His Shoes = 6000 - His Watch =
              2000 - His Aukat/Izzat/Personality = Error 404 - He himself =
              negligible - Other stuff
            </div>
          </div>
          <div className="pt-2 text-center text-xl font-semibold">
            <a
              href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/52253312860446780698942709776357831544678193073412121231686012556409210667009/"
              className="text-slate-700"
            >
              Click Here
            </a>{' '}
            to buy{' '}
            <span className="text-sm text-red-800">(at your own risk)</span>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
