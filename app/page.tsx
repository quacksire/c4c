import { ChevronsDown, Youtube } from 'lucide-react';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="">
      <div className="hero min-h-screen min-w-screen dark:bg-brazil-bg-dark bg-brazil-bg-light">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold shadow-md">Making the 21st Century available to all</h1>
            <p className="py-6">Utilizing technology to empower classrooms to become hubs of accessible STEM learning, fueled by a diverse range of courses that cater to all.
            </p>
            <div className='flex justify-center flex-row space-x-3'>
              <Link className="btn btn-neutral" href={"#allstats"} >Explore <ChevronsDown/></Link>
              <Link className="btn btn-neutral" href={"/learn"} >Our Courses <Youtube/></Link>
            </div>
          </div>
        </div>
      </div>
      <div id="allstats" className="w-screen h-screen flex flex-row py-5">
        <div className="stats w-[50vw] rounded-none h-screen stats-vertical">
          <div className="stat">
            <div className="stat-title text-2xl">Raised</div>
            <div className="stat-value text-6xl">$12,000</div>
          </div>
          <div className="stat">
            <div className="stat-title text-2xl">Schools Assisted</div>
            <div className="stat-value text-6xl">6</div>
          </div>
          <div className="stat">
            <div className="stat-title text-2xl">Technology Donated</div>
            <div className="stat-value text-6xl">28 Laptops</div>
            <div className="stat-value text-6xl">5 Projectors</div>
          </div>
          <div className='stat'>
            <div className="stat-title text-2xl">Students Helped</div>
            <div className="stat-value text-6xl">1750</div>
          </div>
        </div>
        <div className="w-[50vw] h-screen items-center justify-center flex">
        <img className="w-[40vw]" src="/phongsavang_school.jpeg" alt="Solar power installation in a rural area in South America" />
        </div>
      </div>
      <div className="w-screen h-screen flex flex-row py-5">
        <div className="w-[50vw] h-screen items-center justify-center flex">
          <img className="w-[40vw]" src="/unsplash-image.jpg" alt="Innovation at it's finest" />
        </div>
        <div className="w-[50vw] h-screen items-center justify-center flex">
          <p className="text-2xl px-10">In a modern society where STEM is the forefront of learning, change, and innovation; we will bring all levels of education in underprivileged countries technology so they can grasp these important ideas.  
          </p>
        </div>
      </div>
      <footer className="footer p-10 mt-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">About</header> 
          <a>
          IsoAccess, a non-profit created by two teenagers, aims to bridge the digital divide between developed and developing nations. They do this by donating technology, promoting STEM education, and improving digital literacy in rural schools lacking resources. This empowers communities, connects them to the world, and gives everyone a chance to succeed.
          </a>
          <a> Official Registered EIN: 92-1670894 01(c)(3) Nonprofit Organisation </a>

        </nav> 
      </footer>
    </main>
  )
}

