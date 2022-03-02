/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../../assets/car-page/cars.css';
import baseUrl from '../../Redux/State/baseUrl';

const AddCar = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const submitData = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('model_info', data.model_info);
    formData.append('reservation_fee', data.reservation_fee);
    formData.append('image', data.image[0]);
    await axios.post(`${baseUrl}/cars`, formData);
    navigate('/', { replace: true });
  };
  return (
    <div className="form-container">
      <form id="add-car-form" onSubmit={handleSubmit(submitData)} className="add-box double">
        <h1>Add a Car</h1>
        <div className="labeled">
          <input {...register('name')} required type="text" placeholder="Name" name="name" id="name" />
        </div>
        <div className="labeled">
          <textarea {...register('description')} required className="input bigput" placeholder="Description" maxLength="250" minLength="1" name="description" />
        </div>
        <div className="labeled">
          <input {...register('model_info')} required type="text" placeholder="Model info" name="model_info" id="model_info" />
        </div>
        <div className="labeled">
          <input {...register('reservation_fee')} required type="text" min="1" className="input linput" placeholder="Reservation Fee" id="reservation_fee" name="reservation_fee" />
        </div>
        <div className="labeled">
          <input {...register('image')} required type="file" className="input linput" name="image" id="image" />
        </div>
        <button type="submit" className="log-button add-b">Create</button>
      </form>
    </div>
  );
};
export default AddCar;
