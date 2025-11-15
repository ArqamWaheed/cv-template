import { useState } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education';

export default function Form({generalInfo}) {
  const [stateIndex, setStateIndex] = useState(0); // 0 Represents first form, 1 the next.. and etc.
  return (
    <div className="formDiv">
        <form action="" autoComplete="off">
          {stateIndex == 0 ? <GeneralInfo generalInfo={generalInfo} setStateIndex={setStateIndex}></GeneralInfo> : null}
          {stateIndex == 1 ? <Education setStateIndex={setStateIndex}></Education> : null}
        </form>
    </div>
  )
}

