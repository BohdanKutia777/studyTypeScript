type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

// create a function that change level of incoming developer
function gradeDeveloper(developer: Developer) {
  if (developer.level === 'junior') {
    developer.level = 'middle';
  } else if (developer.level === 'middle') {
    developer.level = 'senior';
  } else {
    console.log('You very good developer');
  }
  return developer;
}

gradeDeveloper({ login: 'Anton', skills: ['HTML', 'CSS'], level: 'junior' });
