let spaceship = {
    passengers: [{name: 'Space Cats'}], // Object nested in Spaceship
    telescope: { // Object nested in Spaceship
      yearBuilt: 2018, // Object nested in Telescope
      model: "91031-XLT", // Object nested in Telescope
      focalLength: 2032 
    },
    crew: { // Object nested in Spaceship
      captain: { // Object nested in Crew
        name: 'Sandra', // Object nested in Captain
        degree: 'Computer Engineering', // Object nested in Captain
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: { // Object nested in Spaceship
      model: "Nimbus2000" // Object nested in Engine
    },
    nanoelectronics: { // Object nested in Spaceship
      computer: { // Object nested in Nanoelectronics
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': { // Object nested in Nanoelectronics
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0];
  //console.log(capFave);
  
  let firstPassenger = spaceship.passengers[0];
  //console.log(firstPassenger);
  