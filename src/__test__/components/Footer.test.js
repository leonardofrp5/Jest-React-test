import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

it('Render del componente', () => {
  const footer = mount(<Footer />);
  expect(footer.length).toEqual(1);
});

it('Render titulo', () => {
  const footer = mount(<Footer />);
  expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
});

