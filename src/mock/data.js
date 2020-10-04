import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gopalakrishnan C | Frontend Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Gopalakrishnan C',
  subtitle: 'Frontend Developer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'gopal.JPG',
  paragraphOne: 'Having 3+ years of experience in Frontend development with some knowledge of backend Technology. I have proficient knowledge in JavaScript and able to learn any technology within less time by exploring official documentation.',
  paragraphTwo: 'I am a Pet Lover, Traveler, PC Enthusiast ❤',
  paragraphThree: '',
  resume: 'https://drive.google.com/uc?export=download&id=1fFD4a6B50K29KafZlT1ZxRmhYilIuEYT', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'PixelArt.png',
    title: 'PixelArt',
    info: 'PixelArt Application created using vannila JavaScript. And used all the important concept to improve the web performance.',
    info2: 'PixelArt has Undo, Redo, EyeDropper, Draw Mode, Color Spotter Game, eraser, Dynamic Grid, Color Picker, Download as PNG features.',
    url: 'https://gopal1996.github.io/PixelArt/',
    repo: 'https://github.com/gopal1996/PixelArt', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'krishnan.gopal34@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gopal1996',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gopal1996',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
