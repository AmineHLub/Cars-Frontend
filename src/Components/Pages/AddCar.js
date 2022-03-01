import React from 'react';

const AddCar = () => (
  <div className="container">
    <div className="add-box">
      <h1>Add a Car</h1>
      <div className="labeled">
        <input required type="text" placeholder="Name" name="name" id="name" />
      </div>
      <div className="labeled">
        <textarea required className="input bigput" placeholder="Description" maxLength="250" minLength="1" name="description" />
      </div>
      <div className="labeled">
        <input required type="text" placeholder="Model_info" name="model_info" id="model_info" />
      </div>
      <div className="labeled">
        <input required type="number" min="1" className="input linput" placeholder="Reservation Fee" id="reservation_fee" name="reservatio_fee" />
      </div>
      <div className="labeled">
        <input type="file" className="input linput" name="image" id="image" />
      </div>
      <button type="button" className="log-button add-b">Create</button>
    </div>
  </div>
);
export default AddCar;
