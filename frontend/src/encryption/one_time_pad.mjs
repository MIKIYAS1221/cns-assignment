import { Buffer } from 'buffer';

function xorBuffers(buffer1, buffer2) {
  const result = Buffer.alloc(buffer1.length);

  for (let i = 0; i < buffer1.length; i++) {
    result[i] = buffer1[i] ^ buffer2[i];
  }

  return result;
}

export function OTP_encrypt(plaintext, key) {
  const plaintextBuffer = Buffer.from(plaintext, 'utf-8');
  const keyBuffer = Buffer.from(key, 'utf-8');
  const encryptedBuffer = xorBuffers(plaintextBuffer, keyBuffer);
  return encryptedBuffer.toString('hex');
}

export function OTP_decrypt(ciphertext, key) {
  const ciphertextBuffer = Buffer.from(ciphertext, 'hex');
  const keyBuffer = Buffer.from(key, 'utf-8');
  const decryptedBuffer = xorBuffers(ciphertextBuffer, keyBuffer);
  return decryptedBuffer.toString('utf-8');
}

