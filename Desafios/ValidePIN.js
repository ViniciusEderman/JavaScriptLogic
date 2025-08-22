function validatePIN(pin) {
  const validLength = pin.split("");
  let flag = false;

  if ( (validLength.length === 4 || validLength.length === 6) && /^[0-9]+$/.test(pin)) {
    flag = true;
    return flag;
    
  } else {
    return flag;
  }
}

validatePIN("a234");
