import aboutpic from "./components/Access/pfp.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  
  title: 'Afeef Raza',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Afeef Raza',
  role: 'React Front-end developer',
  description:
    'My Goal is to create a website exactly like your design and provide satisfactory results!',
  
  social: {
    linkedin: 'https://www.linkedin.com/in/afeef-react-web-developer/',
    github: 'https://github.com/AfeefRaza',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'E-commerce Website',
    description:
      'I used React to build this responsive website. My various React talents, including React router and React hooks, are displayed on this website, and all of the product data was extracted from an API.',
    stack: ['React.js', 'Javascript', 'HTML5','CSS3'],
    sourceCode: 'https://github.com/AfeefRaza/ecom-website',
    livePreview: 'https://afeefraza.github.io/ecom-website/',

  },
  {
    name: 'Optics Store',
    description:
      'Optics store is a responsive React website, it has two main functions Add to cart and currency changer',
    stack: ['React.js', 'Javascript', 'HTML5','CSS3'],
    sourceCode: 'https://github.com/AfeefRaza/opticswebsite',
    livePreview: 'https://afeefraza.github.io/opticswebsite/',
  },
  {
    name: 'Text analyzer',
    description:
      'Text analyzer is a React app that allows you to analyze various aspects of your text while also allowing you to edit it.',
    stack: ['React.js', 'Javascript', 'HTML5','CSS3', 'BOOTSTRAP'],
    sourceCode: 'https://github.com/AfeefRaza/Textanalyzer',
    livePreview: 'https://afeefraza.github.io/Textanalyzer/',
    Youtube: 'https://www.youtube.com/watch?v=sKnUv6-Y-3g'
  },
  {
    name: 'News Website',
    description:
      'I created this responsive website using React. All of the news data is extracted from an API called "NEWSAPI" ',
    stack: ['React.js', 'Javascript', 'HTML5','CSS3', 'BOOTSTRAP'],
    sourceCode: 'https://github.com/AfeefRaza/newspaper',
    Youtube: 'https://www.youtube.com/watch?v=2ycvnJPimY8'
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {
    skillName: "Reactjs",
    fontAwesomeClassname: "fab fa-react fa-2xl",
    progress: "90"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js fa-2xl",
    progress: "85"
  },
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5 fa-2xl",
    progress: "100"

  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt fa-2xl",
    progress: "95"
  },
  {
    skillName: "BOOTSTRAP",
    fontAwesomeClassname: "fa-brands fa-bootstrap fa-2xl",
    progress: "80"
  },

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'afeefraza691@gmail.com',
}

export { header, about, projects, skills, contact }
