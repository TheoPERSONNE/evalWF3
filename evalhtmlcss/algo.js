function angle(a, b) {
    return 180 - (a + b);
  }

console.log(angle(20, 80))
console.log(angle(90, 30))

function années(année) {
    return (année % 4 === 0 && année % 100 !== 0) || année % 400 === 0;
  }

console.log(années(2030))
console.log(années(2020))

function findAdults(arr) {
    const adulte = [[], []];
    arr.forEach(person => {
      if (person.age >= 18) {
        adulte[person.sex === 'female' ? 0 : 1].push(person);
      }
    });
    return adulte;
  }
  
  const persons = [
    { name: 'Mary Poppins', age: 32, sex: 'female' },
    { name: 'Tony Stark', age: 36, sex: 'male' },
    { name: 'John Doe', age: 12, sex: 'male' },
    { name: 'Jane Doe', age: 6, sex: 'female' },
    { name: 'Maggie Simpson', age: 2, sex: 'female' },
    { name: 'Leonardo', age: 92, sex: 'male' },
    { name: 'Carla Moreau', age: 24, sex: 'female' },
    { name: 'Mickael Jackson', age: 17, sex: 'male' },
    { name: 'Penelope Milena', age: 27, sex: 'female' },
    { name: 'Homer Simpson', age: 45, sex: 'male' },
    { name: 'Leonardo Di Caprio', age: 42, sex: 'male' },
    { name: 'Carla Bruni', age: 54, sex: 'female' },
    { name: 'Lisa Simpson', age: 13, sex: 'female' },
    { name: 'Millie Bobby Brown', age: 15, sex: 'female' },
    { name: 'Penelope Cruz', age: 47, sex: 'female' },
  ];

  
  const result = findAdults(persons);
  console.log(result);

  function theaterSeats() {
    const x = 26;
    const y = 100;
    const tab = [];
  
    for (let i = 1; i <= x; i++) {
      const z = [];
      for (let tab = 1; tab <= y; tab++) {
        const w = i + "-" + tab;
        z.push(w);
      }
      tab.push(z);
    }
    return tab;
  }
  
  console.log(theaterSeats());
  