import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
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

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Lucas Martin',
  description: "Example site built with Lucas Martin's portfolio",
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

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Lucas Martin.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Toronto based <strong className="text-stone-100">Senior Full Stack Software Engineer</strong>, helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
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
  description: `As a full-stack developer with 9+ years of experience in developing and maintaining web applications for various industries and domains, such as e-commerce, influencer marketing, and digital media. I have led and collaborated with cross-functional teams to deliver scalable, secure, and performant solutions, using a wide range of technologies and tools, such as React, Node.js, PHP, Laravel, AWS, Stripe, Jest, Cypress, and more. I have a strong foundation in developing end-to-end web applications, and I am always eager to take on new challenges and learn new skills and technologies.`,

  aboutItems: [
    {label: 'Location', text: 'Toronto ON, Canada', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Football, Dancing', Icon: SparklesIcon},
    {label: 'Study', text: 'Singapore Institute of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Outdefine', Icon: BuildingOffice2Icon},
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
        name: 'Chineese',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Next.js',
        level: 8,
      },
      {
        name: 'Angular',
        level: 7,
      },
      {
        name: 'Vue',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Express.js',
        level: 8,
      },
      {
        name: 'Laravel',
        level: 7,
      },
      {
        name: 'Django',
        level: 7,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Outdefine',
    description: 'Job Market Platform',
    url: 'https://outdefine.com',
    image: porfolioImage1,
  },
  {
    title: 'Fohr',
    description: '',
    url: 'https://www.fohr.co/',
    image: porfolioImage2,
  },
  {
    title: 'Medley',
    description: '',
    url: 'https://medley-inc.com/',
    image: porfolioImage3,
  },
  {
    title: 'Hilo Labs',
    description: '',
    url: 'https://hilolabs.com/',
    image: porfolioImage4,
  },
  {
    title: 'Real Time Feedback',
    description: '',
    url: 'https://realtimefeedback.com',
    image: porfolioImage5,
  },
  {
    title: 'Marz',
    description: '',
    url: 'https://monstersaliensrobotszombies.com/',
    image: porfolioImage6,
  },
  {
    title: 'Optimize.Ad',
    description: '',
    url: 'https://Optimize.Ad',
    image: porfolioImage7,
  },
  {
    title: 'CroozeNFT',
    description: '',
    url: 'https://croozenft.io',
    image: porfolioImage8,
  },
  {
    title: 'YinzCam Inc',
    description: '',
    url: 'https://www.yinzcam.com/',
    image: porfolioImage9,
  },
  {
    title: 'Seven Cells',
    description: '',
    url: 'https://sevencells.com/',
    image: porfolioImage10,
  },
  {
    title: 'Kuestiona',
    description: '',
    url: 'https://kuestiona.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2010 - 2014',
    location: 'Singapore, Singapore',
    title: 'Singapore Institute of Technology',
    content: <p>Bachelor's Degree in Computer Science</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2021 - November 2023',
    location: 'Outdefine',
    title: 'Founding Full Stack Engineer',
    content: (
      <p>
        • Led a cross-functional Agile development team to deliver a scalable job market platform, using React and Next.js for the frontend, Node.js
        for server-side logic, and AWS services for deployment and infrastructure management. <br />
        • Led the development and launch of Outdefine, a web3 job marketplace from ground up that connects employers and talent in the
        decentralized economy, using React, Typescript, Tailwind, Redux, and Serverless lambda backend hosted on AWS.<br />
        • Built key features such as user authentication, job post and search, skill assessments, and payment processing using Stripe.<br />
        • Architected a scalable and secure cloud-based solution that handled over 100,000 users and 5,000 transactions per month, using AWS
        services such as Lambda, S3, and DynamoDB.<br />
        • Ensured the quality and reliability of the platform by conducting unit and integration testing with Jest, RTL and Cypress, and using Sentry
        and Logrocket for bug tracking and resolution.<br />
      </p>
    ),
  },
  {
    date: 'June 2018 - December 2021',
    location: 'USA Commerce',
    title: 'Senior Full Stack Engineer',
    content: (
      <p>
        • Collaborated with back-end developers to create and deliver a fully functional CRM system to improve customer acquisition and retention. <br />
        • Spearheaded the development and ongoing maintenance of the influencer marketing platforms that connects brands with ambassadors, using PHP, Laravel, and MySQL to deliver a robust and scalable web solution.<br />
        • Implemented features such as press kits, content search, verified reach, follower testimonials, and month in review, using best practices and tools such as Webpack, and Lighthouse.<br />
        • Optimized the website performance, security, and SEO, using techniques such as caching, compression, encryption, and schema markup.<br />
        • Ensured the quality and reliability of the website by conducting testing with PHPUnit, and Laravel Dusk, and using Bugsnag and Logrocket for bug tracking and resolution.<br />
      </p>
    ),
  },
  {
    date: 'August 2016 - May 2018',
    location: 'Hilo Labs',
    title: 'Full Stack Engineer',
    content: (
      <p>
        • Developed microservices using Node.js to build the infrastructure for the client's website, deployed the project on AWS EC2 instances, and implemented CI/CD by integrating with AWS and GitHub actions to contribute to performance improvements, including integration with AWS S3.<br />
        • Designed and implemented a RESTful API that improved web application performance and reduced average response time.<br />
        • Utilized GitHub and JIRA as version control and tracking units to ensure Project management and codebase organization. <br />
        • Facilitated a smooth MVP release by coordination efforts between UI/UX designers and back-end developers. <br />
      </p>
    ),
  },
  {
    date: 'October 2014 - July 2016',
    location: 'Marz',
    title: 'Full Stack Engineer',
    content: (
      <p>
        • Developed a React, React hook, and Material UI front-end web application for the mobile app and web dashboards.<br />
        • Improved the speed and scalability of websites, leading to a decrease in loading times and an increase in user satisfaction ratings.<br />
        • Spearheaded the successful refactoring of the client-side web architecture to introduce a reliable SPA.<br />
        • Implemented interactive user-facing features using React, ensuring a smooth and efficient user experience with maximum scalability.<br />
        • Utilized effective debugging tools to identify areas of performance issues, resulting in improvement of client-side scripts. <br />
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you have any problems, please feel free to contact me. I\'m always open to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'lucasmartin93116@gmail.com',
      href: 'mailto:lucasmartin93116@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Toronto ON, Canada',
      href: 'https://www.google.com/maps/place/Toronto,+ON,+Canada/@43.7182412,-79.3780581,11z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843!16zL20vMGg3aDY?entry=ttu',
    },
    {
      type: ContactType.LinkedIn,
      text: 'lucasmartin',
      href: 'https://linkedin.com/in/',
    },
    {
      type: ContactType.Github,
      text: 'lucasmartin',
      href: 'https://github.com/MkDev11',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mkdev11'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/'},
];
