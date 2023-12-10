'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from '@supabase/auth-helpers-react'

import { Home, Search, CircleUser } from "lucide-react";

export default function NavBar() {
    const pathname = usePathname()
    const user = useUser()

    return (
        <div className="navbar bg-base-200 text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href={"/"}> Home </Link></li>
                        <li><Link href={"/auth"}> Account </Link></li>
                        <li><Link href={"/projects"}> Projects </Link></li>
                        <li><Link href={"/contact"}> Contact </Link></li>

                        {/* <li><a>Our Team</a></li> */}
                        {/* <li><a>Sponsors</a></li> */}
                        {/* <li><a>Blog</a></li> */}
                        {/* <li><a>Donate</a></li> */}
                    </ul>
                    </div>
                </div>
            <div className="navbar-center">
            <img src="/isoaccess-logo-light.webp" alt="logo" className="h-10 dark:hidden flex"/>
                <img src="/isoaccess-logo-dark.webp" alt="logo" className="h-10 dark:flex hidden"/>
            </div>
            <div className="navbar-end">
                <button className="btn btn-circle btn-ghost">
                    <Search />
                </button>
                {user && (
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                            <summary>
                                <CircleUser />
                            </summary>
                            <ul className="bg-base-100 rounded-t-none">
                                <li>
                                    <Link className="btn hover:btn-error" href={'/auth/signout'}>Sign Out</Link>
                                </li>
                            </ul>
                            </details>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}