const Info = Object.freeze({
  PERSONAL_INFO: {
    name: 'Hiranmayee Buyyanapragada',
    title: 'Full Stack Developer',
    contact: 'hiranmayee@utexas.edu',
  },
  WORK_EXPERIENCE: [
    {
      company: 'WeInfuse',
      role: 'Full Stack Software Engineer',
      period: 'September 2021 - Present',
      description: [
        'Implement and scale features to handle growing client-base (1000+ infusion centers nationwide)',
        'Manage critical production incidents, handle database changes and backfills in production, and resolve client-reported bugs in a timely manner',
        'Develop and enhance Ruby gems to facilitate seamless integration with external parties, such as clearinghouses and patient information services',
        'Help incrementally transition frontend from Angular to React using Angular2React library',
        'Built, own, and maintain the 835P EDI workflow which re-enabled claims submission during the Change Healthcare hacking outage, restoring some business critical operations quickly',
        'Communicate effectively with fellow developers, the CEO, and client success to plan and scope work through scrum'
      ]
    },
    {
      company: 'Silvercar by Audi (Dealerware)',
      role: 'Software Engineering Intern',
      period: 'May 2020 - December 2020',
      description: [
        'Helped onboard and deliver backend services to clients in a deal involving 200+ new dealerships',
        'Utilized Ruby to add capability of using various payment processors based on client’s needs',
        'Helped modernize website design and functionality by migrating page from Angular to React'
      ]
    },
    {
      company: 'Sabre',
      role: 'Software Development Intern',
      period: 'May 2019 - August 2019',
      description: [
        'Built and presented a prototype to query Data Lake tables populated with new Travel Network Ticketing JSON data',
        'Helped eliminate 6 applications and manage settlement file production with rules and filters by market',
        'Created and refined detailed documentation to aid future users of Talend and HUE at Sabre'
      ]
    }
  ],
  LEADERSHIP_EXPERIENCE: [
    {
      organization: 'WeInfuse Event Planning Committee',
      role: 'Member',
      period: 'July 2023 - Present',
      description: [
        'Help organize events within a provided budget for the Austin team (25+ people)'
      ]
    },
    {
      organization: 'Neighborhood HOA',
      role: 'Board Member',
      period: 'October 2023 - Present',
      description: [
        'Schedule and plan annual HOA meeting and community events (Halloween, etc)',
        'Allocate budget according to action items brought up by 40+ homeowners and board members'
      ]
    },
    {
      organization: 'Code Orange',
      role: 'Curriculum Director, Treasurer',
      period: 'August 2018 - May 2020',
      description: [
        'Budgeted for the academic year to maximize educational and experiential benefits to 100+ mentees',
        'Developed and expanded curriculum to include more hands-on learning (Ozobots, Circuit Builder, Code.org, Scratch, Jeroo)'
      ]
    },
    {
      organization: 'Hindu Students Association',
      role: 'Webmaster, Event Co-chair',
      period: 'January 2018 - May 2020',
      description: [
        'Co-chaired (planned, led, fundraised for, and promoted) a 6 day event including a showcase, service events, and a carnival',
        'Submitted applications and attended meetings with the university and related entities for funding and raised $5000+',
       ' Helped put on the largest student run event at UT (Holi) which brought in nearly 9,000 people'
      ]
    }
  ],
  PROJECTS: [
    {
      name: 'Personal Website',
      period: 'August 2024',
      description: [
        'You are looking right at it! :)',
        'Built a personal website with React (JSX) frontend, applying DRY principles for maintainability.',
        'Deployed via GitHub Pages with hash routing to handle routing limitations.',
        'Developed a Ruby on Rails backend to dynamically fetch projects from DB.'
      ]
    },
    {
      name: 'Data Structures Implementations',
      period: 'May 2018',
      description: [
        'Graphs (Dijkstra’s Algorithm, BFS, DFS, Adjacency Matrices/Lists, etc.)',
        'Linked List (creation of nodes, choosing header approach or circular approach, operations like addition and deletion, etc.)',
        'Binary Search Tree (perform traversals [inorder, preorder, etc.] and other tree operations [find, delete, etc.])',
        'Huffman Coding (Java program to compress/decompress files on command using Huffman codes generated with a tree)',
        'Evil Hangman (potential list of chosen words shrinks based on user input to maximize user guessing time using hash maps)'
      ]
    }
  ],
  SKILLS: [
    'React',
    'Ruby on Rails (RoR)',
    'Angular',
    'Git',
    'Docker',
    'Java',
    'Python',
    'Javascript (JS)',
    'SQL',
    'HUE (Hive)',
    'Talend',
    'R',
    'LaTeX',
    'Figma',
    'Procreate'
  ],
  EDUCATION: [
    {
      school: 'University of Texas at Austin',
      degree: 'Bachelor of Science in Mathematics'
    }
  ]
})

export default Info;