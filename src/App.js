import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Car from './Components/Pages/Car';
import Reserve from './Components/Pages/Reserve';
import MyReservations from './Components/Pages/MyReservations';
import AddCar from './Components/Pages/AddCar';
import DeleteCar from './Components/Pages/DeleteCar';
import carSampleData from './data/sample_data';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="ml-3">
        <Routes>
          <Route path="/" element={<Car />} />
          <Route path="/Reserve" element={<Reserve />} />
          <Route path="/MyReservations" element={<MyReservations props={carSampleData} />} />
          <Route path="/AddCar" element={<AddCar />} />
          <Route path="/DeleteCar" element={<DeleteCar />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
