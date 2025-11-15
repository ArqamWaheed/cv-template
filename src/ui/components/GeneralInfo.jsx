export default function GeneralInfo({generalInfo, setStateIndex}) {
    const { setNameValue, setEmailValue, setCountryName, setCityName, setContactNumber } = generalInfo;

    function submissionHandler(event) {
        event.preventDefault();
        if (validateForm()) {
            setStateIndex(1);
        }
        const form = event.target.closest("form");
        if (form) form.reportValidity();
    }

    function validateForm() {
        const $fullName = document.getElementById("fullName");
        const $emailId = document.getElementById("emailId");
        const $contactNumber = document.getElementById("contactNumber");
        const $countryName = document.getElementById("countryName");
        const $cityName = document.getElementById("cityName");
        $fullName.setCustomValidity("");
        $emailId.setCustomValidity("");
        $contactNumber.setCustomValidity("");
        $countryName.setCustomValidity("");
        $cityName.setCustomValidity("");
        if ($fullName.validity.tooShort) {
            $fullName.setCustomValidity("Name should be longer than 5 characters atleast!");
        } else if ($fullName.validity.patternMismatch) {
            $fullName.setCustomValidity("Only regular characters are allowed!");
        }
        if ($emailId.validity.typeMismatch) {
            $emailId.setCustomValidity("Please enter a valid email address.");
        }
        const phoneRe = /^\s*(?:\+?\d{1,3})?[-. (]*\d{3}[-. )]*\d{3}[-. ]*\d{4}(?: *x\d+)?\s*$/;
        if (!phoneRe.test($contactNumber.value)) {
            $contactNumber.setCustomValidity("Enter a valid phone number");
        }
        if ($countryName.validity.tooShort) {
            $countryName.setCustomValidity("Name should be longer than 3 characters atleast!");
        } else if ($countryName.validity.patternMismatch) {
            $countryName.setCustomValidity("Only regular characters are allowed!");
        }
        if ($cityName.validity.tooShort) {
            $cityName.setCustomValidity("Name should be longer than 3 characters atleast!");
        } else if ($cityName.validity.patternMismatch) {
            $cityName.setCustomValidity("Only regular characters are allowed!");
        }
        return $fullName.checkValidity() && $emailId.checkValidity() && $contactNumber.checkValidity() && $countryName.checkValidity() && $cityName.checkValidity();
    }

    return (
        <fieldset className="GeneralInfo">
            <legend>General Information</legend>
            <div>
                <label htmlFor="fullName">Full Name <span className="mandatory">*</span></label>
                <input minLength={5} type="text" pattern="^[a-zA-Z\s]*$" id="fullName" required aria-required="true" value={generalInfo.nameValue} onInput={e => e.target.setCustomValidity('')} onChange={e => setNameValue(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="emailId">Email <span className="mandatory">*</span></label>
                <input type="email" id="emailId" required aria-required="true" onInput={e => e.target.setCustomValidity('')} value={generalInfo.emailValue} onChange={e => setEmailValue(e.target.value) }></input>
            </div>
            <div>
                <label htmlFor="contactNumber">Contact Number <span className="mandatory">*</span></label>
                <input minLength={5} id="contactNumber" required aria-required="true" placeholder="xxx-xxx-xxx" value={generalInfo.contactNumber} onInput={e => e.target.setCustomValidity('')} onChange={e => setContactNumber(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="countryName">Country <span className="mandatory">*</span></label>
                <input minLength={3} type="text" pattern="^[a-zA-Z\s]*$" id="countryName" required aria-required="true" value={generalInfo.countryName} onInput={e => e.target.setCustomValidity('')} onChange={e => setCountryName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="cityName">City <span className="mandatory">*</span></label>
                <input minLength={3} type="text" pattern="^[a-zA-Z\s]*$" id="cityName"  required aria-required="true" value={generalInfo.cityName} onInput={e => e.target.setCustomValidity('')} onChange={e => setCityName(e.target.value)}></input>
            </div>
            <div className="formControlsDiv">
                <button className="generalInfoNextBtn" type="submit" onInput={e => e.target.setCustomValidity('')} onClick={e => submissionHandler(e)}>Next</button>
            </div>  
        </fieldset>
    )
}