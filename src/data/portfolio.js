export const profile = {
  name: 'Malik Muzammil',
  title: 'MERN Stack Developer',
  avatar: 'https://res.cloudinary.com/hsw6qni1/image/upload/v1788325769/ChatGPT_Image_Sep_2_2026_10_08_47_AM.png',
  heroImage: 'https://res.cloudinary.com/hsw6qni1/image/upload/v1788325771/ChatGPT_Image_Sep_2_2026_10_08_39_AM.png',
  residence: 'Pakistan',
  freelance: 'Available',
  address: 'Johar Town, Lahore, PK',
  bio: 'I build modern, scalable web applications with the MERN stack  React, Node.js, Express, and MongoDB. From REST APIs and admin dashboards to WordPress sites, I turn ideas into clean, production ready products. Currently a MERN Stack Developer at Daira Engineering, previously a React Developer at KGE Technologies.',
  cvUrl: '',
  email: 'muzzmudd2021@gmail.com',
  whatsapp: '923044702367',
  linkedin: 'https://www.linkedin.com/in/malikmuzammilawan',
  github: 'https://github.com/MuzmilAwan',
}

export const socialLinks = [
  { name: 'LinkedIn', icon: 'linkedin', url: profile.linkedin },
  { name: 'GitHub', icon: 'github', url: profile.github },
  {
    name: 'Email',
    icon: 'mail',
    url: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`,
  },
  { name: 'WhatsApp', icon: 'whatsapp', url: `https://wa.me/${profile.whatsapp}` },
]

export const languages = [
  { name: 'English', level: 90 },
  { name: 'Urdu', level: 95 },
]

export const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 95 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 75 },
  { name: 'MongoDB', level: 90 },
  { name: 'MySQL', level: 70 },
  { name: 'WordPress', level: 75 },
]

export const extraSkills = [
  'REST APIs & JWT Auth',
  'Tailwind CSS, Bootstrap',
  'Git, GitHub, Postman',
  'SQL & NoSQL Databases',
]

export const navItems = [
  { id: 'hero', label: 'Home', icon: 'home' },
  { id: 'services', label: 'Services', icon: 'services' },
  { id: 'projects', label: 'Projects', icon: 'projects' },
  { id: 'price', label: 'Price', icon: 'price' },
  { id: 'contact', label: 'Contact', icon: 'contact' },
]

export const services = [
  {
    title: 'MERN Stack Development',
    subtitle: 'Web apps, blogs, e commerce',
    icon: 'web',
    description:
      'End to end applications with MongoDB, Express, React, and Node.js  authentication, dashboards, and scalable APIs.',
    // cta: 'HIRE ME',
  },
  {
    title: 'Frontend Development',
    subtitle: 'React, responsive UI',
    icon: 'design',
    description:
      'Fast, accessible interfaces in React and Tailwind. Pixel clean layouts that work on mobile, tablet, and desktop.',
    // cta: 'HIRE ME',
  },
  {
    title: 'Backend & API Development',
    subtitle: 'REST APIs, auth, databases',
    icon: 'server',
    description:
      'Secure REST APIs with Node.js and Express, JWT auth, and MongoDB or SQL data models built for real traffic.',
    // cta: 'HIRE ME',
  },
  {
    title: 'E Commerce Development',
    subtitle: 'Stores, carts, checkouts',
    icon: 'cart',
    description:
      'Online stores with product catalogs, carts, orders, and admin tools so you can sell and manage inventory with ease.',
    // cta: 'HIRE ME',
  },
  {
    title: 'Admin Dashboards',
    subtitle: 'Analytics, CRUD, roles',
    icon: 'dashboard',
    description:
      'Role based dashboards to manage users, content, and reports  charts, filters, and clean CRUD workflows.',
    // cta: 'HIRE ME',
  },
  {
    title: 'Deployment & Maintenance',
    subtitle: 'Hosting, updates, support',
    icon: 'cloud',
    description:
      'Deploy on Vercel, Render, or shared hosting, then keep things running with updates, fixes, and performance checks.',
    // cta: 'HIRE ME',
  },
]

export const projects = [
  {
    title: 'AgriSystem',
    category: 'Full Stack ',
    image: '/projects/agrisystem.png',
    url: 'https://github.com/MuzmilAwan/MissionFertilizer-frontend',
    liveUrl: 'https://mission-fertilizer-frontend.vercel.app',
  },
  {
    title: 'PatientLens',
    category: 'Full Stack · React & Node.js',
    image: '/projects/PatiendLens.jpeg',
    url: 'https://github.com/MuzmilAwan/PatientLens-FullStackProject',
  },
  {
    title: 'TMS',
    category: 'MERN Stack',
    image: '/projects/TMS.png',
    url: 'https://github.com/MuzmilAwan/tms-frontend',
  },
  {
    title: 'E-com Vendor App',
    category: 'React.js',
    image: '/projects/E-com.png',
    url: 'https://github.com/MuzmilAwan/ecomm-vendorapp',
  },
  {
    title: 'Travel Landing Page',
    category: 'React · Pixel-perfect UI',
    image: '/projects/Travling.webp',
    url: 'https://github.com/MuzmilAwan/landing_page_2',
  },
  {
    title: 'Backend API',
    category: 'Node.js & MySQL',
    image: '/projects/api.webp',
    url: 'https://github.com/MuzmilAwan/node-mysql-api',
  },
]

export const pricePlans = [
  {
    name: 'Basic',
    price: 99,
    period: 'Project',
    features: [
      'One time project fee',
      'Up to 3 pages',
      'Responsive design',
      'Contact form',
      'Basic SEO setup',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    price: 199,
    period: 'Project',
    features: [
      'One time project fee',
      'Up to 5 pages',
      'Custom React UI',
      'Responsive design',
      'Contact + WhatsApp',
      'Source code included',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 299,
    period: 'Project',
    features: [
      'Full MERN application',
      'Admin dashboard',
      'REST API & auth',
      'Responsive design',
      'Deployment support',
      '2 weeks of revisions',
    ],
    popular: false,
  },
]

export const sectionCopy = {
  services:
    'Full stack work for startups and businesses  from React frontends and Node APIs to WordPress sites and ongoing support.',
  projects:
    'Here are live products and personal builds full-stack dashboards, APIs, and frontend UIs in React, Node.js, MySQL and MongoDB.',
  price:
    'Simple one time packages for landing pages through full MERN apps. Need something custom? Reach out and we will scope it together.',
  contact:
    'Have a project in mind? Send a message and I will reply by email or WhatsApp  usually within one business day.',
}
