import { useState } from 'react'
import Nav from './components/Nav'
import OutputSection from './components/OutputSection'
import PersonalDetailsInput from './components/PersonalDetailsInput'

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [personalDetails, setPersonalDetails] = useState( {
    name: '',
    location: 'Rajj'
  })
  const sections = [
    <PersonalDetailsInput personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/>
  ]
  return (
    <div className='wrapper'>
      <Nav 
        currentSectionIndex={currentSectionIndex} 
        setCurrentSectionIndex={setCurrentSectionIndex}
      >
      </Nav>
      {sections[currentSectionIndex]}
      <OutputSection personalDetails={personalDetails}></OutputSection>
    </div>
  )
}

export default App
