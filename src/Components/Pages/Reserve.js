import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import baseUrl from '../../Redux/State/baseUrl';

import carIcon from '../../assets/images/car-icon.svg';
import pendingIcon from '../../assets/images/pending-icon.svg';

const Reserve = ({ pendingReservations, setPending }) => {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [selectedCar, setSelectedCar] = useState(null);

  const onSubmit = async (data) => {
    const reserveData = {
      car_id: selectedCar,
      user_id: userState.id,
      duration: data.duration,
    };
    await Axios.post(`${baseUrl}/reservations`, reserveData);
    const newPendingReservations = pendingReservations.filter((element) => element.id !== reserveData.car_id);
    setPending(newPendingReservations);
    navigate('/MyReservations', { replace: true });
  };

  const options = [];
  pendingReservations.map((car) => options.push({ value: car.id, label: car.name }));

  return (
    <div className="absolute h-screen bg-primaryGreen w-full">
      <div className="bg-show-car opacity-20" />
      <div className="text-white opacity" />
      <div className="absolute top-0 h-screen w-full">
        <div className="py-4 px-4 flex flex-col items-center justify-center md:mx-36">
          <div className="text-center p-4 w-full md:w-2/3">
            <h3 data-testid="h3" className="text-white text-lg md:text-2xl md:mb-10 font-bold">
              RESERVE A CAR
            </h3>
            <p data-testid="p" className="text-white mt-5 md:text-xl">
              Please fill in the form with with correct details in order to made a reservation.
            </p>
          </div>
          <form
            data-testid="form"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white border border-white rounded-md w-2/3 md:w-1/2 md:mt-10"
          >
            <div className="border border-gray-300 flex items-center">
              <div className="w-10">
                <div data-testid="image" className="flex left-0 w-10 items-center pl-3 pointer-events-none">
                  <img src={carIcon} alt="carIcon" className="w-5 h-5 text-gray-500" />
                </div>
              </div>
              <Select
                data-testid="select-input"
                onChange={(selected) => setSelectedCar(selected.value)}
                options={options}
                placeholder="Select a car"
                className="w-full h-full"
              />
            </div>
            <div className="border border-gray-300 flex items-center">
              <div className="w-10">
                <div className="flex left-0 w-10 items-center pl-3 pointer-events-none">
                  <img src={pendingIcon} alt="carIcon" className="w-5 h-5 text-gray-500" />
                </div>
              </div>
              <input
                data-testid="duration-input"
                type="text"
                placeholder="Duration"
                className="text-gray-800 pl-3 h-12 w-full"
                {...register('duration')}
              />
            </div>
            <div className="w-full h-auto border border-gray-300 flex items-center justify-center pt-10 pb-5">
              <button type="submit" className="bg-primaryGreen border-2 border-white p-3 rounded-full w-full mx-14 md:w-1/2 text-white font-semibold cursor-pointer">Reserve</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
