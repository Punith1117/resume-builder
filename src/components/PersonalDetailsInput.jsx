export default function PersonalDetailsInput({personalDetails, setPersonalDetails}) {
    return (
        <section className="input">
            <h1>Personal Details</h1>
            <input type="text" 
                onChange={(e) => setPersonalDetails({
                    ...personalDetails, 
                    name: e.target.value
                })}
                
                value={personalDetails.name}
            />
        </section>
    )
}