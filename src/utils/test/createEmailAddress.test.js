const { createEmailAddress } =  require('../createEmailAddress');


describe('createEmailAddress', () => {
  test.each([
    {
      fullName: 'berkay can boga',
      companyUrl: 'booking.com',
      expected: 'b.boga@booking.com'
    },
    {
      fullName: 'pelin deniz',
      companyUrl: 'https://www.google.com',
      expected: 'pelindeniz@google.com'
    },
    {
      fullName: 'burak saraloglu',
      companyUrl: 'getir.uk.com/products',
      expected: 'buraksaraloglu@getir.uk.com'
    },
  ])('.createEmailAddress(%s, %s)', ({ fullName, companyUrl, expected }) => {
    expect(createEmailAddress(fullName, companyUrl)).toBe(expected);
  })
  test.each([
    {
      fullName: 'berkay can boga',
      companyUrl: 'bookingcom',
      expected: 'Invalid companyUrl'
    },
    {
      fullName: 'pelin,sdeniz',
      companyUrl: 'https://www.google.com',
      expected: 'Invalid fullName'
    },
    {
      fullName: 'burak saraloglu',
      companyUrl: '',
      expected: 'Invalid companyUrl'
    },
    {
      fullName: '',
      companyUrl: 'booking.com',
      expected: 'Invalid fullName'
    },
    {
      fullName: '',
      companyUrl: '',
      expected: 'Invalid fullName and Invalid companyUrl'
    },
    {
      fullName: 'berkay can boga',
      companyUrl: '.com',
      expected: 'Invalid companyUrl'
    },
    {
      fullName: '',
      companyUrl: 'https://www.',
      expected: 'Invalid fullName and Invalid companyUrl'
    },
  ])('.createEmailAddress(%s, %s)', ({ fullName, companyUrl, expected }) => {
  expect(createEmailAddress(fullName, companyUrl)).toBe(expected);
  })
})