import { useState } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education';
import TechSkills from './TechSkills';
import PastExperience from './PastExperience';

export default function Form({generalInfo, universityInfo, skillsObj, experienceObj}) {
  const [stateIndex, setStateIndex] = useState(0); // 0 Represents first form, 1 the next.. and etc.
  return (
    <div className="formDiv">
        <form action="" autoComplete="off">
          {stateIndex == 0 ? <GeneralInfo generalInfo={generalInfo} setStateIndex={setStateIndex}></GeneralInfo> : null}
          {stateIndex == 1 ? <Education universityInfo={universityInfo} setStateIndex={setStateIndex}></Education> : null}
          {stateIndex == 2 ? <TechSkills skillsObj={skillsObj} setStateIndex={setStateIndex}></TechSkills> : null}
          {stateIndex == 3 ? <PastExperience experienceObj={experienceObj} setStateIndex={setStateIndex}></PastExperience> : null}

        </form>
    </div>
  )
}

