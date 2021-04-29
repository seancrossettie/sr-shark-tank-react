const students = [
  {
    id: '01',
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false
  },
  {
    id: '02',
    firstName: 'Ben',
    lastName: 'Jarrett',
    isDead: false
  },
  {
    id: '03',
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: '04',
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false
  },
  {
    id: '05',
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false
  },
  {
    id: '06',
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false
  },
  {
    id: '07',
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: '08',
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false
  },
  {
    id: '09',
    firstName: 'Gabbie',
    lastName: 'Tobermann',
    isDead: false
  },
  {
    id: '10',
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false
  },
  {
    id: '11',
    firstName: 'John',
    lastName: 'Maple',
    isDead: false
  },
  {
    id: '12',
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false
  },
  {
    id: '13',
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false
  },
  {
    id: '13',
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false
  },
  {
    id: '14',
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false
  },
  {
    id: '15',
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false
  },
  {
    id: '16',
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false
  },
  {
    id: '17',
    firstName: 'Lindsay',
    lastName: 'Satterfield',
    isDead: false
  },
  {
    id: '18',
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false
  },
  {
    id: '19',
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false
  },
  {
    id: '20',
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: false
  },
  {
    id: '21',
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false
  },
  {
    id: '22',
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    isDead: false
  },
  {
    id: '23',
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false
  }
];

const livingStudents = (studentArray) => {
  const liveStudents = studentArray.filter((student) => student.isDead === false);
  return liveStudents;
};

const dearlyBeloved = (studentArray) => {
  const deadStudents = studentArray.filter((student) => student.isDead === true);
  return deadStudents;
};

const followTheLight = (studentArray) => {
  const eatenStudent = studentArray[Math.floor(Math.random() * (studentArray.length - 1))];
  console.warn(eatenStudent);
  return eatenStudent;
};

export {
  students, livingStudents, dearlyBeloved, followTheLight
};
