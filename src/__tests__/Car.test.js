import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Car from '../components/Pages/Car';

const setPending = [];
const pendingReservations = [];

describe('Testing Car component', () => {
  test('renders a correct data', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router><Car pendingReservations={pendingReservations} setPending={setPending} /></Router>
      </Provider>,
    );
    expect(getByTestId('cars-container')).toBeInTheDocument();
  });

  test('renders as expected', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router><Car pendingReservations={pendingReservations} setPending={setPending} /></Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
