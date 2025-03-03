export default function ProjectsInput({projects, setProjects}) {
    return (
        <section className="projects-input input-section">
            <h1>Projects</h1>
            <button className="add-project" onClick={() =>
                setProjects([
                    ...projects,
                    {
                        id: crypto.randomUUID(),
                        name: 'Lorem Ipsum',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, libero sunt amet mollitia fugiat repellat!',
                        tech: 'HTML, CSS, React, Javascript, TypeScript, Nodejs',
                        live: 'link'
                    }
                ])
            }>Add Project</button>
            {
                projects.map((element, index) => (
                    <div className="input-projects-item" key={element.id}>
                        <h2>{index + 1}</h2>
                        <label>
                            Name:
                            <input type="text"  value={element.name} onChange={e => setProjects(projects.map(item => ((item.id == element.id) ? {...item, name: e.target.value} : item)))}/>    
                        </label>
                        <label>
                            Description:
                            <textarea value={element.description} onChange={e => setProjects(projects.map(item => ((item.id == element.id) ? {...item, description: e.target.value} : item)))}/>
                        </label>
                        <label>
                            Tech Used:
                            <textarea value={element.tech} onChange={e => setProjects(projects.map(item => ((item.id == element.id) ? {...item, tech: e.target.value} : item)))}/>
                        </label>
                        <label>
                            Live link:
                            <input type="text" value={element.live} onChange={e => setProjects(projects.map(item => ((item.id == element.id) ? {...item, live: e.target.value} : item)))}/>
                        </label>
                        <button onClick={() => setProjects(projects.filter(item => item.id != element.id))}>delete</button>
                    </div>
                ))
            }
        </section>
    )
}