import { useState } from 'react'
import CV from './CV';

export default function GeneralInfo({generalInfo, setNameValue}) {

    return (
        <fieldset className="GeneralInfo">
            <legend>General Information</legend>
            <div>
                <label for="fullName">Full Name <span class="mandatory">*</span></label>
                <input type="text" id="fullName" required aria-required="true" onChange={e => setNameValue(e.target.value)}></input>
            </div>
            <div>
                <label for="emailId">Email <span class="mandatory">*</span></label>
                <input type="email" id="emailId" required aria-required="true"></input>
            </div>
            <div>
                <label for="countryName">Country <span class="mandatory">*</span></label>
                <input type="text" id="countryName" required aria-required="true"></input>
            </div>
            <div>
                <label for="cityName">City <span class="mandatory">*</span></label>
                <input type="text" id="cityName" required aria-required="true"></input>
            </div>
            <div>
                <label for="contactNumber">Contact Number <span class="mandatory">*</span></label>
                <input type="tel" id="contactNumber" required aria-required="true" placeholder="xxx-xxx-xxx"></input>
            </div>
            <div class="formControlsDiv">
                <button type="button">Next</button>
            </div>  
        </fieldset>
    )
}