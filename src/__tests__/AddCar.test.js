import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AddCar from '../components/Pages/AddCar';

// const testData = {
//   id: 1,
//   name: 'Freetown',
//   population: '7,000,000',
//   moreInfo: {
//     cityImage: 'test.png',
//   },
// };

describe('Testing AddCar component', () => {
  test('renders a correct data', () => {
    const { getByTestId } = render(<Router><AddCar /></Router>);
    expect(getByTestId('image')).toBeInTheDocument();
    expect(getByTestId('name')).toBeInTheDocument();
    expect(getByTestId('description')).toBeInTheDocument();
    expect(getByTestId('model-info')).toBeInTheDocument();
    expect(getByTestId('reservation-fee')).toBeInTheDocument();
  });

  test('renders as expected', () => {
    const tree = renderer.create(<Router><AddCar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
