import React from 'react';
import { shallow } from 'enzyme';
import Map from './Map.js';

describe('<Map />', () => {
  let component;
  let Iframe;
  let Button;
  let props;
  // let onClose;
  let spies = {};

  beforeAll(() => {
    // Fake props
    // onClose = jest.fn();;

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
    Iframe = component.find('iframe');
    Button = component.find('button');

    spies = {
      
    }
  });

  test('Should ter date in prop onClick to Button', () => {
    // const spy = jest.spyOn(props.isShow);
    // Button.simulate('click')
    // expect(Button.prop('onClick')).toBeDefined();
    // expect(spy).toHaveBeenCalled();
  });

  test('Should ter date in prop src to Iframe', () => {
    expect(Iframe.prop('src')).toBeDefined();
    expect(Iframe.prop('src')).toBe(`https://www.google.com.br/maps?q=${props.infosCep.cep},%20Brasil&output=embed`);
  });
});