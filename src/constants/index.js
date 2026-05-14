export const navLinks = [
  {
    path: "/",
    name: "About",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/events",
    name: "Events",
  },
  {
    path: "/experience",
    name: "Experience",
  },
];

export const notableAchievements = [
  {
    title: "Production Systems",
    body: [
      { text: "Built multiple " },
      { text: "production-style backend systems", bold: true },
      { text: " independently, focusing on scalability and clean architecture." },
    ],
  },
  {
    title: "Real-time Systems",
    body: [
      { text: "Developed " },
      { text: "real-time communication systems", bold: true },
      { text: " using WebSockets, enabling seamless instant interactions." },
    ],
  },
  {
    title: "Infrastructure",
    body: [
      { text: "Experienced in " },
      { text: "Dockerized development environments", bold: true },
      { text: " and " },
      { text: "scalable API design", bold: true },
      { text: " for complex applications." },
    ],
  },
];

export const intros = [
  "Python Backend Developer",
  "Django Expert",
  "FastAPI Developer",
  "Problem Solver",
  "Back-end Architect",
  "Open Source Contributor",
];

export const experiences = [
  {
    role: "Freelance Backend Developer",
    year: "2024 - Present",
    company: "Freelance",
    type: "Freelance",
    location: "Remote",
    logo: "/image.png",
    responsibility: [
      [
        { text: "Developed " },
        { text: "backend APIs", bold: true },
        { text: " using " },
        { text: "Django and FastAPI", bold: true },
        { text: " for various clients." },
      ],
      [
        { text: "Built " },
        { text: "authentication and authorization systems", bold: true },
        { text: " to ensure secure access to applications." },
      ],
      [
        { text: "Designed " },
        { text: "scalable PostgreSQL database structures", bold: true },
        { text: " to handle complex data relationships." },
      ],
      [
        { text: "Worked on " },
        { text: "Dockerized backend environments", bold: true },
        { text: " for consistent deployment and local development." },
      ],
      [
        { text: "Implemented " },
        { text: "real-time communication systems", bold: true },
        { text: " using " },
        { text: "WebSockets and Redis", bold: true },
        { text: "." },
      ],
    ],
    techstacks: [
      "Python",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "REST API",
      "WebSockets",
    ],
  },
];

export const projects = [
  {
    title: "Mentor Platform",
    category: "Full Stack · Web App",
    description:
      "A mentorship platform connecting students with mentors. Features mentor discovery, real-time chat, and request systems built with a scalable backend.",
    techstacks: [
      "Django",
      "Django REST Framework",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "WebSockets",
    ],
    status: "active",
    link: "https://app.ahamedshamil.in",
    github: "Niaal-B/EdConnect-Backend",
  },
  {
    title: "Evara E-commerce",
    category: "Full Stack · Web App",
    description:
      "A modern, full-featured e-commerce platform for men's wear. Features secure OTP authentication, social login, Razorpay integration, and a comprehensive admin dashboard with sales analytics.",
    techstacks: [
      "Django",
      "Python",
      "PostgreSQL",
      "Bootstrap",
      "Razorpay",
      "Docker",
      "Gunicorn",
      "JavaScript",
    ],
    status: "active",
    link: "https://github.com/Niaal-B/Evara_Ecommerce",
    github: "Niaal-B/Evara_Ecommerce",
  },
  {
    title: "PingMe Backend",
    category: "Backend · API",
    description:
      "A real-time chat backend built with FastAPI and WebSockets. Implements JWT authentication, persistent message history, and real-time features like typing indicators and room management.",
    techstacks: [
      "FastAPI",
      "Python",
      "WebSockets",
      "JWT",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    status: "active",
    link: "https://github.com/Niaal-B/PingMe_Backend",
    github: "Niaal-B/PingMe_Backend",
  },
  {
    title: "VendEase",
    category: "Full Stack · SaaS",
    description:
      "A comprehensive Vendor Management System that enables organizations to track vendor performance, manage purchase orders, and monitor key metrics like On-Time Delivery and Fulfillment rates.",
    techstacks: [
      "Django",
      "React",
      "PostgreSQL",
      "Vite",
      "TailwindCSS",
      "REST API",
    ],
    status: "active",
    link: "https://github.com/Niaal-B/VendEase",
    github: "Niaal-B/VendEase",
  },
];

export const events = [
  {
    title: "DevFest 25 Attendee",
    event: "GDG Kozhikode",
    year: "2025",
    placement: "Attendee",
    college: "UL CyberPark, Calicut",
    body: [
      { text: "Attended " },
      { text: "DevFest 25", bold: true },
      { text: " organized by GDG Kozhikode. Engaged in meaningful networking and sessions by industry experts like Sathish VJ and Akash Kamerkar." },
    ],
    techstacks: ["Community", "Networking", "GDG", "DevFest"],
    link: "https://www.linkedin.com/posts/nihal-b-b07408254_devfest-gdg-gdgkozhikode-activity-7406292951376646144-OU3Y",
  },
  {
    title: "Hire-a-thon Hackathon",
    event: "KubeNine",
    year: "2024",
    placement: "Participant",
    college: "Brototype Calicut",
    body: [
      { text: "Participated in a " },
      { text: "24-hour hackathon", bold: true },
      { text: " by KubeNine. Developed a " },
      { text: "multi-organization URL shortener", bold: true },
      { text: " from scratch. Focused on scalability and multi-tenant architecture." },
    ],
    techstacks: ["Python", "Django", "System Design", "Scalability"],
    link: "https://www.linkedin.com/posts/nihal-b-b07408254_brototype-brototypebck209-brototypecalicut-share-7386256049235943425--fK2",
  },
  {
    title: "DevFest Attendee",
    event: "GDG Kozhikode",
    year: "2024",
    placement: "Attendee",
    college: "Calicut",
    body: [
      { text: "Attended " },
      { text: "DevFest", bold: true },
      { text: " by GDG Kozhikode. Participated in insightful sessions and networked with industry experts like Roopak A N and Belal K." },
    ],
    techstacks: ["Community", "Networking", "GDG", "DevFest"],
    link: "https://www.linkedin.com/posts/nihal-b-b07408254_devfest-activity-7273980371531132928-FZk2",
  },
];

export const research = [];
