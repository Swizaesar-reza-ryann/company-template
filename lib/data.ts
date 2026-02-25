/**
 * Static content data for easy customization
 * Edit these values to customize your website content
 */

export const siteConfig = {
  name: 'TechCorp Solutions',
  description:
    'Leading digital transformation company providing innovative solutions for modern businesses',
  url: 'https://techcorp.example.com',
  ogImage: '/images/og-image.jpg',
  links: {
    email: 'contact@techcorp.example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Ave, Suite 100, New York, NY 10001',
  },
  social: {
    twitter: 'https://twitter.com/techcorp',
    linkedin: 'https://linkedin.com/company/techcorp',
    facebook: 'https://facebook.com/techcorp',
    instagram: 'https://instagram.com/techcorp',
  },
};

export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export const heroSection = {
  title: 'Transform Your Business with Digital Innovation',
  subtitle:
    'We help companies leverage cutting-edge technology to drive growth, efficiency, and competitive advantage in the digital age.',
  cta: {
    primary: 'Get Started',
    secondary: 'View Our Work',
  },
  backgroundImage:
    'https://images.unsplash.com/photo-1451187580459-4bc90843319a?w=1920&h=1080&fit=crop&crop=center',
};

export const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Custom web applications built with modern technologies to deliver exceptional user experiences.',
    icon: 'https://cdn-icons-png.flaticon.com/512/1051/1051278.png',
    features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'Performance Optimization'],
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile applications that engage users and drive business results.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135712.png',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and migration services to modernize your technology stack.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3652/3652148.png',
    features: ['AWS', 'Azure', 'Google Cloud', 'DevOps'],
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description:
      'Data-driven marketing strategies to increase your online presence and customer engagement.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2838/2838694.png',
    features: ['SEO', 'PPC', 'Social Media', 'Content Marketing'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with advanced features and seamless user experience.',
    category: 'Web Development',
    image:
      'https://images.unsplash.com/photo-1556742049-0dcf717c45a6?w=600&h=400&fit=crop&crop=center',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/projects/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Banking Mobile App',
    description: 'Secure and intuitive mobile banking application with biometric authentication.',
    category: 'Mobile App',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    link: '/projects/banking-app',
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    description: 'Comprehensive healthcare management dashboard for medical professionals.',
    category: 'Web Development',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&crop=center',
    tags: ['Next.js', 'PostgreSQL', 'Chart.js'],
    link: '/projects/healthcare-dashboard',
  },
  {
    id: 4,
    title: 'Learning Management System',
    description: 'Scalable LMS platform for educational institutions and corporate training.',
    category: 'Web Development',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    link: '/projects/learning-management',
  },
  {
    id: 5,
    title: 'Food Delivery App',
    description:
      'On-demand food delivery application with real-time tracking and payment integration.',
    category: 'Mobile App',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&crop=center',
    tags: ['Flutter', 'Node.js', 'MongoDB'],
    link: '/projects/food-delivery',
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    description: 'Comprehensive real estate platform with virtual tours and advanced search.',
    category: 'Web Development',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&crop=center',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: '/projects/real-estate',
  },
];

export const aboutContent = {
  mission:
    'To empower businesses with innovative technology solutions that drive growth and success in the digital era.',
  vision:
    'To be the global leader in digital transformation, helping organizations unlock their full potential through cutting-edge technology.',
  values: [
    {
      title: 'Innovation',
      description:
        'We constantly explore new technologies and approaches to deliver cutting-edge solutions.',
    },
    {
      title: 'Quality',
      description:
        'We maintain the highest standards in everything we do, from code quality to customer service.',
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical principles.',
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success.',
    },
  ],
  stats: [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Team Members', value: '50+' },
    { label: 'Years Experience', value: '10+' },
  ],
};

export const contactInfo = {
  address: '123 Business Ave, Suite 100, New York, NY 10001',
  phone: '+1 (555) 123-4567',
  email: 'contact@techcorp.example.com',
  hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
};
