export default function EducationInput({education, setEducation}) {
    return (
        <section className="education-input input-section">
            <h1>Education</h1>
            <button className="add-education" onClick={() => setEducation([...education, {
                course: '10th Grade',
                grade: 'xx',
                year: '2355',
                InstitutionName: 'St Marys\'s Public School',
                location: 'Bengaluru, Karnataka'
            }])}>Add Education</button>
            {education.map((element, index) => (
                <div className="input-education-item" key={element.id}>
                    <h2>{index+1})</h2>
                    <label>
                        Course:
                        <input type="text" value={element.course} onChange={e => setEducation(education.map(item => (item.id == element.id) ? {...item, course: e.target.value} : item))}/>
                    </label>
                    <label>
                        Grade: 
                        <input type="text" value={element.grade} onChange={e => setEducation(education.map(item => (item.id == element.id) ? {...item, grade: e.target.value} : item))}/>
                    </label>
                    <label>
                        Year:
                        <input type="text" value={element.year} onChange={e => setEducation(education.map(item => (item.id == element.id) ? {...item, year: e.target.value} : item))}/>
                    </label>
                    <label>
                        Institution Name: 
                        <input type="text" value={element.institutionName} onChange={e => setEducation(education.map(item => (item.id == element.id) ? {...item, institutionName: e.target.value} : item))}/>
                    </label>
                    <label>
                        Location: 
                        <input type="text" value={element.location} onChange={e => setEducation(education.map(item => (item.id == element.id) ? {...item, location: e.target.value} : item))}/>
                    </label>
                </div>
            ))}
        </section>
    )
}