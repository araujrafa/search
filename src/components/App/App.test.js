import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('<App />', () => {
  let component;

  beforeAll(() => {
    component = shallow(<App />);
  });

  test('Should have state default', () => {
    // expect(component.find('<Map />').length).toBe(1);
  });
});