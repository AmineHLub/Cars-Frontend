import { useState } from 'react';
import CarDetails from './CarDetails';
import carSampleData from '../../data/sample_data';

const Car = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonStateChange = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div>
      <p>Car</p>
      <button
        type="button"
        onClick={handleButtonStateChange}
        className="m-5 bg-primaryGreen p-3 text-white"
      >
        Goto Reserve Car
      </button>

      {/* car details only show on button trigger  */}
      { isButtonClicked && <CarDetails props={carSampleData} /> }
    </div>
  );
};

export default Car;
