import React from 'react';
import App from '../App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const spy = spyOn(global.console, 'error');
  const wrapper = shallow(<App />);

  expect(spy).not.toHaveBeenCalled();
  expect(wrapper).toMatchSnapshot();
});

