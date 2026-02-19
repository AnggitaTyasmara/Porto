

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Anggita Tyasmara",
    title: "WEB DEVELOPER",
    description:
      "Passionate about creating intuitive and engaging user experiences. Fresh graduate specializing in web development with modern technologies.",
    profileImage: "/profile.jpg",
    location: "Yogyakarta, Indonesia",
  },

  // Statistics
  stats: [
    {
      number: "+1",
      label: "YEARS OF\nEXPERIENCE",
    },
    {
      number: "4",
      label: "PROJECTS\nCOMPLETED",
    },
    {
      number: "2",
      label: "INTERNSHIP\nEXPERIENCE",
    },
  ],

  // Skills/Expertise Areas
  skills: [
    {
      title: "WEB DEVELOPMENT,\nFRONTEND & BACKEND",
      hasPattern: false,
    },
    {
      title: "JAVASCRIPT, PHP,\nLARAVEL, NODE.JS, CodeIgniter",
      hasPattern: true,
    },
  ],

  // Social Media Links
  social: [
    {
      name: "Github",
      icon: "Github",
      url: "https://github.com/AnggitaTyasmara",
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://linkedin.com/in/anggita-tyasmara-020164318",
    },
    {
      name: "Email",
      icon: "Mail",
      url: "mailto:anggitotsmr@gmail.com",
    },
  ],

  // Projects
  projects: [
    {
      name: "Schotella",
      description: "Full-stack CodeIgniter Application. Developed an ordering website for the Schotella MSME, allowing customers to view the menu and place orders online. The system is equipped with an order management feature for admins to confirm customer orders, as well as CRUD (Create, Read, Update, Delete) features for the food menu and admin user data. Authentication and password change features are also available to maintain security and manage system access.",
      image: "/schotella.png?height=80&width=120",
      technologies: ["CodeIgniter3", "PHP", "CSS", "MySQL", "HTML"],
      url: "https://github.com/AnggitaTyasmara/schotella",
      featured: true,
    },
    {
      name: "Login KPPN",
      description: "PHP Menu Login for KPPN Yogyakarta. Developed a website for the Yogyakarta KPPN's internal login and menu system, which serves as an access portal for employees to log in and access various internal menus as needed. The system features user authentication, dynamic menu management, and employee account management. Admins have access rights to perform CRUD (Create, Read, Update, Delete) on menu data and employee accounts, as well as manage the reset/forgot password feature to ensure the security and smooth operation of the internal system.",
      image: "/kppnyog.png?height=80&width=120",
      technologies: ["PHP", "HTML", "CSS"],
      url: "https://github.com/AnggitaTyasmara/loginkppn",
      featured: true,
    },
    {
      name: "Game Matematika",
      description: "Design Application on Figma. Designing a UI/UX for a mobile-based math game with interactive and gamified concepts to increase learning interest. The design is simple, engaging, and intuitive, with easy navigation, a user-friendly interface, and features for levels, scores, and real-time feedback to support a fun learning experience.",
      image: "/gamemtk.png?height=80&width=120",
      technologies: ["Figma"],
      url: "https://www.figma.com/proto/xTr5TFCnOeZfQk9Tn2xdjZ/Ui-KostKita?node-id=502-1168&p=f&t=YuKwrLEserUbpEO1-1&scaling=scale-down&content-scaling=fixed&page-id=32%3A349&starting-point-node-id=502%3A1168",
      featured: true,
    },
    {
      name: "Kost Kita",
      description: "Design Application on Figma. The UI/UX design for the Kost Kita mobile app was designed to help travelers find boarding houses easily. The design is simple and intuitive, featuring location search, price and amenities filters, and a modern interface to help users find and contact boarding house owners quickly and efficiently.",
      image: "/kostkita.png?height=80&width=120",
      technologies: ["Figma"],
      url: "https://www.figma.com/proto/xTr5TFCnOeZfQk9Tn2xdjZ/Ui-KostKita?node-id=144-2471&p=f&t=g53WwDv5fY3N7XSc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=144%3A2471",
      featured: true,
    },
  ],

  // Work Experience
  experience: [
    {
      company: "KPPN Yogyakarta",
      role: "Junior Web Developer",
      period: "November-December 2022 (2 months)",
      description:
        "Developing and maintaining web applications using php. Working on client projects and learning modern web development practices.",
      location: "Yogyakarta, Indonesia",
      technologies: ["PHP", "JavaScript", "MySQL"],
    },
    {
      company: "Manna Kampus",
      role: "Event Salesperson",
      period: "January-March 2025 (3 months)",
      description:
        "Serve Customers at the Cashier Desk. Maintain cleanliness and tidiness of the cashier area. Help customers find items in the store. Organize shopping bags, receipts, and other cashier equipment so they are always ready for use.",
      location: "Yogyakarta, Indonesia",
      technologies: ["-"],
    },
    
  ],

  // Technical Skills/Tools
  tools: [
    { name: "JavaScript", icon: "FileCode", category: "Language" },
    { name: "PHP", icon: "Code", category: "Language" },
    { name: "Laravel", icon: "Box", category: "Framework" },
    { name: "Node.js", icon: "Server", category: "Backend" },
    { name: "MySQL", icon: "Database", category: "Database" },
    { name: "Bootstrap", icon: "Paintbrush", category: "CSS Framework" },
  ],

  // Blog Posts/Thoughts
  thoughts: [
    {
      title: "Building Scalable React Applications",
      description:
        "Best practices and architectural patterns for creating maintainable and performant React applications at scale.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      tags: ["React", "Architecture", "Performance"],
      url: "/blog/scalable-react-applications",
    },
    {
      title: "The Future of Web Development",
      description:
        "Exploring emerging technologies and trends that will shape the future of web development and user experiences.",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      tags: ["Web Development", "Trends", "Future"],
      url: "/blog/future-web-development",
    },
    {
      title: "Clean Code Principles in JavaScript",
      description: "Essential guidelines and practices for writing clean, readable, and maintainable JavaScript code.",
      date: "Nov 12, 2024",
      readTime: "6 min read",
      tags: ["JavaScript", "Clean Code", "Best Practices"],
      url: "/blog/clean-code-javascript",
    },
  ],

  // Navigation Items
  navigation: [
    { id: "hero", icon: "Home", label: "Home" },
    { id: "projects", icon: "Folder", label: "Projects" },
    { id: "experience", icon: "Layout", label: "Experience" },
    //{ id: "thoughts", icon: "Link", label: "Thoughts" },
    { id: "contact", icon: "Edit", label: "Contact" },
  ],

  // Contact Information
  contact: {
    email: "anggitotsmr@gmail.com",
    phone: "+62 881-6773-116",
    location: "Yogyakarta, Indonesia",
    availability: "Available for full-time opportunities",
    preferredContact: "email",
  },

  // SEO/Meta Information
  seo: {
    title: "Anggita Tyasmara - Web Developer",
    description:
      "Fresh graduate web developer from Yogyakarta specializing in JavaScript, PHP, Laravel, and modern web development.",
    keywords: ["Web Developer", "JavaScript", "PHP", "Laravel", "Node.js", "Fresh Graduate"],
    ogImage: "/og-image.jpg",
    twitterHandle: "@anggita_tyasmara",
  },

  // Theme/Design Configuration
  theme: {
    primaryColor: "#ffffff",
    secondaryColor: "#6b7280",
    accentColor: "#000000",
    backgroundColor: "#000000",
    cardBackground: "#ffffff",
    borderRadius: "12px",
    fontFamily: "Inter, sans-serif",
  },
}

export type PortfolioData = typeof portfolioData
