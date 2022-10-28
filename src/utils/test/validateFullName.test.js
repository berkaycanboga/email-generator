const { validateFullName } = require('../helpers');

describe('validateFullName', () => {

  test.each([
    {
      given: 'berkay Boga',
      expected: true
    },
    {
      given: 'Pelin Deniz',
      expected: true
    },
    {
      given: 'Burak saraloglu',
      expected: true
    },
  ])('.validateFullName(%s, %s)', ({ given, expected }) => {
    expect(validateFullName(given)).toBe(expected);
  })
  test.each([
    {
      given: 'berkay can. boğa',
      expected: false
    },
    {
      given: 'pelin denİz',
      expected: false
    },
    {
      given: 'burak saraloğlu',
      expected: false
    }
  ])('.validateFullName(%s, %s)', ({ given, expected }) => {
    expect(validateFullName(given)).toBe(expected);
  })
})