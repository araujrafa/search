import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';
import Search from '../Search/Search';

describe('<App />', () => {
  let component;
  let search;

  beforeEach(() => {
    component = shallow(<App />);

    search = component.find('Search');
    console.log(search)
  });

  test('Should have state default', () => {
    expect(component.state('cep')).toBe('');
    expect(component.state('infosCep')).toEqual([]);
    expect(component.state('show')).toBe(false);
    expect(component.state('error')).toBe(false);
  });

  test('Should have component Search', () => {
    expect(search.length).toBe(1);
  });

  test('Should change prop cep in Search', () => {
    component.setState({ cep: '08430-180' });
    console.log(component.state('cep'))
    expect(search.prop('cep')).toBe('08430-180');
  });
});