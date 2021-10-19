import convertNumber from '../script.js';

test.each([
  ['8 909 100 10 10', '+79091001010'],
  ['+7 909-100-10-10', '+79091001010'],
  ['+7 (909)-100-10-10', '+79091001010'],
  ['+86 000 000 000', '+86000000000'],
])(
  ('Тест функции convertNumber'),
  (item, expected) => {
    expect(convertNumber(item)).toBe(expected);
  },
);
