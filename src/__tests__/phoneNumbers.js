import phoneNumbers from '../phoneNumbers';

test.each([
  ['8 (927) 000-00-00', '+79270000000', true],
  ['+7 960 000 00 00', '+79600000000', true],
  ['+86 000 000 0000', '+860000000000', true],
])('Проверка работы метода phoneNumbers со значением %s', (number, expected) => {
  expect(phoneNumbers(number)).toBe(expected);
});
