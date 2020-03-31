import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/app';

test('should render the app component on the screen', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toExist();
});
