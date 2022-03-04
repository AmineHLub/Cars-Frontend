import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Reserve from '../components/Pages/Reserve';

const setPending = [];
const pendingReservations = [];

describe('Testing My Reserve component', () => {
  test('renders a correct data', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Reserve
            setPending={setPending}
            pendingReservations={pendingReservations}
          />
        </Router>
      </Provider>,
    );
    expect(getByTestId('h3')).toBeInTheDocument();
    expect(getByTestId('p')).toBeInTheDocument();
    expect(getByTestId('image')).toBeInTheDocument();
    expect(getByTestId('duration-input')).toBeInTheDocument();
  });

  test('renders as expected', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Reserve
            setPending={setPending}
            pendingReservations={pendingReservations}
          />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
