import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Car from './Components/Pages/Car';
import Reserve from './Components/Pages/Reserve';
import MyReservations from './Components/Pages/MyReservations';
import AddCar from './Components/Pages/AddCar';
import DeleteCar from './Components/Pages/DeleteCar';
import Login from './Login';

function App() {
  const userObj = useSelector((state) => state.userReducer);
  const [pendingReservations, setPending] = useState([]);

  return (
    <Router>
      {userObj ? (
        <>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Car pendingReservations={pendingReservations} setPending={setPending} />} />
              <Route path="/Reserve" element={<Reserve pendingReservations={pendingReservations} />} />
              <Route path="/MyReservations" element={<MyReservations />} />
              <Route path="/AddCar" element={<AddCar />} />
              <Route path="/DeleteCar" element={<DeleteCar />} />
            </Routes>
          </main>
        </>
      ) : <Login /> }
    </Router>
  );
}

export default App;
