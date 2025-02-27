export default function SkillsInput({skills, setSkills}) {
    return (
        <section className="input-skills input-section">
            <h1>Technical Skills</h1>
            <textarea value={skills} onChange={(e) => setSkills(e.target.value)}></textarea>
        </section>
    )
}