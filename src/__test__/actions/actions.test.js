import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMocks';

it('Test de los actions agregar', () => {
  const payload = ProductMock;
  const expected = {
    type: 'ADD_TO_CART',
    payload,
  };
  expect(actions.addToCart(payload)).toEqual(expected);
});

it('Test de los actions eliminar', () => {
  const payload = ProductMock;
  const expected = {
    type: 'REMOVE_FROM_CART',
    payload,
  };
  expect(actions.removeFromCart(payload)).toEqual(expected);
});
