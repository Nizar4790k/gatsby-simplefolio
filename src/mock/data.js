import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nizar Sanchez',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: `I'm a computer science student that is looking for a place to apply all my knowledge in the
  area.I'm proactive visionary and result oriented person able to get knowledge by myself and give
  the best results`,
  paragraphTwo: `The only way to get that is getting focused and deleting all distractions that are in my work
  environment that could affect my every-day performance. By doing this, I get done with each
  sprint-backlog in order to meet the business goals.`,
  paragraphThree: `I have some experience working with agile methodologies as SCRUM and also xP(eXtreme
    Programing)`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'Robofriends',
    info: 'Web App that enable users search robots from internet',
    info2: 'Tecnologies used: HTML,CSS,Javascript,React.js',
    url: 'https://nizar4790k.github.io/robofriends/',
    repo: 'https://github.com/Nizar4790k/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
