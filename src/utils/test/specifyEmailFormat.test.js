const { adjustNamesToUrl } = require('../specifyEmailFormat')
const { emailTypes } = require('../variables')

describe('adjustNamesToUrl', () => {

  test.each([
    {
      given: 'booking.com',
      expected: emailTypes.abbreviatedNameVersion
    },
    {
      given: 'google.com',
      expected: emailTypes.fullNameVersion
    },
    {
      given: 'change.org',
      expected: emailTypes.fullNameVersion
    },
  ])('.adjustNamesToUrl(%s, %s)', ({ given, expected }) => {
    expect(adjustNamesToUrl(given)).toBe(expected);
  })
})