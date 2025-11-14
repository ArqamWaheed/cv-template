import { useState } from 'react'
import GeneralInfo from './GeneralInfo'

export default function Form({generalInfo, setNameValue}) {
    
  return (
    <div class="formDiv">
        <form action="" autocomplete="off">
            <GeneralInfo generalInfo={generalInfo} setNameValue={setNameValue}></GeneralInfo>
        </form>
    </div>
  )
}

