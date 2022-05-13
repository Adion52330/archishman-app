import React from 'react'

const Revieww = (props: any) => {
  return (
    <div className="flex justify-center gap-2 border-b-2 border-black px-2">
      <div className="py-2">
        <img
          src={props.image}
          alt=""
          className="h-14 w-14 flex-1 rounded-full border-2 border-blue-600"
        />
      </div>
      <div className="flex-1 py-2">
        <div>
          <p className="text-xl font-bold">{props.by}</p>
        </div>
        <div>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Revieww
