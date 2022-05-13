import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import GoBack from '../../components/GoBack'

const Interview: NextPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-black">
      <Head>
        <title>Archishman App | A fun application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="app">
        <Header />
        <GoBack />
        <main className="mx-2 my-2 flex flex-col gap-2 rounded-lg border-2 border-black">
          <div>
            <img
              src="https://instagram.fccu2-2.fna.fbcdn.net/v/t51.2885-15/279923450_3253985274830115_7853505513810334383_n.jpg?stp=dst-jpg_e15_p240x240&_nc_ht=instagram.fccu2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=8iHTev7vSAYAX_Z3Yg9&edm=ABJHkxYAAAAA&ccb=7-4&ig_cache_key=MjgzMjI2NzY2MTkyOTg2NzYxOQ%3D%3D.2-ccb7-4&oh=00_AT_oo0dqu589oQLNMJuIwA3FEczIyftjLjcD3hKVK7JKdQ&oe=627C475A&_nc_sid=fa978c"
              alt=""
              className="h-40 w-full rounded-lg rounded-b-none object-cover"
            />
          </div>
          <ul className="flex flex-col items-center justify-center gap-2 overflow-auto rounded-lg rounded-b-lg bg-white py-2">
            <li
              className="cursor-pointer rounded-lg py-2 px-4 transition hover:bg-gray-200"
              onClick={() => {
                const audio = new Audio(
                  'https://media.play.ht/full_-N1oB09BLFlMjMfbU8LB.mp3'
                )
                audio.play()
              }}
            >
              <b>Q.</b> Tell me something about yourself.
            </li>
            <li
              className="cursor-pointer rounded-lg py-2 px-4 transition hover:bg-gray-200"
              onClick={() => {
                var audio = new Audio(
                  'https://speak.streams.live/media/speech_generate/2022/05/12/output_2022_05_12_15_54_41_cs31hzm.mp3'
                )
                audio.play()
              }}
            >
              <b>Q.</b> Why and How do you annoy your friends?
            </li>
            <li
              className="cursor-pointer rounded-lg py-2 px-4 transition hover:bg-gray-200"
              onClick={() => {
                var audio = new Audio(
                  'https://speak.streams.live/media/speech_generate/2022/05/12/output_2022_05_12_17_05_53_2b1h4b8.mp3'
                )
                audio.play()
              }}
            >
              <b>Q.</b> What is the difference and similarity between you and
              Newton?
            </li>
            <li
              className="cursor-pointer rounded-lg py-2 px-4 transition hover:bg-gray-200"
              onClick={() => {
                var audio = new Audio(
                  'https://speak.streams.live/media/speech_generate/2022/05/12/output_2022_05_12_17_07_56_5vqzihv.mp3'
                )
                audio.play()
              }}
            >
              <b>Q.</b> Why should we hire you?
            </li>
            <li
              className="cursor-pointer rounded-lg py-2 px-4 transition hover:bg-gray-200"
              onClick={() => {
                var audio = new Audio(
                  'https://speak.streams.live/media/speech_generate/2022/05/13/output_2022_05_13_04_14_36_4gcskwx.mp3'
                )
                audio.play()
              }}
            >
              <b>Q.</b> Where do you see yourself after 5 years, getting this
              job?
            </li>
            <li
              className="cursor-pointer rounded-lg py-2 px-4 transition hover:bg-gray-200"
              onClick={() => {
                var audio = new Audio(
                  'https://speak.streams.live/media/speech_generate/2022/05/12/output_2022_05_12_17_13_49_bsuuzpr.mp3'
                )
                audio.play()
              }}
            >
              <b>Q.</b> Who loves you the most?
            </li>
            <li
              className="cursor-pointer rounded-lg py-2 px-4 transition hover:bg-gray-200"
              onClick={() => {
                var audio = new Audio(
                  'https://speak.streams.live/media/speech_generate/2022/05/12/output_2022_05_12_17_10_23_by5hjqi.mp3'
                )
                audio.play()
              }}
            >
              <b>Q.</b> What do you think of the new technology?
            </li>
            <li
              className="cursor-pointer rounded-lg py-2 px-4 transition hover:bg-gray-200"
              onClick={() => {
                var audio = new Audio(
                  'https://speak.streams.live/media/speech_generate/2022/05/13/output_2022_05_13_04_27_01_1j9crhb.mp3'
                )
                audio.play()
              }}
            >
              <b>Q.</b> Are you important?
            </li>
            <li
              className="cursor-pointer rounded-lg py-2 px-4 transition hover:bg-gray-200"
              onClick={() => {
                var audio = new Audio(
                  'https://speak.streams.live/media/speech_generate/2022/05/13/output_2022_05_13_04_23_02_fd111mg.mp3'
                )
                audio.play()
              }}
            >
              <b>Q.</b> What do you want to become when you grow up?
            </li>
            <li
              className="cursor-pointer rounded-lg py-2 px-4 transition hover:bg-gray-200"
              onClick={() => {
                var audio = new Audio(
                  'https://speak.streams.live/media/speech_generate/2022/05/13/output_2022_05_13_04_18_23_25xtyot.mp3'
                )
                audio.play()
              }}
            >
              <b>Q.</b> What you don't have but still brag about?
            </li>
          </ul>
        </main>
      </div>
    </div>
  )
}

export default Interview
