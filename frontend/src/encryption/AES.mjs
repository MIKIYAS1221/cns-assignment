import CryptoJS from "crypto-js";


export const aesEncrypt = (text, key) => {
    return CryptoJS.AES.encrypt(text, key).toString();
}

export const aesDecrypt = (text, key) => {
    return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
}
