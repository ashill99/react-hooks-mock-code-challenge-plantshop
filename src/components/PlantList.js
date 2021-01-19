import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

const eachPlant = plants.map((plant) => 
(
  <PlantCard plant={plant} key={plant.id} />
)
)

  return (
    <ul className="cards">
      {eachPlant}
      </ul>
  );
}

export default PlantList;
