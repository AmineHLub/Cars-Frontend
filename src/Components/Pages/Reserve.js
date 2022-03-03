import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { createReservationAction } from '../../Redux/Reservation';

import carIcon from '../../assets/images/car-icon.svg';
import pendingIcon from '../../assets/images/pending-icon.svg';

const Reserve = ({ pendingReservations }) => {
  console.log(pendingReservations);
  const userState = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [selectedCar, setSelectedCar] = useState(null);

  const onSubmit = (data) => {
    const reserveData = {
      car_id: selectedCar,
      user_id: userState.id,
      duration: data.duration,
    };

    // dispatch the data to the create action
    dispatch(createReservationAction(reserveData));
    // pendingReservations = [];
  };

  // will hold the options for the car selection tag
  const options = [];

  // loop through the cars and push the object to the options arrays
  pendingReservations.map((car) => options.push({ value: car.id, label: car.name }));

  return (
    <div className="absolute h-screen bg-primaryGreen w-full">
      <div className="bg-show-car opacity-20" />
      <div className="text-white opacity" />
      <div className="absolute top-0 h-screen w-full flex items-center justify-center">
        <div className="py-4 px-4 flex flex-col items-center justify-center">
          <div className="text-center p-4 w-full md:w-2/3">
            <h3 className="text-white text-lg md:text-2xl md:mb-10 font-bold">
              RESERVE A CAR
            </h3>
            <p className="text-white mt-5 md:text-xl">
              Please fill in the form with with correct details in order to made a reservation. Don&apos;t forget to select a car and your reservation pick up and drop off dates.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white border border-white rounded-md w-2/3 md:w-1/2 md:mt-10"
          >
            <div className="border border-gray-300 flex items-center">
              <div className="w-10">
                <div className="flex left-0 w-10 items-center pl-3 pointer-events-none">
                  <img src={carIcon} alt="carIcon" className="w-5 h-5 text-gray-500" />
                </div>
              </div>
              <Select
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
