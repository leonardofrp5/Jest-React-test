import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/ProductMocks';

it('render de Product', () => {
  const producto = shallow(
    <ProviderMock>
      <Product />
    </ProviderMock>,
  );
  expect(producto.length).toEqual(1);
});

it('prueba click', () => {
  const handleAddToCart = jest.fn();
  const wrapper = mount(
    <ProviderMock>
      <Product
        product={ProductMock}
        handleAddToCart={handleAddToCart}
      />
    </ProviderMock>,
  );
  wrapper.find('button').simulate('click');
  expect(handleAddToCart).toHaveBeenCalledTimes(1);
});
