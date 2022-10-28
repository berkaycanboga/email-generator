const { emailTypes } = require('./variables');
const { validateURL, validateFullName, modifyBooking, modifyDefault, getDomain } = require('./helpers');
const { adjustNamesToUrl } = require('./specifyEmailFormat')

const createEmailAddress = (fullName, companyUrl) => {
  if (!validateFullName(fullName) && !validateURL(companyUrl)) {
    return 'Invalid fullName and Invalid companyUrl'
  } else if (!validateFullName(fullName) || !modifyBooking(fullName) || !modifyDefault(fullName)) {
    return 'Invalid fullName'
  } else if (!validateURL(companyUrl) ) {
    return 'Invalid companyUrl'
  }
  if (companyUrl === 'booking.com' || getDomain(companyUrl) === 'booking.com') {
    emailTypes.abbreviatedNameVersion = modifyBooking(fullName);
  } else {
    emailTypes.fullNameVersion = fullName.value;
  }
  
  if (adjustNamesToUrl(companyUrl)) {
    return `${modifyBooking(fullName)}@${getDomain(companyUrl)}`;
  }
  return `${modifyDefault(fullName)}@${getDomain(companyUrl)}`;
}

module.exports = { createEmailAddress };