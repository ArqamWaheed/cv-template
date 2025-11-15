export default function Education({setStateIndex}) {
    return (
        <fieldset className="EducationFieldset">
            <legend>Education</legend>
            <div>
                <label htmlFor="fullName">University<span className="mandatory">*</span></label>
                <input minLength={3} type="text" pattern="^[a-zA-Z\s]*$" id="UniversityName" required aria-required="true" onInput={e => e.target.setCustomValidity('')} ></input>
            </div>
            <div>
                <label htmlFor="GPA">Acquired GPA <span className="mandatory">*</span></label>
                <input type="number" step="0.01" min="0" max="5" id="GPA" required aria-required="true" onInput={e => e.target.setCustomValidity('')} ></input>
            </div>
            <div>
                <label htmlFor="DateOfStudy">Date Of Study<span className="mandatory">*</span></label>
                <input type="date" id="DateOfStudy" required aria-required="true" placeholder="DD / MM / YYYY" onInput={e => e.target.setCustomValidity('')} ></input>
            </div>
            <div className="formControlsDiv">
                <button className="EducationNextBtn" type="submit" onInput={e => e.target.setCustomValidity('')} onClick={e => submissionHandler(e)}>Next</button>
                <button className="PrevBtn" type="button" onClick={e => setStateIndex(0)}>Previous</button>
            </div>  
        </fieldset>
    )
}