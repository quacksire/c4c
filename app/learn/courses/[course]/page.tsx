


export default function Page({ params }: { params: { course: string } }) {
    return (
        <div>
        <h1>{params.course ?? ""}</h1>
        </div>
    );
    }