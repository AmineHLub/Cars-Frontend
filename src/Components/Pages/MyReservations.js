import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createReservationAction } from '../../Redux/Reservation';

const MyReservations = () => {
  // const reservationState = useSelector((state) => state.reservationReducer.reservations);
  // const userState = useSelector((state) => state.userReducer);
  // const carState = useSelector((state) => state.carReducer);
  // const dispatch = useDispatch();

  // const onSubmit = (data) => {
  //   const reserveData = {
  //     car_id: selectedCar,
  //     user_id: userState.id,
  //     start_date: selectedDate,
  //     duration: data.duration,
  //   };

  //   // dispatch the data to the create action
  //   dispatch(createReservationAction(reserveData));
  // };

  useEffect(() => {}, []);

  return (
    <div className="absolute h-screen bg-primaryGreen w-full">
      <div className="bg-show-car opacity-20" />
      <div className="text-white opacity" />
      <div className="absolute top-0 h-screen w-full flex items-start justify-center">
        <div className="py-4 px-4 flex flex-col items-center justify-center">
          <div className="text-center p-4 w-full md:w-2/3">
            <h3 className="text-white text-lg md:text-2xl md:mb-10 font-bold">
              YOUR RESERVED CARS
            </h3>
            <p className="text-white mt-5 md:text-xl">
              You can manage your cars here.
            </p>
          </div>
          <div className="p-1 border overflow-hidden border-white rounded-md w-auto mx-4 md:w-1/2 md:mt-10">
            <div className="overflow-x-auto">
              <div className="shadow-md bg-white w-auto flex justify-center mx-auto">
                <table className="w-auto flex flex-col">
                  <thead>
                    <tr className="flex space-x-5 w-full h-auto bg-gray-800 p-2 text-gray-200">
                      <th className="text-sm">Name</th>
                      <th className="text-sm">Description</th>
                      <th className="text-sm">Start Date</th>
                      <th className="text-sm">End Date</th>
                      <th className="text-sm">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex space-x-5 w-full p-2">
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>Name</td>
                      <td>duration</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservations;
