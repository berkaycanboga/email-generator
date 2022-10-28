const { modifyBooking, modifyDefault } = require('../helpers')

describe('modifyBooking', () => {

  test.each([
    {
      given: 'berkay can boga',
      expected: 'b.boga'
    },
    {
      given: 'pelin deniz',
      expected: 'p.deniz'
    },
    {
      given: 'burak saraloglu',
      expected: 'b.saraloglu'
    },
  ])('.modifyBooking(%s, %s)', ({ given, expected }) => {
    expect(modifyBooking(given)).toBe(expected);
  })

  test.each([
    {
      given: 'berkay',
      expected: undefined
    }
  ])('.modifyBooking(%s, %s)', ({ given, expected }) => {
    expect(modifyBooking(given)).toBe(expected);
  })
})

describe('modifyDefault', () => {

  test.each([
    {
      given: 'berkay can boga',
      expected: 'berkayboga'
    },
    {
      given: 'pelin deniz',
      expected: 'pelindeniz'
    },
    {
      given: 'burak saraloglu',
      expected: 'buraksaraloglu'
    },
  ])('.modifyDefault(%s, %s)', ({ given, expected }) => {
    expect(modifyDefault(given)).toBe(expected);
  })
  test.each([
    {
      given: 'berkay',
      expected: undefined
    }
  ])('.modifyDefault(%s, %s)', ({ given, expected }) => {
    expect(modifyDefault(given)).toBe(expected);
  })
})