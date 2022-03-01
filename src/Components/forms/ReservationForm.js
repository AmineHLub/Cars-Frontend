/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
// const selectOPtions = {
//   options: [{
//     value: 'Option1',
//     label: 'Option1',
//   }, {
//     value: 'Option2',
//     label: 'Option2',
//   }, {
//     value: 'Option3',
//     label: 'Option3',
//   }, {
//     value: 'Option4',
//     label: 'Option4',
//   }, {
//     value: 'Option5',
//     label: 'Option5',
//   }],
// };

const ReservationForm = () => {
  const { handleSubmit } = useForm();
  // const [startDate, setStartDate] = useState(new Date());
  // const [selectValue, setSelectValue] = useState();

  const onSubmit = (data) => console.log(data);
  // const handleSelectChange = (e) => {
  //   setSelectValue(e.target.value);
  // };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-white rounded-md"
    >
      <div className="border border-blue-300 flex items-center">
        p
      </div>
      <div className="border border-blue-300 flex items-center">
        <input type="text" placeholder="Start Date" className="text-gray-300 pl-3 h-14 w-full" />
      </div>
      <div className="border border-blue-300 flex items-center">
        <input type="text" placeholder="Duration" className="text-gray-300 pl-3 h-14 w-full" />
      </div>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
      <div className="w-full h-auto border border-blue-300 flex items-center justify-center pt-10 pb-5">
        <button type="submit" className="bg-blue-500 p-3 rounded-full w-full mx-14 text-white font-semibold cursor-pointer">Reserve</button>
      </div>
    </form>
  );
};

export default ReservationForm;
