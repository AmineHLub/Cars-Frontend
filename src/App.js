import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
// import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Car from './Components/Pages/Car';
import Reserve from './Components/Pages/Reserve';
import MyReservations from './Components/Pages/MyReservations';
import AddCar from './Components/Pages/AddCar';
import DeleteCar from './Components/Pages/DeleteCar';
import backIcon from './assets/images/back-icon.svg';
import './styles/App.css';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  // const [selectedDate, setSelectedDate] = useState(null);

  // const calendar = () => (
  //   <div className="mt-4 bg-blue-400 p-3">
  //     <DatePicker
  //       dateFormat="dd/MM/yyyy"
  //       selected={selectedDate}
  //       onChange={(date) => setSelectedDate(date)}
  //       minDate={new Date()}
  //     />
  //   </div>
  // );

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Car />} />
          <Route path="/Reserve" element={<Reserve />} />
          <Route path="/MyReservations" element={<MyReservations />} />
          <Route path="/AddCar" element={<AddCar />} />
          <Route path="/DeleteCar" element={<DeleteCar />} />
        </Routes>
        <div className="bg-primaryGreen absolute bottom-0 w-16 z-40 h-12 mb-14 rounded-tr-full rounded-br-full md:flex items-center justify-end px-4 hidden">
          <img src={backIcon} alt={backIcon} className="w-4 h-4 rotate-180" />
        </div>
      </main>
    </Router>
  );
}

export default App;
