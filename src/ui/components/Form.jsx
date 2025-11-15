import { useState } from 'react'
import GeneralInfo from './GeneralInfo'

export default function Form({generalInfo}) {
    
  return (
    <div className="formDiv">
        <form action="" autoComplete="off">
            <GeneralInfo generalInfo={generalInfo}></GeneralInfo>
        </form>
    </div>
  )
}

