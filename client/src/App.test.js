import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerList from './components/PlayerList';
import Header from './components/Header';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

afterEach(rtl.cleanup);

//testing
it('renders correctly. truthy, in document, visible', () => {
  const wrapper = rtl.render(
    <PlayerList />
  );
  const element = wrapper.queryByText(/players/i);
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  

//comment
  wrapper.debug();
});

it('renders correctly. truthy, in document, visible', () => {
  const wrapper = rtl.render(
    <Header />
  );
  const element = wrapper.queryByText(/Toggle Theme/i);
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();

//comment
  wrapper.debug();
}); 