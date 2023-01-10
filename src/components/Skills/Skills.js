import uniqid from 'uniqid'
import ProgressBar from "@ramonak/react-progress-bar";
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
  {skills.map((skill) => (
    <li key={skill.skillName} className='skills__list-item btn btn--plain'>
      <div className="skill_names">
      <i className={skill.fontAwesomeClassname}>  </i>
      <p>{skill.skillName} </p>
      </div>
      
      <ProgressBar completed={skill.progress} customLabel="&#8205;" />
    </li>
  ))}

</ul>
    </section>
  )
}

export default Skills

