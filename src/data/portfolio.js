export const personalInfo = {
  name: 'Karthik Madgula',
  title: 'Full-Stack Developer',
  roles: [
    'Full-Stack Developer',
    'Backend Engineer',
    'FastAPI Developer',
    'React Frontend Developer',
    'Cloud & DevOps Specialist',
    'API Architect',
  ],
  email: 'karthikmadgula1808@gmail.com',
  phone: '+91-6305690466',
  linkedin: 'https://www.linkedin.com/in/karthik-madgula-8a260029b/',
  location: 'Hyderabad, India',
  summary:
    'Full-stack developer with strong, production-proven backend experience building scalable FastAPI services, RESTful APIs, and real-time data pipelines — paired with a growing frontend skill set in React and modern JavaScript. Hands-on with Python, PostgreSQL, Redis, Docker, JWT authentication, and API design for frontend consumption (JSON contracts, CORS, dashboards). Seeking a full-stack role to build end-to-end, well-architected web applications.',
};

export const stats = [
  { label: 'Years Experience', value: '1+', icon: '⚡' },
  { label: 'Production Projects', value: '3+', icon: '🚀' },
  { label: 'Technologies Used', value: '25+', icon: '🔧' },
  { label: 'Academic CGPA', value: '8.63', icon: '🎓' },
];

export const skillCategories = [
  {
    id: 'backend',
    label: 'Backend & APIs',
    emoji: '⚡',
    color: 'cyan',
    skills: [
      'Python', 'FastAPI', 'RESTful APIs', 'Microservices',
      'Async Programming', 'JWT Auth', 'CORS', 'WebSockets', 'ORJSON',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    emoji: '🎨',
    color: 'blue',
    skills: [
      'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS',
      'Responsive UI', 'REST / JSON API Integration',
    ],
  },
  {
    id: 'devops',
    label: 'Cloud & DevOps',
    emoji: '☁️',
    color: 'blue',
    skills: [
      'Docker', 'Containerization', 'CI/CD', 'Git', 'Linux',
      'IIS', 'Health Checks', 'GCP (learning)',
      'Kubernetes (learning)', 'Terraform (learning)',
    ],
  },
  {
    id: 'database',
    label: 'Databases & Caching',
    emoji: '🗄️',
    color: 'purple',
    skills: [
      'PostgreSQL', 'Redis', 'SQL', 'Data Modeling', 'Query Optimization',
    ],
  },
  {
    id: 'integration',
    label: 'Messaging & Integration',
    emoji: '📨',
    color: 'emerald',
    skills: [
      'RabbitMQ', 'Wialon API', 'OpenAI API', 'Gemini API',
      'ASR/TTS Pipelines', 'WebSockets', 'Webhooks',
    ],
  },
  {
    id: 'ml',
    label: 'Data & ML',
    emoji: '🧠',
    color: 'orange',
    skills: [
      'NumPy', 'Pandas', 'PyTorch', 'Machine Learning',
      'DSP', 'MFCC/STFT', 'Librosa',
    ],
  },
  {
    id: 'fundamentals',
    label: 'CS Fundamentals',
    emoji: '📐',
    color: 'cyan',
    skills: [
      'Data Structures', 'Algorithms', 'OOP / OOD',
      'DBMS', 'System Design Basics',
    ],
  },
  {
    id: 'embedded',
    label: 'Embedded & VLSI',
    emoji: '🔌',
    color: 'rose',
    skills: [
      'Embedded C', 'C', 'Arduino (ATmega328P)', '8051',
      'I2C / UART / SPI', 'GPIO / ADC / Timers', 'Verilog HDL', 'FPGA',
    ],
  },
  {
    id: 'learning',
    label: 'Currently Learning',
    emoji: '📈',
    color: 'orange',
    skills: [
      'Java', 'C++', 'Oracle Cloud (OCI)',
      'GCP', 'Kubernetes', 'Terraform',
    ],
  },
];

export const experience = [
  {
    company: 'Purview India Consulting and Services LLP',
    role: 'Software Associate — Backend / Full-Stack Developer',
    period: 'Aug 2025 – Present',
    location: 'Hyderabad, India (On-site)',
    projects: [
      {
        name: 'Construction Site Vehicle Telemetry & Analytics Platform',
        url: 'analytics.castlematic.com',
        emoji: '🏗️',
        description:
          'Real-time and historical vehicle telemetry platform for construction sites powered by Wialon GPS data.',
        bullets: [
          'Containerized FastAPI backend services with Docker for consistent, reliable deployment across dev and production.',
          'Built data ingestion, transformation, and validation pipelines for telemetry sourced via Wialon APIs.',
          'Engineered async REST APIs backed by PostgreSQL and Redis to serve real-time and historical telemetry at scale.',
          'Built endpoints powering analytics dashboards, operational reports, live alerts, and fuel-consumption analysis.',
          'Designed clean JSON API contracts and configured CORS for smooth frontend–backend integration with web dashboards.',
          'Secured APIs with JWT authentication, health-check endpoints, and RabbitMQ async task processing.',
        ],
        tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'JWT'],
      },
      {
        name: 'SkyCMedia — News Aggregation & Content Platform',
        url: 'skycmedia.com',
        emoji: '📰',
        description:
          'Large-scale multi-source, multilingual news aggregation platform with advanced filtering and real-time delivery.',
        bullets: [
          'Developed REST APIs for multi-source, multilingual article ingestion, search, filtering, and content delivery consumed by web frontends.',
          'Implemented advanced filtering (date, category, source, title search) and hash-based deduplication (title + URL hashing) to prevent duplicate entries in PostgreSQL.',
          'Implemented JWT-secured access (access + refresh tokens) and background schedulers for maintenance.',
          'Deployed to production on IIS with SSL using Docker-containerized services.',
          'Improved API throughput and response times using Redis caching and ORJSON serialization.',
        ],
        tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'IIS'],
      },
      {
        name: 'CallOHM — Voice AI Agent Builder Platform',
        url: 'callohm.com',
        emoji: '🤖',
        description:
          'No-code platform for building and deploying custom voice AI agents with a multi-step call-flow configuration dashboard.',
        bullets: [
          'Built FastAPI backend with REST and WebSocket APIs powering an end-to-end real-time telephony pipeline (streaming ASR → LLM → TTS) achieving sub-second turn latency.',
          'Implemented Bring Your Own Key (BYOK) for OpenAI, Gemini, and other LLM providers with secure key management.',
          'Developed integrations enabling voice agents to connect with WhatsApp, email, and webhooks from a single dashboard.',
          'Containerized backend microservices with Docker for the no-code multi-step call-flow configuration.',
        ],
        tech: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI / Gemini APIs', 'ASR/TTS', 'WebSockets', 'Docker'],
      },
    ],
  },
];

