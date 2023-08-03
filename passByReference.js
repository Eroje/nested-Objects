
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  let greenEnergy = obj => { // This function will change fuel type when called
    obj['Fuel Type'] = 'avocado oil';
  };
  
  let remotelyDisable = obj => { // This function will ass key-value pair when called
    obj.disabled = true;
  }
  
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  
  console.log(spaceship);
  
  
  
  