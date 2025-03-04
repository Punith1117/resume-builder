import { useState } from 'react'
import Nav from './components/Nav'
import OutputSection from './components/OutputSection'
import PersonalDetailsInput from './components/PersonalDetailsInput'
import SummaryInput from './components/SummaryInput'
import './styles/output.css'
import './styles/input.css'
import SkillsInput from './components/SkillsInput'
import ExperienceInput from './components/ExperienceInput'
import ProjectsInput from './components/ProjectsInput'
import EducationInput from './components/EducationInput'

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [personalDetails, setPersonalDetails] = useState( {
    name: 'FirstName LastName',
    location: 'Bengaluru, India',
    email: 'someemail1234@gmail.com',
    phone: '1231231234',
    portfolio: 'direct link',
    linkedin: 'direct link'
  })
  const [summary, setSummary] = useState ('Summary of you which includes your experience, specialization field highlighting your most relevant skills which emphasizes why you are fit for the role.')
  const [skills, setSkills] = useState('Java, React.js, Nodejs, HTML, CSS, Javascript, TypeScript, Tailwind css, Git, Github')
  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      role: 'Web Developer',
      companyName: 'XYZ company',
      description: 'Built a web application that Lorem ipsum dolor sit amet.',
      from: '2023',
      to: '2025'
    },
    {
      id: crypto.randomUUID(),
      role: 'App Developer',
      companyName: 'XYZ company',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dignissimos explicabo fugit dolorum voluptatibus aperiam',
      from: 'June 2025',
      to: 'August 2025'
    }
  ])
  const [projects, setProjects] = useState([
    {
      id: crypto.randomUUID(),
      name: 'Battleship',
      description: 'A game to attack enemy ships by selecting positions in enemy\'s base',
      tech: 'HTML, CSS, Javascript',
      live: 'https://punith1117.github.io/battleship/'
    },
    {
      id: crypto.randomUUID(),
      name: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, libero sunt amet mollitia fugiat repellat!',
      tech: 'HTML, CSS, React, Javascript, TypeScript, Nodejs',
      live: 'google.com'
    },
    {
      id: crypto.randomUUID(),
      name: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, libero sunt amet mollitia fugiat repellat!adipisicing elit. Deserunt',
      tech: 'HTML, CSS, React, Javascript, TypeScript, Nodejs',
      live: 'google.com'
    }
  ])
  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      course: 'B.E in Computer Science',
      grade: 'x.x',
      year: 'expected 2332',
      institutionName: 'Ramaiah Institute of Technology',
      location: 'Bengaluru, Karnataka'
    },
    {
      id: crypto.randomUUID(),
      course: '12th Grade',
      grade: 'xx%',
      year: '2342',
      institutionName: 'Vidya Mandir PU college',
      location: 'Bengaluru, Karnataka'
    },
    {
      id: crypto.randomUUID(),
      course: '10th Grade',
      grade: 'xx%',
      year: '2355',
      institutionName: 'St Marys\'s Public School',
      location: 'Bengaluru, Karnataka'
    }
  ])

  const sections = [
    <PersonalDetailsInput personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/>,
    <SummaryInput summary={summary} setSummary={setSummary}></SummaryInput>,
    <SkillsInput skills={skills} setSkills={setSkills}></SkillsInput>,
    <ExperienceInput experience={experience} setExperience={setExperience}></ExperienceInput>,
    <ProjectsInput projects={projects} setProjects={setProjects}></ProjectsInput>,
    <EducationInput education={education} setEducation={setEducation}></EducationInput>
  ]
  return (
    <div className='wrapper'>
      <Nav 
        currentSectionIndex={currentSectionIndex} 
        setCurrentSectionIndex={setCurrentSectionIndex}
      >
      </Nav>
      {sections[currentSectionIndex]}
      <OutputSection personalDetails={personalDetails} summary={summary} skills={skills} experience={experience} projects={projects} education={education}></OutputSection>
    </div>
  )
}

export default App
