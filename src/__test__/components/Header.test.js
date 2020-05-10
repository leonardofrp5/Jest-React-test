import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

it('Prueba de shallow', () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>,
  );
  expect(header.length).toEqual(1);
});

it('Texto del Header', () => {
  const header = mount(
    <ProviderMock>
      <Header />
    </ProviderMock>,
  );
  expect(header.find('.Header-title').text()).toEqual('Platzi Store');
});

it('Test provider', () => {
  const header = create(
    <ProviderMock>
      <Header />
    </ProviderMock>,
  );
  expect(header.toJSON).toMatchSnapshot();
});
