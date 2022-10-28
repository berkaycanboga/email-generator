const { validateURL } = require('../helpers');

describe('validateURL', () => {

  test.each([
    {
      given: 'getir.com',
      expected: true
    },
    {
      given: 'booking.com',
      expected: true
    },
    {
      given: 'google.com',
      expected: true
    },
    {
      given: 'facebook.com',
      expected: true
    },
    {
      given: 'https://www.getir.com',
      expected: true
    },
  ])('.validateURL(%s, %s)', ({ given, expected }) => {
    expect(validateURL(given)).toBe(expected)
  })
  
  test.each([
    {
      given: 'booking...com',
      expected: false
    },
    {
      given: 'sss..co',
      expected: false
    },
    {
      given: 'https://.com',
      expected: false
    },
    {
      given: 'https://www.google..com',
      expected: false
    },
  ])('.validateURL(%s, %s)', ({ given, expected }) => {
    expect(validateURL(given)).toBe(expected)
  })
})