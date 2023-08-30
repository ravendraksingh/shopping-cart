import CryptoJS from "crypto-js";

export function encryptJsonAndReturnString(value) {
  const bytes = CryptoJS.AES.encrypt(
    JSON.stringify(value),
    process.env.REACT_APP_ENCRYPTION_KEY
  );
  return bytes.toString();
}
