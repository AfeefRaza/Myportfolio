import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import YouTubeIcon from '@material-ui/icons/YouTube';
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a target="_blank" rel="noreferrer"
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a target="_blank" rel="noreferrer"
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
    
    {project.Youtube && (
      <a target="_blank" rel="noreferrer"
        href={project.Youtube}
        aria-label='live preview'
        className='link link--icon'
      >
        <YouTubeIcon />
      </a>
    )}
    
  </div>
)

export default ProjectContainer
