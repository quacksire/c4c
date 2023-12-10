
import NameGreeting from "@/components/NameGreeting";
import AccountCTA from "../../components/AccountCTA";
import Link from "next/link";
export default () => {
    return (
        <>
        {/* Logged out CTA to login or create account */}
        <AccountCTA />

        {/* Logged in content */}
        <div className={"container text-white"}>
            <div className="hero min-w-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                <h1 className="text-5xl font-bold">
                    <NameGreeting />
                </h1>
                </div>
            </div>
            </div>
        </div>
        <div className="flex flex-col space-y-10">
            <div className="stats w-[70vw] justify-center items-center px-5">
                <div className="stat">
                    <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Minutes Spent</div>
                    <div className="stat-value text-primary">256</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Lessons Completed</div>
                    <div className="stat-value text-secondary">26</div>
                    <div className="stat-desc">23.5% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <div className="avatar online">
                    </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Average Score</div>
                    <div className="stat-desc text-secondary">Try to get it up to 90% !</div>
                </div>
            </div>
            <div className="stats w-[70vw] justify-center items-center px-5">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">New lessons taken</div>
                    <div className="stat-value">3</div>
                    <div className="stat-desc">Within the last year</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Remaining Courses</div>
                    <div className="stat-value">1,273</div>
                    <div className="stat-desc">↘︎ 3 (.002)</div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
            <Link className='btn' href={'/learn/courses/resume'}> Resume Courses</Link>
            <Link className='btn' href={'/learn/courses'}>Start a Course</Link>
            </div>
        </div>
        </>
    );
    };

/*
<h1>Hello firstName!</h1>
            <div className={"grid grid-cols-3 gap-4"}>
                <div className={"col-span-2"}>
                    <h1>Learn</h1>
                    <p>Learn about the different types of investments and how to get started</p>
                </div>
                <div className={"col-span-1"}>
                    <h1>Progress</h1>
                    <p>Track your progress as you learn</p>
                </div>
            </div>
*/