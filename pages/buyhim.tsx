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
            Buy Archishman
          </h1>
          <div className="mx-2 flex flex-col justify-around gap-3 rounded-lg border-2 border-black bg-white p-2">
            <div>
              <b>Product: </b>Archishman
              <br />
              <b>Seller: </b>Aditya Roy
            </div>
            <div>
              <ul className="flex flex-col gap-1 text-xl">
                <li>
                  <b>Watch - </b>₹4000
                </li>
                <li>
                  <b>Shoes - </b>₹6000
                </li>
                <li>
                  <b>Water Bottle - </b>₹700
                </li>
                <li>
                  <b>Uniform - </b>₹1500
                </li>
                <li>
                  <b>Pencil Box - </b>₹400
                </li>
                <li>
                  <b>Specs - </b>₹4000
                </li>
                <li>
                  <b>Tax and Shipping Charge - </b>₹400
                </li>
                <li className="py-2 text-2xl">
                  <b className="text-red-800">Total - </b>₹17000
                </li>
                <li>
                  <b>Aukat - </b>₹-16999
                </li>
                <li className="m-2 rounded-full border-2 border-black p-2 text-3xl">
                  <b className="text-red-800">Grand Total - </b>₹1
                </li>
              </ul>
            </div>
          </div>
          <div
            className="mx-5 mt-1 cursor-pointer rounded-lg bg-white p-3 text-center text-2xl font-bold"
            onClick={() => {
              const audio = new Audio(
                'https://speak.streams.live/media/speech_generate/2022/05/08/output_2022_05_08_10_34_31_up3miw1.mp3'
              )
              audio.play()
            }}
          >
            Pay
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
