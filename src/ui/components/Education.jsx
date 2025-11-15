export default function Education({universityInfo, setStateIndex}) {
    const {setUniversityName, setGPAValue, setDOG, setAchievements} = universityInfo;
    const {achievements} = universityInfo;

    function submissionHandler(event) {
        console.log("Gurt");
        event.preventDefault();
        if (validateForm()) {
            setStateIndex(2);
        }
        const form = event.target.closest("form");
        if (form) form.reportValidity();
    }

    function validateForm() {
        const $uniName = document.getElementById("UniversityName");
        const $uniGPA = document.getElementById("GPA");
        const $uniDOG = document.getElementById("DateOfGraduation");

        return $uniName.checkValidity() && $uniGPA.checkValidity() && $uniDOG.checkValidity();
    }

    function addAchievement() {
        setAchievements(prev => [...prev, { id: Date.now(), text: "" }]);
    }

    return (
        <fieldset className="EducationFieldset">
            <legend>Education</legend>
            <div>
                <label htmlFor="fullName">University<span className="mandatory">*</span></label>
                <input value={universityInfo.universityName} minLength={3} type="text" pattern="^[a-zA-Z\s]*$" id="UniversityName" required aria-required="true" onInput={e => e.target.setCustomValidity('')} onChange={e => setUniversityName(e.target.value)} ></input>
            </div>
            <div>
                <label htmlFor="GPA">Acquired GPA <span className="mandatory">*</span></label>
                <input value={universityInfo.GPAValue} type="number" step="0.01" min="0" max="5" id="GPA" required aria-required="true" onInput={e => e.target.setCustomValidity('')} onChange={e => setGPAValue(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="DateOfGraduation">Date Of Graduation<span className="mandatory">*</span></label>
                <input value={universityInfo.DOG} type="date" id="DateOfGraduation" required aria-required="true" placeholder="DD / MM / YYYY" onInput={e => e.target.setCustomValidity('')} onChange={e => setDOG(e.target.value)}></input>
            </div>
            <div id="AcademicAchievementDiv">
                {achievements.map((a, idx) => (
                    <AcademicAchievement key={a.id} index={idx} achievements={achievements} setAchievements={setAchievements} />
                ))}
            </div>

            <button className="AcademicAchievementBtn" type="button" onClick={addAchievement}>
                Add an academic achievement
            </button>
            <div className="formControlsDiv">
                <button className="EducationNextBtn" type="submit" onInput={e => e.target.setCustomValidity('')} onClick={e => submissionHandler(e)}>Next</button>
                <button className="PrevBtn" type="button" onClick={e => setStateIndex(0)}>Previous</button>
            </div>  
        </fieldset>
    )
}

function AcademicAchievement({index, setAchievements, achievements}) {
    function handleDelete(event) {
        const inputID = event.target.closest('.AcademicAchievementItem')?.querySelector('input').id;
        const id = inputID.charAt(inputID.length - 1);
        const idToRemove = achievements[id].id;
        setAchievements(prev => prev.filter(item => item.id !== idToRemove));  
    }
    function updateAchievement(elementDOM, value) {
        const id = (elementDOM.id).charAt(elementDOM.id.length - 1);
        const idToUpdate = achievements[id].id;
        const myNextList = [...achievements];
        myNextList.find(a => a.id == idToUpdate).text = value; 
        setAchievements(myNextList);
    }
    return (
        <div className="AcademicAchievementItem">
            <label htmlFor={`AcademicAchievement-University-${index}`}>Academic Achievement {index}<span className="mandatory">*</span></label>
            <div className='AcademicAchievementBottomDiv'>
                <input value={achievements[index].text} minLength={3} placeholder='Briefly describe your academic achievement...' type="text" pattern="^[a-zA-Z\s]*$" id={`AcademicAchievement-University-${index}`} required aria-required="true" onInput={e => e.target.setCustomValidity('')} onChange={e => updateAchievement(e.target, e.target.value)} ></input>
                <button type='button' id='delAcadAchievement' onClick={e => handleDelete(e)}>X</button>
            </div>
        </div> 
    )
}