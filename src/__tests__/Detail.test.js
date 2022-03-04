import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Detail from '../components/Pages/Detail';

const setPending = [];
const pendingReservations = [];
const selectedCar = {
  image: 'test.png',
  name: 'test',
  description: 'test description',
  reservation_fee: 100,
};
const setSelectedCar = [];

describe('Testing Detail component', () => {
  test('renders a correct data', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Detail
            selectedCar={selectedCar}
            setSelectedCar={setSelectedCar}
            setPending={setPending}
            pendingReservations={pendingReservations}
          />
        </Router>
      </Provider>,
    );
    expect(getByTestId('header-car-info')).toBeInTheDocument();
    expect(getByTestId('all-fees-container')).toBeInTheDocument();
    expect(getByTestId('reservation-button')).toBeInTheDocument();
    expect(getByTestId('selected-car-img-container')).toBeInTheDocument();
  });

  test('renders as expected', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Detail
            selectedCar={selectedCar}
            setSelectedCar={setSelectedCar}
            setPending={setPending}
            pendingReservations={pendingReservations}
          />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
