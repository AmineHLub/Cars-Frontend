import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import DeleteCar from '../components/Pages/DeleteCar';

describe('Testing Delete car component', () => {
  test('renders a correct data', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router><DeleteCar /></Router>
      </Provider>,
    );
    expect(getByTestId('cars-container')).toBeInTheDocument();
    expect(getByTestId('h1')).toBeInTheDocument();
    expect(getByTestId('p')).toBeInTheDocument();
  });

  test('renders as expected', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router><DeleteCar /></Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
