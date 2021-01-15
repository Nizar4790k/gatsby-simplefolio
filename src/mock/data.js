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
  area.`,
  paragraphTwo:`I'm proactive visionary and result oriented person able to get knowledge by myself and give
  the best results.`,
  paragraphThree: `The only way to get that is getting focused and deleting all distractions that are in my work
  environment that could affect my every-day performance. By doing this, I get done with each
  sprint-backlog in order to meet the business goals.`,
  paragraphFour: `I have some experience working with agile methodologies as SCRUM and also xP(eXtreme
    Programing)`,
  resume: 'https://drive.google.com/file/d/15BlxNOALxXGloaIzwvryVgl4h9yTxf45/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'AlienBuddies.png',
    title: 'Alienbuddies',
    info: 'Web App that enable users search aliens from internet',
    info2: 'Tecnologies used: HTML,CSS,Javascript,React.js',
    url: 'https://nizar4790k.github.io/alienbuddies/',
    repo: 'https://github.com/Nizar4790k/alienbuddies', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Gamesclub.png',
    title: 'GamesClub',
    info: 'Is a web about that you can read some information about some games',
    info2: 'Tecnologies used: HTML,CSS,Javascript,React.js',
    url: 'https://nizar4790k.github.io/GamesClub/',
    repo: 'https://github.com/Nizar4790k/GamesClub', // if no repo, the button will not show up
  },
 
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nizar4790k@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Nizar4790k',
    },
    {
      id:nanoid(),
      name:'telegram',
      url:'https://t.me/Nizar4790k',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
