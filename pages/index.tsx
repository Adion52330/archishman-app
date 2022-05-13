import type { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-black">
      <Head>
        <title>Archishman App | A fun application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="app" className="flex flex-col items-center justify-around">
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/img-uploader-45692.appspot.com/o/files%2F280597997_114074697804250_8226332493429954697_n.jpg?alt=media&token=5acaf145-1792-4241-8cc5-710e8e3f7331"
            alt=""
            className="h-64 w-64 rounded-full border-2 border-black object-cover"
          />
          <h1 className="text-center text-5xl font-bold">
            <span className="gradient">Archishman</span> <br /> App
          </h1>
        </div>
        <div className="text-center">
          Made with hate <br /> by Adion
        </div>
        <div
          className="cursor-pointer rounded-full border-2 border-black bg-[#3FD8CF] p-5 text-lg font-semibold transition active:opacity-50"
          onClick={() => {
            Router.push('/main')
          }}
        >
          Tap Here to Start the Torture ;)
        </div>
      </div>
    </div>
  )
}

export default Home
