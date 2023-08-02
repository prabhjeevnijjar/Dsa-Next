export const checkInputHandler = (event) => {
  if (event.target.type === 'text') {
    const allowedChar = /^[a-zA-Z\s]*$/;
    if (allowedChar.test(event.target.value)) return true;
    else return false;
  } else if (event.target.type === 'number') {
    const allowedChar = /^[0-9]*$/;
    if (allowedChar.test(event.target.value)) return true;
    else return false;
  }
  return true;
};

export const milliToDate = (ms) => {
  return new Date(ms).toDateString() || '';
};
