import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';

describe('<App />', () => {
  let component;
  let Search;
  let Map;

  beforeEach(() => {
    component = shallow(<App />);

    Search = component.findWhere(node => node.prop('name') === 'Search');
    Map = component.findWhere(node => node.prop('name') === 'Map');
  });

  test('Should have state default', () => {
    expect(component.state('cep')).toBe('');
    expect(component.state('infosCep')).toEqual([]);
    expect(component.state('show')).toBe(false);
    expect(component.state('error')).toBe(false);
  });

  test('Should have component Search', () => {
    expect(Search.length).toBe(1);
  });

  test('Should change prop cep in Search', () => {
    component.setState({ cep: '08430-180' });
    Search = component.findWhere(node => node.prop('name') === 'Search');
    expect(Search.prop('cep')).toBe('08430-180');
  });

  test('Should change prop error in Search', () => {
    component.setState({ error: true });
    Search = component.findWhere(node => node.prop('name') === 'Search');
    expect(Search.prop('error')).toBe(true);
  });

  test('Should change cep', () => {
    const e = {
      target: {
        value: '08421-151'
      }
    }
    const onChange = Search.prop('onChange');
    onChange(e);
    expect(component.state('cep')).toBe('08421-151');
  });

  test('Should change prop show in Map', () => {
    component.setState({ show: true });
    Map = component.findWhere(node => node.prop('name') === 'Map');
    expect(Map.prop('show')).toBe(true);
  });

  test('Should change show', () => {
    const isShow = Map.prop('isShow');
    isShow(true);
    expect(component.state('show')).toBe(true);
  })
});