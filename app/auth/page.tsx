'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export default function AuthForm() {
  const supabase = createClientComponentClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY})
    const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    console.log(supabase)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      setTheme(e.matches ? "dark" : "light")
    });

  }, [])
  
  return (
    <div className='w-screen h-screen items-center justify-center flex'>
      <div className="card w-[33vw] -translate-y-16 bg-base-100 shadow-xl p-7">
        <Auth
          supabaseClient={supabase}
          view="sign_up"
          appearance={{ theme: ThemeSupa }}
          theme={theme}
          showLinks={false}
          providers={['google']}
          redirectTo="http://localhost:3000/auth/callback"
        />
      </div>
    </div>
  )
}