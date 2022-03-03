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
    <div className="absolute h-screen bg-primaryGreen w-full">
      <div className="bg-show-car opacity-20" />
      <div className="text-white opacity" />
      <div className="absolute top-0 h-screen w-full flex items-start justify-center">
        <div className="py-4 px-4 flex flex-col items-start justify-center">
          <div className="text-center p-4 w-full md:w-2/3">
            <h1 className="text-white text-lg md:text-2xl md:mb-10 font-bold">
              ADD A CAR
            </h1>
            <p className="text-white mt-5 md:text-xl">
              Please fill in the form with with correct details in order to add a new car.
            </p>
          </div>
          <div className="mx-5 p-2 md:w-1/2 md:mt-10">
            <form
              onSubmit={handleSubmit(submitData)}
              className="bg-white border border-white rounded-md"
            >
              <div className="border border-gray-300 flex items-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="text-gray-800 pl-3 h-12 w-full"
                  required
                  name="name"
                  {...register('name')}
                />
              </div>
              <div className="border border-gray-300 flex items-center">
                <input
                  type="textarea"
                  placeholder="Description"
                  className="text-gray-800 pl-3 h-12 w-full"
                  required
                  name="description"
                  {...register('description')}
                />
              </div>
              <div className="border border-gray-300 flex items-center">
                <input
                  type="text"
                  placeholder="Model info"
                  className="text-gray-800 pl-3 h-12 w-full"
                  required
                  name="Model info"
                  {...register('model_info')}
                />
              </div>
              <div className="border border-gray-300 flex items-center">
                <input
                  type="number"
                  placeholder="Reservation Fee"
                  className="text-gray-800 pl-3 h-12 w-full"
                  required
                  min="1"
                  name="Reservation Fee"
                  {...register('reservation_fee')}
                />
              </div>
              <div className="border border-gray-300 flex items-center p-3">
                <input
                  type="file"
                  placeholder="Choose File"
                  className="text-gray-800 w-full"
                  required
                  min="1"
                  name="image"
                  {...register('image')}
                />
              </div>
              <div className="w-full h-auto border border-gray-300 flex items-center justify-center pt-10 pb-5">
                <button type="submit" className="bg-primaryGreen border-2 border-white p-3 rounded-full w-full mx-14 md:w-1/2 text-white font-semibold cursor-pointer">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCar;
