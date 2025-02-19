export default function OutputSection({personalDetails, summary}) {
    return <section className="output" style={{backgroundColor: 'white'}}>
        <main className="a4-size">
            <div className="head">

            <h1>{personalDetails.name}</h1>
                <section className="personal-details">
                    <span>{personalDetails.location}</span> | 
                    <span>{personalDetails.phone}</span> |
                    <span>{personalDetails.email}</span> |
                    <span><a href={personalDetails.linkedin}>Linkedin</a></span> |
                    <span><a href={personalDetails.portfolio}>Portfolio</a></span>
                </section>
            </div>
            <div className="summary">
                <h2>Summary:</h2>
                <hr />
                <p>{summary}</p>
            </div>
        </main>
    </section>
}