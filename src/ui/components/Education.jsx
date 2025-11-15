export default function Education({universityInfo, setStateIndex}) {
    const {setUniversityName, setGPAValue, setDOG} = universityInfo;

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
            <div className="formControlsDiv">
                <button className="EducationNextBtn" type="submit" onInput={e => e.target.setCustomValidity('')} onClick={e => submissionHandler(e)}>Next</button>
                <button className="PrevBtn" type="button" onClick={e => setStateIndex(0)}>Previous</button>
            </div>  
        </fieldset>
    )
}