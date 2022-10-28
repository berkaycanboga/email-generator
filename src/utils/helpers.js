const validateURL = (url) => {
  const regex = new RegExp('^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,6}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i');
    return regex.test(url);
}

const validateFullName = (fullName) => {
  const regex = /^[a-zA-Z ]+$/;
  return regex.test(fullName);
}

const getDomain = (url) => {
  const regex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/;
  return regex.exec(url)[1];
}

const modifyBooking = (email) => {
  const emailArr = email.split(' ');

  if (emailArr.length < 2) {
    return;
  }
  const firstName = emailArr[0].charAt(0)
  const lastName = emailArr[emailArr.length - 1];
  return firstName + '.' + lastName;
}

const modifyDefault = (email) => {
  const emailArr = email.split(' ');

  if (emailArr.length < 2) {
    return;
  }
  const firstName = emailArr[0]
  const lastName = emailArr[emailArr.length - 1];
  return firstName + lastName;
}

module.exports = { 
  validateFullName, 
  validateURL,
  modifyBooking,
  modifyDefault,
  getDomain
}