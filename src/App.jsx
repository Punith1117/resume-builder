import { useState } from 'react'
import Nav from './components/Nav'
import OutputSection from './components/OutputSection'
import PersonalDetailsInput from './components/PersonalDetailsInput'
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
