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
            src="https://instagram.fccu2-2.fna.fbcdn.net/v/t51.2885-15/279923450_3253985274830115_7853505513810334383_n.jpg?stp=dst-jpg_e15_p240x240&_nc_ht=instagram.fccu2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=8iHTev7vSAYAX_Z3Yg9&edm=ABJHkxYAAAAA&ccb=7-4&ig_cache_key=MjgzMjI2NzY2MTkyOTg2NzYxOQ%3D%3D.2-ccb7-4&oh=00_AT_oo0dqu589oQLNMJuIwA3FEczIyftjLjcD3hKVK7JKdQ&oe=627C475A&_nc_sid=fa978c"
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
