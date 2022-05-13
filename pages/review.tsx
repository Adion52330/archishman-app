import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import GoBack from '../components/GoBack'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Revieww from '../components/Revieww'
import { db } from '../firebase'
import { collection, doc, getDocs, addDoc } from 'firebase/firestore'

const Review: NextPage = () => {
  const { data: session } = useSession()
  const [input, setInput] = useState('')
  const [reviews, setReviews] = useState([])

  const getData = async () => {
    const ref = collection(db, 'reviews')
    getDocs(ref).then((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data())
      //   @ts-ignore
      setReviews(data)
    })
  }

  const sendData = async () => {
    const ref = collection(db, 'reviews')
    addDoc(ref, {
      by: session?.user?.name,
      image: session?.user?.image,
      text: input,
    }).then(() => {
      setInput('')
      getData()
    })
  }

  console.log(reviews)

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="grid min-h-screen place-items-center bg-black">
      <Head>
        <title>Archishman App | A fun application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="app">
        <Header />
        <GoBack />
        <h1 className="p-2 text-4xl font-bold text-slate-900">Reviews</h1>
        {session ? (
          <div className="my-2 mx-2 flex items-center rounded-full bg-white">
            <input
              type="text"
              className="text-md m-2 flex-1 rounded-full px-4 py-2 font-semibold outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className={`m-2 rounded-full px-4 py-1 text-lg ${
                input ? 'text-blue-700' : 'text-blue-200'
              } font-semibold outline-none`}
              onClick={() => {
                sendData()
              }}
              disabled={!input}
            >
              Send
            </button>
          </div>
        ) : (
          <div id="smthn">Login to Add your review</div>
        )}
        <main className="w-full bg-white pb-1">
          {reviews.map((review) => (
            <Revieww
              // @ts-ignore
              key={review.id}
              // @ts-ignore
              image={review?.image}
              // @ts-ignore
              by={review?.by}
              // @ts-ignore
              text={review.text}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default Review
