export default function ExperienceInput({experience, setExperience}) {
    return (
        <section className="Experience-input input-section">
            <h1>Experience</h1>
            <button className="add-experience" onClick={() => setExperience([...experience, {
                id: crypto.randomUUID(),
                role: 'Web Development Intern',
                companyName: 'XYZ company',
                description: 'Built a web application that Lorem ipsum dolor sit amet.',
                from: '2024',
                to: '2025'
            }])}>Add Experience</button>
            {
                experience.map((element, index) => (
                    <div className="input-experience-item" key={element.id}>
                        <h2>{index+1})</h2> 
                        <label>
                            Title:
                            <input type="text" value={element.role} onChange={e => setExperience(experience.map(item => ((item.id == element.id) ? {...item, role: e.target.value} : item)))}></input>
                        </label>
                        <label>
                            Company Name:
                            <input type="text" value={element.companyName} onChange={e => setExperience(experience.map(item => ((item.id == element.id) ? {...item, companyName: e.target.value} : item)))}></input>
                        </label>
                        <label>
                            Description:
                            <textarea value={element.description} onChange={e => setExperience(experience.map(item => ((item.id == element.id) ? {...item, description: e.target.value} : item)))} style={{width: '35vw', height: '10vh'}}></textarea>
                        </label>
                        <label>
                            From:
                            <input type="text" value={element.from} onChange={e => setExperience(experience.map(item => ((item.id == element.id) ? {...item, from: e.target.value} : item)))}/>
                        </label>
                        <label>
                            To:
                            <input type="text" value={element.to} onChange={e => setExperience(experience.map(item => ((item.id == element.id) ? {...item, to: e.target.value} : item)))}/>
                        </label>
                        <button className="delete-experience" onClick={() => setExperience(experience.filter(item => item.id != element.id))}>delete</button>
                    </div>
                ))
            }
        </section>
    )
}