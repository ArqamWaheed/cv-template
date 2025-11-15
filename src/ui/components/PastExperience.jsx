export default function PastExperience({experienceObj, setStateIndex}) {
    const {setExperiences} = experienceObj;
    const {experiences} = experienceObj;

    function submissionHandler(event) {
        event.preventDefault();
        // Move to next step (or complete the form)
        setStateIndex(4);
    }

    function addExperience() {
        setExperiences(prev => [...prev, { id: Date.now(), company: "", position: "", startDate: "", endDate: "", description: "" }]);
    }

    return (
        <fieldset className="ExperienceFieldset">
            <legend>Past Experience</legend>
            <div id="ExperienceDiv">
                {experiences.map((exp, idx) => (
                    <ExperienceItem key={exp.id} index={idx} experiences={experiences} setExperiences={setExperiences} />
                ))}
            </div>

            <button className="AddExperienceBtn" type="button" onClick={addExperience}>
                Add work experience
            </button>
            <div className="formControlsDiv">
                <button className="ExperienceNextBtn" type="submit" onInput={e => e.target.setCustomValidity('')} onClick={e => submissionHandler(e)}>Submit</button>
                <button className="PrevBtn" type="button" onClick={e => setStateIndex(2)}>Previous</button>
            </div>  
        </fieldset>
    )
}

function ExperienceItem({index, setExperiences, experiences}) {
    function handleDelete(event) {
        const itemDiv = event.target.closest('.ExperienceItem');
        const inputID = itemDiv?.querySelector('input').id;
        const id = inputID.charAt(inputID.length - 1);
        const idToRemove = experiences[id].id;
        setExperiences(prev => prev.filter(item => item.id !== idToRemove));  
    }
    
    function updateExperience(field, value) {
        const myNextList = [...experiences];
        myNextList[index][field] = value;
        setExperiences(myNextList);
    }

    return (
        <div className="ExperienceItem">
            <div className="ExperienceItemHeader">
                <label htmlFor={`Experience-Company-${index}`}>Experience {index + 1}<span className="mandatory">*</span></label>
                <button type='button' className="delExperienceBtn" onClick={e => handleDelete(e)}>X</button>
            </div>
            <div>
                <label htmlFor={`Experience-Company-${index}`}>Company<span className="mandatory">*</span></label>
                <input 
                    value={experiences[index].company} 
                    minLength={2} 
                    placeholder='Company name...' 
                    type="text" 
                    id={`Experience-Company-${index}`} 
                    required 
                    aria-required="true" 
                    onInput={e => e.target.setCustomValidity('')} 
                    onChange={e => updateExperience('company', e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor={`Experience-Position-${index}`}>Position<span className="mandatory">*</span></label>
                <input 
                    value={experiences[index].position} 
                    minLength={2} 
                    placeholder='Job title...' 
                    type="text" 
                    id={`Experience-Position-${index}`} 
                    required 
                    aria-required="true" 
                    onInput={e => e.target.setCustomValidity('')} 
                    onChange={e => updateExperience('position', e.target.value)} 
                />
            </div>
            <div className="ExperienceDateRow">
                <div>
                    <label htmlFor={`Experience-StartDate-${index}`}>Start Date<span className="mandatory">*</span></label>
                    <input 
                        value={experiences[index].startDate} 
                        type="date" 
                        id={`Experience-StartDate-${index}`} 
                        required 
                        aria-required="true" 
                        onInput={e => e.target.setCustomValidity('')} 
                        onChange={e => updateExperience('startDate', e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor={`Experience-EndDate-${index}`}>End Date</label>
                    <input 
                        value={experiences[index].endDate} 
                        type="date" 
                        id={`Experience-EndDate-${index}`} 
                        onInput={e => e.target.setCustomValidity('')} 
                        onChange={e => updateExperience('endDate', e.target.value)} 
                    />
                </div>
            </div>
            <div>
                <label htmlFor={`Experience-Description-${index}`}>Description</label>
                <textarea 
                    value={experiences[index].description} 
                    placeholder='Briefly describe your responsibilities...' 
                    id={`Experience-Description-${index}`} 
                    rows="3"
                    onInput={e => e.target.setCustomValidity('')} 
                    onChange={e => updateExperience('description', e.target.value)} 
                />
            </div>
        </div> 
    )
}
