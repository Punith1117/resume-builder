export default function SummaryInput({summary, setSummary}) {
    return (
        <section className="input-summary input-section">
            <h1>Summary: </h1>
            <textarea value={summary} onChange={(e) => setSummary(e.target.value)} style={{height: '10rem'}}></textarea>
        </section>
    )
}