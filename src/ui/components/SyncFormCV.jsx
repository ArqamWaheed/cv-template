import { useState } from "react";
import Form from "./Form";
import CV from "./CV";

export default function linkFormCV() {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [countryName, setCountryName] = useState("");
    const [cityName, setCityName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [universityName, setUniversityName] = useState("");
    const [GPAValue, setGPAValue] = useState("");
    const [DOG, setDOG] = useState(""); // Date of Graduation

    const [achievements, setAchievements] = useState([]);

    const generalInfo = {
        nameValue,
        setNameValue,  
        emailValue,
        setEmailValue,   
        countryName,
        setCountryName,
        cityName,
        setCityName,
        contactNumber,
        setContactNumber,
    }

    const universityInfo = {
        universityName, 
        setUniversityName,
        GPAValue,
        setGPAValue,
        DOG,
        setDOG,
        achievements,
        setAchievements,
    }

    return (
        <>
            <Form generalInfo={generalInfo} universityInfo={universityInfo}></Form>
            <CV generalInfo={generalInfo} universityInfo={universityInfo}></CV>    
        </>
    )
}


