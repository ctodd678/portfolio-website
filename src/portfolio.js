const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ctodd678.github.io/portfolio-website',
  title: 'CT.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Connor Todd',
  role: 'Computer Science New-Grad',
  // description:
  //   'Currently looking to start a career in the CS field.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'University Course Utility',
    description:
      'React web-app with a Python back-end, hosted using Flask and NGINX. A simple utility that compiles all courses for University of Guelph and Waterloo into JSON databases. Can be used to search for courses and create interactive graphs of courses, subjects and majors.',
    stack: ['React', 'MaterialUI', 'Python', 'NGINX', 'Flask'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Study Helper',
    description:
      'iOS/Android app created using Flutter and Material UI.',
    stack: ['Flutter/Dart', 'Material UI', 'BookshelfJS'],
    sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Cryptocurrency Auto-Miner',
    description:
      'Automatically switching cryptocurrency mining script. Switches to currently most profitably mineable cryptocurrency using the whattomine.com API.',
    stack: ['Python'],
    sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C',
  'Java',
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Flutter/Dart',
  'Material UI',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ctodd678@mail.com',
}

export { header, about, projects, skills, contact }
