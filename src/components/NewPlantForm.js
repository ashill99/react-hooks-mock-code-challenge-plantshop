import React from "react";

function NewPlantForm({onSubmitClick}) {

  function handleSubmitClick(event) {
    event.preventDefault()
    console.log(event.target.name.value)
   const  newPlant = {
      name: event.target.name.value, 
      image: event.target.image.value,
      price: event.target.price.value,
    }
    onSubmitClick(newPlant)
    event.target.name.value = ""
    event.target.image.value = ""
    event.target.price.value = ""
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmitClick}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
