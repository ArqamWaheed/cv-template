export default function TechSkills({skillsObj, setStateIndex}) {
    const {setSkills, skills} = skillsObj;

    function submissionHandler(event) {
        event.preventDefault();
        setStateIndex(3);
    }

    function addSkill() {
        setSkills(prev => [...prev, { id: Date.now(), text: "" }]);
    }

    return (
        <fieldset className="SkillsFieldset">
            <legend>Technical Skills</legend>
            <div id="SkillsDiv">
                {skills.map((skill, idx) => (
                    <TechSkillItem key={skill.id} index={idx} skills={skills} setSkills={setSkills} />
                ))}
            </div>

            <button className="AddSkillBtn" type="button" onClick={addSkill}>
                Add a skill
            </button>
            <div className="formControlsDiv">
                <button className="SkillsNextBtn" type="submit" onInput={e => e.target.setCustomValidity('')} onClick={e => submissionHandler(e)}>Next</button>
                <button className="PrevBtn" type="button" onClick={e => setStateIndex(1)}>Previous</button>
            </div>  
        </fieldset>
    )
}

function TechSkillItem({index, setSkills, skills}) {
    function handleDelete(event) {
        const inputID = event.target.closest('.SkillItem')?.querySelector('input').id;
        const id = inputID.charAt(inputID.length - 1);
        const idToRemove = skills[id].id;
        setSkills(prev => prev.filter(item => item.id !== idToRemove));  
    }
    function updateSkill(elementDOM, value) {
        const id = (elementDOM.id).charAt(elementDOM.id.length - 1);
        const idToUpdate = skills[id].id;
        const myNextList = [...skills];
        myNextList.find(s => s.id == idToUpdate).text = value; 
        setSkills(myNextList);
    }
    return (
        <div className="SkillItem">
            <label htmlFor={`Skill-${index}`}>Skill {index + 1}<span className="mandatory">*</span></label>
            <div className='SkillBottomDiv'>
                <input value={skills[index].text} minLength={2} placeholder='e.g., React, Python, Git...' type="text" id={`Skill-${index}`} required aria-required="true" onInput={e => e.target.setCustomValidity('')} onChange={e => updateSkill(e.target, e.target.value)} ></input>
                <button type='button' id='delSkill' onClick={e => handleDelete(e)}>X</button>
            </div>
        </div> 
    )
}