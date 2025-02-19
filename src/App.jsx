import { useState } from 'react'
import Nav from './components/Nav'
import OutputSection from './components/OutputSection'
import PersonalDetailsInput from './components/PersonalDetailsInput'
import SummaryInput from './components/SummaryInput'
import './styles/output.css'
import './styles/input.css'

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

  const sections = [
    <PersonalDetailsInput personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/>,
    <SummaryInput summary={summary} setSummary={setSummary}></SummaryInput>
  ]
  return (
    <div className='wrapper'>
      <Nav 
        currentSectionIndex={currentSectionIndex} 
        setCurrentSectionIndex={setCurrentSectionIndex}
      >
      </Nav>
      {sections[currentSectionIndex]}
      <OutputSection personalDetails={personalDetails} summary={summary}></OutputSection>
    </div>
  )
}

export default App
