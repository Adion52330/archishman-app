import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Header = () => {
  const { data: session } = useSession()
  return (
    <div>
      <header
        className="flex items-center justify-between border-b-2 border-black py-2 px-4 "
        id="header"
      >
        <div className="flex items-center justify-center gap-2">
          <p className="text-2xl font-semibold">
            Hello {session ? session?.user?.name?.split(' ')[0] : 'User'}
          </p>
          <img
            //@ts-ignore
            src={
              session
                ? session?.user?.image
                : 'https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg'
            }
            alt=""
            className="h-14 w-14 rounded-full border-2 border-black"
          />
        </div>
        {session ? (
          <div
            className="cursor-pointer rounded-full border-2 border-black bg-[#3FD8CF] px-5 py-2 text-lg font-semibold transition active:opacity-50"
            onClick={() => signOut()}
          >
            Logout
          </div>
        ) : (
          <div
            className="cursor-pointer rounded-full border-2 border-black bg-[#3FD8CF] px-5 py-2 text-lg font-semibold transition active:opacity-50"
            onClick={() => signIn('google')}
          >
            Login
          </div>
        )}
      </header>
    </div>
  )
}

export default Header
