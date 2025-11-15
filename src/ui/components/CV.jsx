import { format, compareAsc } from "date-fns";

export default function CV({generalInfo, universityInfo, skillsObj, experienceObj}) {
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
              return <li key={achievement.id}>{achievement.text}</li>;
            })}
          </ul>
        </div>
        <div className="skillsCV">
          {skillsObj.skills.length > 0 ? <h2>TECHNICAL SKILLS</h2>: null}
          {skillsObj.skills.length > 0 ? <hr></hr>: null}
          <div className="skillsListDiv">
            <ul>
              {skillsObj.skills.map(skill => {
                return <li key={skill.id}>{skill.text}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="experienceCV">
          {experienceObj.experiences.length > 0 ? <h2>WORK EXPERIENCE</h2> : null}
          {experienceObj.experiences.length > 0 ? <hr></hr> : null}
          {experienceObj.experiences.map(exp => {
            return (
              <div key={exp.id} className="experienceItem">
                <div className="experienceHeader">
                  <h3>{exp.position}</h3>
                  <p className="experienceDate">
                    {exp.startDate ? format(exp.startDate, "LLLL yyyy") : ""} 
                    {exp.startDate && exp.endDate ? " - " : ""}
                    {exp.endDate ? format(exp.endDate, "LLLL yyyy") : exp.startDate ? " - Present" : ""}
                  </p>
                </div>
                <p className="experienceCompany"><em>{exp.company}</em></p>
                {exp.description ? <p className="experienceDescription">{exp.description}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
  )
}

