import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  pizzeria,
  oil,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'О себе',
  },
  {
    id: 'work',
    title: 'Опыт работы',
  },
  {
    id: 'contact',
    title: 'Контакты',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Frontend React.js разработчик',
    company_name: 'Digital Sector',
    icon: '',
    iconBg: '#E6DEDD',
    date: 'Сен 2024 - Ноя 2024',
    points: [
      'Разработка пользовательских интерфейсов с использованием React, React-hooks и Redux (Redux-toolkit) для улучшения взаимодействия пользователей с системой.',
      'Внедрил кэширование данных с помощью React, что сократило количество запросов к серверу на 35% и улучшило время отклика приложения.',
      'Работал в команде из 5 человек, используя методологии Agile и Scrum для эффективного управления проектами и своевременного выполнения задач.',
      'Оптимизировал производительность веб-приложений, уменьшая время загрузки страниц с помощью lazy loading и других методов.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Пиццерия',
    description: 'Пиццерия для заказа пицц онлайн',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: pizzeria,
    source_code_link: 'https://github.com/movetron/pizzeria',
  },
  {
    name: 'Анализ двигаталей с помощью ИИ',
    description:
      'На основе данных приложение проводит анализ с помощью ИИ на Python и указывает на ошибки работы двигателя по показателям.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: oil,
    source_code_link: 'https://github.com/movetron/Engine-analysis',
  },
  //   {
  //     name: 'Trip Guide',
  //     description:
  //       'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //     tags: [
  //       {
  //         name: 'nextjs',
  //         color: 'blue-text-gradient',
  //       },
  //       {
  //         name: 'supabase',
  //         color: 'green-text-gradient',
  //       },
  //       {
  //         name: 'css',
  //         color: 'pink-text-gradient',
  //       },
  //     ],
  //     image: tripguide,
  //     source_code_link: 'https://github.com/',
  //   },
];

export { services, technologies, experiences, testimonials, projects };
