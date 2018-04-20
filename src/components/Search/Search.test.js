import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search.js';

describe('<Search />', () => {
  let component;
  let MaskedInput;
  let Button;
  let props;

  beforeAll(() => {
    // Fake props
    props = {
      cep: '01431-001',
      onSubmit: jest.fn(),
      onChange: jest.fn(),
      error: false
    }

    component = shallow(
      <Search {...props} />
    );
    MaskedInput = component.find('MaskedInput');
    Button = component.find('button');
  });

  test('Should have in MaskedInput and button', () => {
    expect(MaskedInput.length).toBe(1);
    expect(Button.length).toBe(1);
  });

  test('Should ter date in prop type text to MaskedInput', () => {
    expect(MaskedInput.prop('type')).toBeDefined();
    expect(MaskedInput.prop('type')).toBe('text');
  });

  test('Should ter date in prop type mask to MaskedInput', () => {
    expect(MaskedInput.prop('mask')).toBeDefined();
    expect(MaskedInput.prop('mask')).toBe('11111-111');
  });

  test('Should ter date in prop type value to MaskedInput', () => {
    expect(MaskedInput.prop('value')).toBeDefined();
    expect(MaskedInput.prop('value')).toBe(props.cep);
  });

  test('Should ter date in prop onChange to MaskedInput', () => {
    expect(MaskedInput.prop('onChange')).toBeDefined();
    expect(MaskedInput.prop('onChange')).toBe(props.onChange);
  });

  test('Should ter date in prop onClick to Button', () => {
    expect(Button.prop('onClick')).toBeDefined();
    expect(Button.prop('onClick')).toBe(props.onSubmit);
  });

  test('Should hidden error', () => {
    const label = component.find('label');
    expect(label.prop('className')).toBe('is-hidden');
  })
});