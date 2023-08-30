export function validEmail(email) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {
    return true;
  }
  return false;
}

export function validPassword(password) {
  if (password === null || password.length < 4) {
    return false;
  }
  return true;
}

export function getShippingAddressAsText(shippingAddressJson) {
  //   console.log(shippingAddressJson);
  let _addr = shippingAddressJson.addrline1;
  _addr = shippingAddressJson.addrline2
    ? _addr.concat(", " + shippingAddressJson.addrline2)
    : _addr;

  _addr = shippingAddressJson.city
    ? _addr.concat(", " + shippingAddressJson.city)
    : _addr;

  _addr =
    _addr + shippingAddressJson.state
      ? _addr.concat(", " + shippingAddressJson.state)
      : _addr;

  _addr =
    _addr + shippingAddressJson.pincode
      ? _addr.concat(", " + shippingAddressJson.pincode)
      : _addr;

  _addr = shippingAddressJson.mobile
    ? _addr.concat(", Mobile: ", shippingAddressJson.mobile)
    : _addr;

  return _addr;
}

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

export function getAlphaNumTxnId(length) {
    return randomString(length, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
}
