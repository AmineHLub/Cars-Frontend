import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
// import ReservationForm from '../forms/ReservationForm';

const Reserve = () => {
  const { handleSubmit } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);

  const onSubmit = (data) => {
    const reserveData = {
      data,
      start_date: selectedDate,
    };

    console.log(reserveData);
  };

  return (
    <div className="h-full bg-primaryGreen">
      <div className="bg-show-car opacity-20" />
      <div className="text-white opacity" />
      <div className="absolute top-0">
        <div className="py-4 px-4">
          <div className="text-center p-4">
            <h3 className="text-white text-lg font-bold">
              RESERVE A CAR
            </h3>
            <p className="text-white mt-5">
              Please fill in the form with with correct details in order to made a reservation. Don&apos;t forget to select a car and your reservation pick up and drop off dates.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white border border-white rounded-md"
          >
            <div className="border border-blue-300 flex items-center justify-center w-full">
              <div className="w-10">
                <div className="flex left-0 w-10 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                  className="h-14 w-full"
                  placeholder="Select date"
                />
              </div>
            </div>
            <div className="border border-blue-300 flex items-center">
              <input type="text" placeholder="Duration" className="text-gray-800 pl-3 h-14 w-full" />
            </div>
            <div className="w-full h-auto border border-blue-300 flex items-center justify-center pt-10 pb-5">
              <button type="submit" className="bg-blue-500 p-3 rounded-full w-full mx-14 text-white font-semibold cursor-pointer">Reserve</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
