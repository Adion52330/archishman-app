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
              src="https://firebasestorage.googleapis.com/v0/b/img-uploader-45692.appspot.com/o/files%2F280597997_114074697804250_8226332493429954697_n.jpg?alt=media&token=5acaf145-1792-4241-8cc5-710e8e3f7331"
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
