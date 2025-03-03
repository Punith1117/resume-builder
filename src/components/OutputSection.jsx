export default function OutputSection({personalDetails, summary, skills, experience, projects}) {
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
            <div className="skills">
                <h2>Technical Skills</h2>
                <hr />
                <p>{skills}</p>
            </div>
            <div className="experience">
                <h2>Experience</h2>
                <hr />
                {experience.map(element => (
                    <div className="experience-item" key={element.id}>
                        <div className="name-period-wrapper">
                            <h3 className="company">- {element.companyName}</h3>
                            <p className="time-period">{element.from}-{element.to}</p>
                        </div>
                        <h4 className="role">{element.role}</h4>
                        <p className="description">{element.description}</p>
                    </div>
                ))}
            </div>
            <div className="projects">
                <h2>Projects</h2>
                <hr />
                {projects.map(element => (
                    <div className="projects-item" key={element.id}>
                        <h3 className="name">- {element.name} | <a href={element.live} target="blank">live</a></h3>
                        <h4 className="description">{element.description}</h4>
                        <p className="tech-used">{element.tech}</p>
                    </div>
                ))}
            </div>
        </main>
    </section>
}