export default function OutputSection({personalDetails}) {
    return <section className="output" style={{backgroundColor: 'white'}}>
        <div className="a4-size">
            <h1>{personalDetails.name}</h1>
            <h1>{personalDetails.location}</h1>
        </div>
    </section>
}