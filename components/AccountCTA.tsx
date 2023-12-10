'use client'


import { useUser } from '@supabase/auth-helpers-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
export default function AccountCTA() {
  const supabase = createClientComponentClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  })

  const [isLogged, setIsLogged] = useState(true)
  useEffect(() => {
  async function getUser() {
      let user = await (await supabase.auth.getUser())?.data || null
      if (user) {
          console.log('user found')
          setIsLogged(true)
          return
      } else {
          console.log('user not found')
          setIsLogged(false)
          return
      }
  }
  getUser()
  }, [])

  const pathname = usePathname()

  if (!isLogged) {
      return (
      <div className="toast ">
          <div role="alert" className="alert">
          <div className='grid grid-cols-1'>
              <div className="text-lg font-bold">Ready to Learn?</div>
              <span className="py-6">Create an account to save your progress and access exclusive content</span>
              <Link className="btn btn-primary" href={`/auth?to=${pathname}`} >Get Started</Link>
          </div>
          </div>
      </div>
      )
  } else {
      return null
  }
}

/*
<div className="card w-96 right-0 bg-base-100 shadow-xl toast-start">
                    <div className="card-body">
                            <h1 className="text-5xl font-bold">Ready to Learn?</h1>
                            <p className="py-6">Create an account to save your progress and access exclusive content</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    <div>
                </div>
*/