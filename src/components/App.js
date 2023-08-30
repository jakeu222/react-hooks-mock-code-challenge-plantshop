import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plantsData, setPlantsData] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlantsData(data));
  }, []);

  const filteredPlants = plantsData.filter(plant => {
    return plant.name.toLowerCase().includes(searchName.toLowerCase());
  })

  function addNewPlant(newPlant) {
    setPlantsData([...plantsData, newPlant])
  }

  return (
    <div className="app">
      <Header />
      <PlantPage setSearchName={setSearchName} searchName={searchName} filteredPlants={filteredPlants} addNewPlant={addNewPlant} />
    </div>
  );
}

export default App;
