import { useState } from "react";
import Form from "./Form";
import CV from "./CV";

export default function linkFormCV() {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [countryName, setCountryName] = useState("");
    const [cityName, setCityName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const generalInfo = {
        nameValue,
        emailValue,
        countryName,
        cityName,
        contactNumber,
    }
    return (
        <>
            <Form generalInfo={generalInfo} setNameValue={setNameValue}></Form>
            <CV generalInfo={generalInfo}></CV>    
        </>
    )
}


