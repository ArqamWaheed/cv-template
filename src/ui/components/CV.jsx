export default function CV({generalInfo}) {
  return (
      <div className="CVDiv">
        <div className="generalInfoCV">
          <h1>{generalInfo.nameValue}</h1>
          <div>
            <p>{generalInfo.emailValue ? generalInfo.emailValue + " |" : null}&nbsp;</p>
            <p>{generalInfo.contactNumber ? generalInfo.contactNumber + " |" : null}&nbsp;</p>
            <p>{generalInfo.countryName ? generalInfo.countryName + `,` : null} {generalInfo.cityName}</p>
          </div>
        </div>
      </div>
  )
}

