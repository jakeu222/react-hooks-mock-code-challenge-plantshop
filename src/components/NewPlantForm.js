import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const [form, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  function handleChange(e) {
    setFormData({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit() {
    const newPlant = {
      name: form.name,
      image: form.image,
      price: form.price

    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then(addNewPlant);
  }



  return (
    <div className="new-plant-form" >
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={form.name} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={form.price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div >
  );
}

export default NewPlantForm;
