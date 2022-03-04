import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import MyReservations from '../components/Pages/MyReservations';

describe('Testing My Reservation component', () => {
  test('renders a correct data', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router><MyReservations /></Router>
      </Provider>,
    );
    expect(getByTestId('h3')).toBeInTheDocument();
    expect(getByTestId('p')).toBeInTheDocument();
    expect(getByTestId('table')).toBeInTheDocument();
  });

  test('renders as expected', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router><MyReservations /></Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
