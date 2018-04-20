import React from 'react';
import { shallow } from 'enzyme';
import Map from './Map.js';

describe('<Map />', () => {
  let component;
  let Container;
  let Iframe;
  let Button;
  let props;
  let spies = {};

  beforeAll(() => {
    props = {
      infosCep: {
        logradouro: 'Avenida Brasil',
        bairro: 'Jardins',
        uf: 'SP',
        localidade: 'São Paulo',
        cep: '01431-001',
      },
      show: true,
      isShow: jest.fn()
    }

    component = shallow(
      <Map {...props} />
    );
    
    Container = component.findWhere(node => node.prop('name') === 'Map');
    Iframe = component.find('iframe');
    Button = component.find('button');
  });

  
  test('Should to define className', () => {
    expect(Container.prop('className')).toBe('c-map');
  })

  test('should write in html the props', () => {
    expect(component.find('h3.c-map__title').text()).toBe('Avenida Brasil');
    expect(component.find('p[name="district"]').text()).toBe('Jardins');
    expect(component.find('p[name="city"]').text()).toBe('São Paulo - SP');
    expect(component.find('p[name="cep"]').text()).toBe('01431-001');
  })

  test('Should have date in prop src to Iframe', () => {
    expect(Iframe.prop('src')).toBeDefined();
    expect(Iframe.prop('src')).toBe(`https://www.google.com.br/maps?q=${props.infosCep.cep},%20Brasil&output=embed`);
  });
});