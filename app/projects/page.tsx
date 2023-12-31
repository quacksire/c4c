
export default () => {
    return (
        <main>
        <div className="flex w-screen justify-center items-center py-10">
             <h1 className="text-5xl font-bold">Our Projects</h1>
        </div>
        <div className="flex w-screen justify-center items-center">
            <div className="flex flex-row space-x-10 justify-center px-5">
            <div className="card w-80 bg-base-300 text-inherit">
                <div className="card-body">
                    <h2 className="card-title">Technology Brought Everywhere</h2>
                    <p> IsoAccess will bring technology like computers and tablets to schools in developing nations.
                        They will provide training sessions on digital literacy using manuals and coding textbooks.
                        To improve connectivity, IsoAccess will build or upgrade internet infrastructure.
                        By collaborating with local non-profits, IsoAccess will expand its reach and promote STEM education.
                        These efforts aim to close the digital divide and empower students in disadvantaged areas.</p>
                </div>
            </div>
            <div className="card w-80 bg-base-300 text-inherit">
                <div className="card-body">
                    <h2 className="card-title">Solar at Schools</h2>
                    <p> IsoAccess will both directly operate and work with local partners around the world to help plan solar systems at schools based on the needs of the schools. This will include designing the system and selecting types of panels, etc. Using funds secured from donations, IsoAccess will then move forward with local organizations to help install these solar systems at schools.</p>

                </div>
            </div>
            <div className="card w-80 bg-base-300 text-inherit">
                <div className="card-body">
                    <h2 className="card-title">Adapting to a Warming World </h2>
                    <p> IsoAccess will help in adaptation by installing adaptations in areas where the climate is hot or forecasted to become hotter. Not just this, but IsoAccess will also work with local organizations to help better prepare buildings for a world of more extreme weather and warm weather. </p>
                </div>
            </div>
        </div>
    </div>
    </main>
    )
}