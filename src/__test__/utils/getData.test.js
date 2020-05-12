import getData from '../../utils/getData';

beforeEach(() => {
  fetch.resetMocks();
});

it('Prueba de fetch', () => {
  fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
  getData('https://google.com')
    .then((response) => {
      expect(response.data).toEqual('12345');
    });
});
