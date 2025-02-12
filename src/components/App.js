import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const petUrl = (filters.type === 'all') ? `http://localhost:3001/pets` : `http://localhost:3001/pets?type=${filters.type}`


  function fetchAnimals(){
      fetch(petUrl)
      .then(res => res.json())
      .then(data => setPets(data))
  }

  function adoptPet(id){
    const updatedPets = pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet;
    })
    setPets(updatedPets)
  }
  
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={setFilters} onFindPetsClick={fetchAnimals}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={adoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
