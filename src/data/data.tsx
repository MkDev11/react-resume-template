import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'EH-Resume',
  description: "Eduardo's personal website.",
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
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Eduardo.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Laredo, Texas based{' '}
        <strong className="text-stone-100"> Student / IT Technician / Writer / Programmer</strong>. Help, passion, adapt
        and learn would be the words that define me the most.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        You may see me listening to <strong className="text-stone-100">music</strong>, writing about how I{' '}
        <strong className="text-stone-100">feel</strong>, or attempting to combat{' '}
        <strong className="text-stone-100">impostor syndrome.</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
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
  description: `I am a student, a passionate blogger, a programmer, and an IT technician. My heart beats for building web applications with AWS, Python, Node.js, Linux, and Windows. I enjoy troubleshooting, scripting, and understanding people's needs. Through teamwork, I have learned to persuade, adapt, and grow. My goals include personal development, knowledge sharing, and returning love to my family. Technology is my future, and each new project is an exciting adventure. I enjoy being able to try new things that I would never have imagined myself doing. It's not just a job—it's my way of making the world a bit brighter.`,

  aboutItems: [
    {label: 'Location', text: 'Laredo, Texas, US', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'U.S Citizen', Icon: FlagIcon},
    {label: 'Interests', text: 'Writing, Boxing, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Laredo College', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'IT Technician / Blog writer', Icon: BuildingOffice2Icon},
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
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Django',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 4,
      },
      {
        name: 'MySQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'Windows/Linux',
        level: 10,
      },
      {
        name: 'Windows Server/Linux Server',
        level: 8,
      },
      {
        name: 'Scripting',
        level: 8,
      },
      {
        name: 'VMs',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'MSC',
    description: 'Custom Broker Platform',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Logistic Regression',
    description:
      'Demonstrates how to use logistic regression to predict the probability of a binary event, such as passing or failing an exam.',
    url: 'https://github.com/Lalo0502/Logistic-Regression',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020 - 2024',
    location: 'Laredo, Texas',
    title: 'Laredo College',
    content: <p>CIS, Networking Technologies with Cloud Computing, AAS. </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2024 - Present',
    location: 'Ghost System Inc',
    title: 'IT Technician / Blog Writer',
    content: (
      <p>
        • Troubleshoot computer problems for clients, such as hardware, software, and network issues. <br />
        • Troubleshoot ISP issues for clients, such as connectivity, speed, or security problems.
        <br />
        • Write blogs on IT topics, such as tips, trends, or reviews for the company's website.
        <br />
        • Install, configure and maintain printers and other devices for clients, according to their needs and
        preferences.
        <br />
      </p>
    ),
  },
  {
    date: 'Aug 2020 - April 2021',
    location: 'Fire Up Staffing LLC',
    title: 'Labor',
    content: (
      <p>
        • Maintained a clean and safe work environment by following company policies and procedures. <br />
        • Loaded and unloaded delivery vehicles and verified inventory accuracy and condition.
        <br />
        • Marked, labeled, and stored inventory according to specifications and prepared them for shipment.
        <br />
        • Communicated errors and discrepancies to relevant parties and resolved issues promptly.
        <br />
        • Demonstrated leadership and initiative by taking on additional tasks and responsibilities when needed.
        <br />
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Do think about getting in touch with me! I'm always up for new challenges and projects.",
  items: [
    {
      type: ContactType.Email,
      text: 'Eduardo_Hernandez13@outlook.es',
      href: 'mailto:Eduardo_Hernandez13@outlook.es',
    },
    {
      type: ContactType.Location,
      text: 'Laredo, Texas, US',
      href: 'https://www.google.com/maps/place/Laredo,+Texas,+EE.+UU./@27.5460859,-99.7003636,11z/data=!3m1!4b1!4m6!3m5!1s0x8660c06ca7f93d25:0xb4407a5349567491!8m2!3d27.5035613!4d-99.5075519!16zL20vMDEwYm5y?entry=ttu',
    },
    {
      type: ContactType.LinkedIn,
      text: 'lalo0502',
      href: 'https://www.linkedin.com/in/lalo0502/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/lalo0502/'},
];
