import CryptoJS from "crypto-js";


export const TripleDESEncrypt = (text, key) => {
    return CryptoJS.TripleDES.encrypt(text, key).toString();
}

export const TripleDESDecrypt = (text, key) => {
    return CryptoJS.TripleDES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
}
