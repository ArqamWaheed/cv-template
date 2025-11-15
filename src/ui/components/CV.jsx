import { format, compareAsc } from "date-fns";

export default function CV({generalInfo, universityInfo}) {
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
        <div className="educationCV">
          {universityInfo.universityName ? <h2>EDUCATION</h2> : null}
          <div>
            <h3>{universityInfo.universityName}</h3>
            <h3>{ universityInfo.DOG ? format(universityInfo.DOG, "LLLL") + " " + format(universityInfo.DOG, "yyyy"): null}</h3>
          </div>
          <p>{ universityInfo.GPAValue ? <em>Grade: {universityInfo.GPAValue}</em> : null}</p>
        </div>
        <div className="educationAchievementsDiv">
          <ul>
            {universityInfo.achievements.map(achievement => {
              return <li>{achievement.text}</li>;
            })}
          </ul>
        </div>
      </div>
  )
}

