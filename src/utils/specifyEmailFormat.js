const { emailTypes } = require('./variables')
const { getDomain } = require('./helpers');

const adjustNamesToUrl = (url) => {
  if (url === 'booking.com' || getDomain(url) === 'booking.com') {
    return emailTypes.abbreviatedNameVersion;
  } else {
  return emailTypes.fullNameVersion;
  }
}

module.exports = { adjustNamesToUrl };