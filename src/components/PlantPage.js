import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ addNewPlant, setSearchName, filteredPlants }) {
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search setSearchName={setSearchName} />
      <PlantList filteredPlants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
