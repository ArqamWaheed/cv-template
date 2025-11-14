import { useState } from 'react'

export default function CV({generalInfo}) {
  console.log("Gurty");
  return (
      <div class="CVDiv">
        <p>{generalInfo.nameValue}</p>
      </div>
  )
}

