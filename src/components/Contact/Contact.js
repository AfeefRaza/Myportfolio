import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { contact,about } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const { social } = about
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contactinfo'>
      {social && (
          <>
            {social.github && (
              <a target="_blank" rel="noreferrer"
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a target="_blank" rel="noreferrer"
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
        </div>
    </section>
  )
}

export default Contact
