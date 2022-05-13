import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import GoBack from '../components/GoBack'

const About: NextPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-black">
      <Head>
        <title>Archishman App | A fun application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="app">
        <Header />
        <GoBack />
        <main className="w-full bg-white pb-1">
          <h1 className="p-3 pb-5 text-4xl font-bold text-slate-900 underline">
            About Archishman
          </h1>
          <div className="my-2 mx-5">
            Archishman (born 19 Sept 2007), also known as 'asshole' by his
            classmates, is the most weird teen in India. Currently studying in K
            V Ballygunge, however, always dreams of private schools like ‘The
            Indus Valley World School’ also known as ‘Nazayaz ghar of
            Archismaan’.
            <br />
            <br /> Archismaan is the only guy with whom no one wants to sit
            because no one is fond of becoming a mental at such a young age. The
            only thing he can do is to showoff his marks even when he is not the
            topper. <br />
            <br />
            He says that he will come into relationship only when he becomes a
            successful person, however, he dont know that his life is similar to
            the life of Newton (dying single). The only difference is Archishman
            is dumber.
            <br /> <br />
            He was once sold by the creator of this app to Aryan and Joyjeet at
            50% shares from both the investors. However, their company was soon
            closed as they invested their money and time on this disaster. (lol)
          </div>
        </main>
      </div>
    </div>
  )
}

export default About
