export default function Nav({currentSectionIndex, setCurrentSectionIndex}) {
    let sections = ['Personal Details', 'Summary', 'Skills', 'Experience', 'Projects', 'Education']
    return (
        <nav>
            {
                sections.map((element, index) => {
                    if (index == currentSectionIndex)
                        return <button key={index} className="selected">{element}</button>
                    else
                        return <button key={index} onClick={() => setCurrentSectionIndex(index)}>{element}</button>
                })
            }
        </nav>
    )
}