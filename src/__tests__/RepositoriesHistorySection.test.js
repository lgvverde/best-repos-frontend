import React from 'react';
import ReactDOM from 'react-dom';
import RepositoriesHistorySection from '../pages/repositoriesHistorySection';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import * as config from '../config';

const mockStore = configureStore();
const anyOption = config.searchOptions[0];

const initialState = {
    languageSelectState: {
      ...anyOption
    }
  };
  

const store = mockStore(initialState);
configure({ adapter: new Adapter() })

it('renders correctly and without crashing', () => {
  const spy = spyOn(global.console, 'error');
  const wrapper = shallow(
    <Provider store={store}>
    <AlertProvider template={AlertTemplate}>
      <RepositoriesHistorySection />
    </AlertProvider>
    </Provider>,
    { context: store }
  );

  expect(spy).not.toHaveBeenCalled();
  expect(wrapper).not.toBeNull();
  expect(wrapper).toMatchSnapshot();

});
