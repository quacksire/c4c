
import AccountCTA from "../../components/AccountCTA";

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
                <h1 className="text-5xl font-bold">Hiya firstName!</h1>
                </div>
            </div>
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