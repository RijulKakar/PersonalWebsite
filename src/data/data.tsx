import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  MapIcon,
  // OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio9.png';
import porfolioImage10 from '../images/portfolio/portfolio10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
// import vishnu from '../images/vishnu.jpg'
import profilepic from '../images/profile_pic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
// import { profile } from 'console';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rijul Kakar',
  description: "Rijul Kakar's website. Showcasing my skills and some of my personal/professional life.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Rijul Kakar`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm currently a <strong className="text-stone-100">Sophomore</strong> at <strong className="text-stone-100">Texas A&M
        University</strong> based in College Station,Texas. I'm studying computer engineering and am more focused towards the 
        computer science element of my degree. I plan to complete my undergraduate degree in the Spring of 2025.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Whenever I get time, I love to <strong className="text-stone-100">run</strong>, and go to the 
        <strong className="text-stone-100"> gym</strong>, but also sit down and actively listen to 
        <strong className="text-stone-100"> music.</strong> My favorite genres are 
        <strong className="text-stone-100"> indie, hip/hop</strong>, and <strong className="text-stone-100">rnb.</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `With my time at Texas A&M I've learned many skills, the most important being languages such as C++, Python, Java,
   HTML, and many more. I've also learned Verilog and the basics of building circuits. Through all of this, I am working towards
   a career in chip designing and programming at the hardware level. Some of my personal accomplishments include running a
   marathon, and completing general personal projects.`,
  aboutItems: [
    {label: 'Location', text: 'College Station, TX / Plano, TX', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Interests', text: 'Fitness, Music, Sports', Icon: SparklesIcon},
    {label: 'Study', text: 'Texas A&M University', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 8,
      },
      {
        name: 'Dutch',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 7,
      },
      {
        name: 'CSS',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
    ],
  },
  {
    name: 'Hardware Related',
    skills: [
      {
        name: 'Verilog',
        level: 7,
      },
      {
        name: 'Circuit Boards',
        level: 7,
      },
      {
        name: 'Virtual Circuits',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Electrical Engineering Lab Waveform',
    description: '',
    url: 'https://github.com/RijulKakar',
    image: porfolioImage1,
  },
  {
    title: 'Programmable 7 Segment Display',
    description: '',
    url: 'https://github.com/RijulKakar',
    image: porfolioImage2,
  },
  {
    title: 'General Engineering Lab Magnetic Field',
    description: '',
    url: 'https://github.com/RijulKakar',
    image: porfolioImage4,
  },
  {
    title: 'Electrical Engineering Circuit Board Design',
    description: '',
    url: 'https://github.com/RijulKakar',
    image: porfolioImage5,
  },
  {
    title: 'Discord Music Bot',
    description: '',
    url: 'https://github.com/RijulKakar',
    image: porfolioImage7,
  },
  {
    title: 'Data Structures and Algorithms Code',
    description: '',
    url: 'https://github.com/RijulKakar',
    image: porfolioImage8,
  },
  {
    title: 'Discord Music Bot Continued',
    description: '',
    url: 'https://github.com/RijulKakar',
    image: porfolioImage9,
  },
  {
    title: 'Electrical Engineering Programmed FPGA',
    description: '',
    url: 'https://github.com/RijulKakar',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Fall 2021 - Spring 2025',
    location: 'Texas A&M University',
    title: 'Bachelors of Science in Computer Engineering',
    content: <p>My experience at TAMU has been wonderful so far. I have learned many new things in the field of engineering,
      and will learn much more. I have also met some incredible people and will continue to make more connections while I'm here.
    </p>,
  },
  {
    date: 'Fall 2017 - Spring 2021',
    location: 'Lebanon Trail High School',
    title: 'High School Diploma',
    content: <p>The most important parts of high school for me were computer science class and band. Computer Science taught
      me the importance of programming while Band formed me to be a leader with my experience as a Drum Major.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Fall 2022',
    location: 'Aggie Coding Club',
    title: 'Project Manager for Rock Paper Scissors Bot',
    content: (
      <p>
        I co-lead a team comprising of about 25 people which all focused on many different aspects of developing a rock, paper,
        scissors robot. I specifically worked on the website that played against an RNG bot for RPS.
      </p>
    ),
  },
  {
    date: 'Fall 2022',
    location: 'Texas A&M University',
    title: 'Peer Mentor for Freshman Engineering Students',
    content: (
      <p>
        I was a peer mentor who helped freshman engineering students navigate their first year in University.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Vishnu Ramesh',
      text: 'Rijul is great to work with both in terms of knowledgeability and friendliness. We worked on many projects together this past year and we both have learned a lot from each other.',
      // image: vishnu,
    },
    {
      name: 'Ethan Ortiz',
      text: 'Rijul was an excellent co-project-leader. He lead his team well, and made sure group members were working aptly and efficiently. What really impressed me was how he interacted with his group members.',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Mason Kuehne',
      text: 'As someone who was in band with Rijul, his leadership skills are exceptional. He treated everyone with respect and did not let his status affect that.',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'The best way to reach me is email!',
  items: [
    {
      type: ContactType.Email,
      text: 'rijulkakar1@gmail.com',
      href: 'mailto:reachout@rijulkakar1@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'College Station/Plano, TX, USA',
      // href: '',
    },
    {
      type: ContactType.Instagram,
      text: '@rijulkakar',
      href: 'https://www.instagram.com/rijulkakar/',
    },
    {
      type: ContactType.Github,
      text: 'RijulKakar',
      href: 'https://github.com/RijulKakar',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/RijulKakar'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/9357245/rijduck'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/rijulkakar/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/rijulkakar/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/rijduck'},
];