export const projects = [
  {
    name: 'Acoustic Echo Cancellation — Progressive Neural Network',
    category: 'Deep Learning',
    categoryColor: 'purple',
    emoji: '🎙️',
    description:
      'Implemented a Two-Stage Progressive Neural Network (TSPNN) for real-time acoustic echo cancellation with coarse and fine stages to suppress residual echo and enhance speech clarity, outperforming baseline methods.',
    tech: ['Python', 'PyTorch', 'NumPy', 'Librosa'],
  },
  {
    name: 'Voice Recognition System using DSP',
    category: 'Signal Processing',
    categoryColor: 'blue',
    emoji: '🔊',
    description:
      'Built a voice-command recognition pipeline with noise reduction and MFCC-based feature extraction, applying pattern-recognition algorithms for improved classification accuracy.',
    tech: ['MATLAB', 'DSP Toolbox', 'MFCC', 'STFT'],
  },
  {
    name: 'I2C Protocol Implementation on FPGA',
    category: 'VLSI / Digital Design',
    categoryColor: 'cyan',
    emoji: '⚡',
    description:
      'Designed a single-master/single-slave I2C controller in Verilog with start/stop conditions, addressing, and ACK handling. Verified correct data transfer through functional simulation in ModelSim.',
    tech: ['Verilog HDL', 'ModelSim', 'FPGA Simulation'],
  },
  {
    name: 'Biometric Fingerprint Attendance System',
    category: 'Embedded Systems',
    categoryColor: 'emerald',
    emoji: '👆',
    description:
      'Developed a microcontroller-based fingerprint attendance system integrating a fingerprint sensor over UART for user enrollment, identification, and automated logging — eliminating manual errors.',
    tech: ['Embedded C', 'Arduino IDE', 'Fingerprint Sensor', 'UART'],
  },
  {
    name: 'GSM-Based Fire Alarm & Alert System',
    category: 'Embedded Systems',
    categoryColor: 'rose',
    emoji: '🔥',
    description:
      'Built a flame-sensor fire detection system on Arduino Uno with real-time monitoring and threshold-based triggering. Integrated a GSM module using AT commands to automatically send SMS alerts on fire detection.',
    tech: ['Embedded C', 'Arduino Uno', 'GSM Module', 'AT Commands'],
  },
];

export const education = [
  {
    degree: 'B.E. in Electronics and Communication Engineering',
    institution: 'Vasavi College of Engineering, Hyderabad',
    period: '2021 – 2025',
    score: 'CGPA: 8.63',
    icon: '🎓',
  },
  {
    degree: 'Intermediate (Class XII)',
    institution: 'Narayana Junior College, Hyderabad',
    period: '2019 – 2021',
    score: 'Percentage: 98.4%',
    icon: '📚',
  },
  {
    degree: 'Secondary School Certificate (Class X)',
    institution: 'Sri Chaitanya Techno School, Hyderabad',
    period: '2018 – 2019',
    score: 'CGPA: 10',
    icon: '🏫',
  },
];

export const certifications = [
  { name: 'Python Programming', issuer: 'Udemy', icon: '🐍' },
  { name: 'Problem Solving Through Programming in C', issuer: 'NPTEL', icon: '💻' },
  { name: 'Finalist — National Hackathon', issuer: 'Hyderabad', icon: '🏆' },
];
