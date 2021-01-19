import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(setPlants)
  },[])

  function handleSubmitPlant(newPlant) {
    console.log('new plant from top')
    console.log(newPlant)
    const theNewPlant = fetch('http://localhost:6001/plants', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newPlant)
  })
    .then(r => r.json())
    .then(newPlantData => {
      setPlants([...plants, newPlantData])
    })
  }

    const results = plants.filter((p) =>  {
    return p.name.toLowerCase().includes(search.toLowerCase())
    })


  return (
    <main>
      <NewPlantForm onSubmitClick={handleSubmitPlant}/>
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={results}/>
    </main>
  );
}

export default PlantPage;
