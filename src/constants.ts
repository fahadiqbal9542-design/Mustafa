import { Project, Skill, VideoProject } from './types';
import abdullahPortrait from './assets/images/abdullah_developer_portrait_1787144235932.jpg';

export const PERSONAL_INFO = {
  name: 'Abdullah Developer',
  brandName: 'ABDULLAH DEVELOPER',
  title: 'Creative Director & Full-Stack Developer',
  email: 'inffo.abdullahdeveloper@gmail.com',
  location: 'Afridi Chowk Millat Road Faisalabad',
  availability: 'Available for Hire',
  responseTime: '< 2 Hours',
  timezone: 'GMT+5 (PKT)',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/abdullah-developer/',
    pinterest: 'https://www.pinterest.com/inffoabdullahdeveloper/',
    instagram: 'https://www.instagram.com/abdullahdeveloper/',
    whatsapp: 'https://wa.me/923000000000'
  }
};

export const HERO_IMAGES = [
  abdullahPortrait,
  'https://i.pinimg.com/736x/df/d9/15/dfd915e00664849b356db57f08bdecbe.jpg',
  'https://i.pinimg.com/736x/36/0b/bb/360bbbe7c0c434a227af805238c23de1.jpg'
];

export const VISUALIZATION_SLIDER_IMAGES = [
  'https://i.pinimg.com/736x/bd/fd/96/bdfd96c457bd36831291c2d6c28eb263.jpg',
  'https://i.pinimg.com/736x/45/6c/a6/456ca66c779e3423c1c8736dfb7cc920.jpg',
  'https://i.pinimg.com/736x/1f/bf/6e/1fbf6ec7a444f28fabfe43333d06eb03.jpg',
  'https://i.pinimg.com/736x/ad/e1/5a/ade15ac38d615d150e38d3849ba955c9.jpg',
  'https://i.pinimg.com/736x/f4/59/16/f45916c0a39be416f392bac55abda107.jpg'
];

export const PROJECTS_LIST: Project[] = [
  {
    id: 'free-cv-maker',
    title: 'Free CV Maker',
    description: 'An interactive online resume creation engine designed for instant PDF generation and sleek design customization.',
    image: 'https://www.thegreatapps.com/application/upload/Apps/2019/07/resume-maker-app-147.png',
    link: 'https://freecvmaker-motral.vercel.app/',
    tags: ['React', 'TypeScript', 'PDF Generator', 'Tailwind CSS'],
    featured: true
  },
  {
    id: 'asad-clothes',
    title: 'Asad Clothes',
    description: 'A modern fashion storefront application with responsive catalog browsing and seamless online shopping experience.',
    image: 'https://i.pinimg.com/736x/0f/a8/c0/0fa8c0b72a182acb1f4a2aa31b70933d.jpg',
    link: 'https://asadclothes.vercel.app/',
    tags: ['E-Commerce', 'React', 'UI Design', 'Tailwind'],
    featured: true
  },
  {
    id: 'ss-foundation',
    title: 'SS Foundation',
    description: 'A charitable foundation platform dedicated to social welfare, donation tracking, and community engagement.',
    image: 'https://donation.dawateislamimidlands.net/wp-content/uploads/2025/11/1.webp',
    link: 'https://ssfoundation.vercel.app/',
    tags: ['Community', 'Non-Profit', 'React', 'Tailwind'],
    featured: true
  },
  {
    id: 'crazy-roll-3d',
    title: 'Crazy Roll 3D',
    description: 'A high-octane 3D arcade game featuring fast-paced rolling action, challenging obstacles, and immersive gameplay.',
    image: 'https://imgs.crazygames.com/games/crazy-roll-3d/cover_16x9-1709124312204.png?metadata=none&quality=60&height=4250',
    link: 'https://ghulam-mustafa-kappa.vercel.app/',
    tags: ['3D Gaming', 'WebGL', 'JavaScript', 'Interactive'],
    featured: true
  },
  {
    id: 'motral-particles',
    title: 'Motral Particles',
    description: 'A physics-based interactive art engine that creates stunning visual patterns through real-time particle simulation.',
    image: 'https://thumbs.dreamstime.com/b/abstract-d-heart-shape-made-digital-connections-light-particles-colorful-background-vibrant-artwork-features-353547562.jpg',
    link: 'https://motralparticles.vercel.app/',
    tags: ['Canvas API', 'Physics', 'Interactive Art', 'TypeScript'],
    featured: true
  },
  {
    id: 'tasty-bites',
    title: 'Tasty Bites',
    description: 'An elegant culinary discovery platform showcasing gourmet recipes, meal curation, and seamless food ordering.',
    image: 'https://i.pinimg.com/736x/b2/b7/59/b2b7590d45538d88c20326948104dbcd.jpg',
    link: 'https://tastybites-pi.vercel.app/',
    tags: ['React', 'Culinary UI', 'Interactive', 'Tailwind'],
    featured: true
  }
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: 'video-1',
    title: 'Cinematic Product Showcase',
    description: 'A high-energy commercial edit with custom motion graphic transitions, sound design, and color grading.',
    thumbnail: 'https://i.pinimg.com/736x/7d/38/90/7d38909ba231932527218fcfbf28e55e.jpg',
    pinterestUrl: 'https://www.pinterest.com/pin/905997650064558412/',
    tags: ['After Effects', 'Premiere Pro', 'Commercial'],
    duration: '0:45'
  },
  {
    id: 'video-2',
    title: 'Motion Graphics Commercial',
    description: 'Dynamic 3D particle typography and visual storytelling for modern tech brand promotion.',
    thumbnail: 'https://i.pinimg.com/736x/1f/bf/6e/1fbf6ec7a444f28fabfe43333d06eb03.jpg',
    pinterestUrl: 'https://www.pinterest.com/pin/905997650064558423/',
    tags: ['Motion Design', 'VFX', 'Typography'],
    duration: '1:10'
  },
  {
    id: 'video-3',
    title: 'Hazrat Ali (RA) - Lion of Allah',
    description: 'A powerful spiritual cinematic edit featuring calligraphic animation, deep audio synthesis, and atmospheric particle effects.',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3YGaSR_T18NqdUtQdS5KXduaR9wPYzy7N5g&s',
    pinterestUrl: 'https://www.pinterest.com/inffoghulammustafa/',
    tags: ['Cinematic Edit', 'Calligraphy VFX', 'Sound Design'],
    duration: '0:58'
  }
];

export const SKILLS_LIST: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript & JavaScript', level: 92, category: 'Frontend' },
  { name: 'Tailwind CSS & Styling', level: 98, category: 'Frontend' },
  { name: 'Node.js & Express', level: 88, category: 'Backend' },
  { name: 'REST & GraphQL APIs', level: 90, category: 'Backend' },
  { name: 'Motion & Animations', level: 94, category: 'Frontend' },
  { name: 'UI/UX Design & Branding', level: 92, category: 'Design' },
  { name: 'Video Editing & VFX', level: 90, category: 'Tools' }
];

export const STATS_LIST = [
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Happy Clients', value: 35, suffix: '+' },
  { label: 'Awards Won', value: 12, suffix: '' },
  { label: 'Years Experience', value: 4, suffix: '+' }
];
