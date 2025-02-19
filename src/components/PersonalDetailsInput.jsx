export default function PersonalDetailsInput({personalDetails, setPersonalDetails}) {
    return (
        <section className="input-personal-details input-section">
            <h1>Personal Details</h1>
            <div className="input-wrapper">
                <label>
                    Name:
                    <input type="text" 
                        onChange={(e) => setPersonalDetails({
                            ...personalDetails, 
                            name: e.target.value
                        })}
                        
                        value={personalDetails.name}
                    />
                </label>
                <label>
                    Location:
                    <input type="text" 
                        onChange={(e) => setPersonalDetails({
                            ...personalDetails, 
                            location: e.target.value
                        })}
                        
                        value={personalDetails.location}
                    />
                </label>

                <label>
                    Phone: 
                    <input type="number" 
                        onChange={(e) => setPersonalDetails({
                            ...personalDetails, 
                            phone: e.target.value
                        })}
                        
                        value={personalDetails.phone}
                    />
                </label>
                <label>
                    Email: 
                    <input type="text" 
                        onChange={(e) => setPersonalDetails({
                            ...personalDetails, 
                            email: e.target.value
                        })}
                        
                        value={personalDetails.email}
                    />
                </label>
                <label>
                    Linkedin Profile:
                    <input type="text" 
                        onChange={(e) => setPersonalDetails({
                            ...personalDetails, 
                            linkedin: e.target.value
                        })}
                        
                        value={personalDetails.linkedin}
                    />
                </label>
                <label>
                    Portfolio website:
                    <input type="text" 
                        onChange={(e) => setPersonalDetails({
                            ...personalDetails, 
                            portfolio: e.target.value
                        })}
                        
                        value={personalDetails.portfolio}
                    />
                </label>
            </div>
        </section>
    )
}