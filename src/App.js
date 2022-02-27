import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeleteListItems from './Components/DeleteListItems';
import Details from './ Components/details/Details';
import Reserve from './Components/Pages/Rerserve';
import Reservations from './Components/Pages/Reservations';
import Home from './Components/Pages/Home';
import ItemForm from './Components/Pages/ItemForm';
import Navbar from './Components/Navbar/Navbar';
import Car from './Components/Pages/Car';
import Reserve from './Components/Pages/Reserve';
import MyReservations from './Components/Pages/MyReservations';
import AddCar from './Components/Pages/AddCar';
import backIcon from './assets/images/back-icon.svg';

const Routes = [
  {
    path: '/',
    name: 'CARS',
    component: <Home />,
    isNavItem: true,
  },
  {
    path: '/add_car',
    name: 'ADD CAR',
    component: <ItemForm />,
    isNavItem: true,
  },
  {
    path: '/reservations',
    name: 'MY RESERVATIONS',
    component: <Reservations />,
    isNavItem: true,
  },
  {
    path: '/reservation',
    name: 'RESERVE CAR',
    component: <Reserve />,
    isNavItem: true,
  },
  {
    path: '/:username/reservation/item/:id',
    name: 'Reserve',
    component: <Reserve details />,
  },
  {
    path: '/items/:id',
    name: 'Items',
    component: <Details />,
  },
  {
    path: '/deleteList',
    name: 'REMOVE CAR',
    component: <DeleteListItems />,
    isNavItem: true,
  },
  {
    path: '/logout',
    name: 'LOGOUT',
    component: <Logout />,
    isNavItem: true,
  },
];

function App() {
  return (
    <Router>
      <Navbar />
      <main className="ml-3">
        <Routes>
          <Route path="/" element={<Car />} />
          <Route path="/Reserve" element={<Reserve />} />
          <Route path="/MyReservations" element={<MyReservations />} />
          <Route path="/AddCar" element={<AddCar />} />
        </Routes>
        <div className="bg-primaryGreen absolute bottom-0 w-16 z-40 h-12 mb-14 rounded-tr-full rounded-br-full flex items-center justify-end px-4">
          <img src={backIcon} alt={backIcon} className="w-4 h-4 rotate-180" />
        </div>
      </main>
    </Router>
  );
}

export default App;
