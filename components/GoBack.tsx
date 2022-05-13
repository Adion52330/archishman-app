import React from 'react'
import Router from 'next/router'

const GoBack = () => {
  return (
    <div
      className="text-md w-full border-b-2 border-black bg-gray-200 p-2 font-semibold"
      id="goBack"
      onClick={() => {
        Router.push('/main')
      }}
    >
      {'<<'} Go Back
    </div>
  )
}

export default GoBack
