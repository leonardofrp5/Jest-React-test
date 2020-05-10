import reducers from '../../reducers';
import ProductMock from '../../__mocks__/ProductMocks';

it('Prueba de reducers', () => {
  expect(reducers({}, '')).toEqual({});
});

it('Prueba de reducers agregar', () => {
  const initialState = {
    cart: [],
  };
  const payload = ProductMock;
  const action = {
    type: 'ADD_TO_CART',
    payload,
  };
  const expected = {
    cart: [
      ProductMock,
    ],
  };
  expect(reducers(initialState, action)).toEqual(expected);
});

it('Prueba de reducers remove', () => {
  const initialState = {
    cart: [],
  };
  const payload = ProductMock;
  const action = {
    type: 'REMOVE_FROM_CART',
    payload,
  };
  const expected = {
    cart: [],
  };
  expect(reducers(initialState, action)).toEqual(expected);
});
