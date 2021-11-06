// @angular-package/type.
import { StringOfLength } from '@angular-package/type';
/**
 * The function `randomString()` generates a random `string` of declared length.
 * @param length The max `length` of the generated random `string`.
 * @param chars The chars to generate a random `string`.
 * @returns The return value is a random `string` of declared length.
 */
export const randomString = <Length extends number>(
  length: Length,
  chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
): StringOfLength<0, Length>  => {
  let randomStringOfLength = '';
  for (let i = 0; i <= length; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    randomStringOfLength += chars.substring(randomNumber, randomNumber + 1);
  }
  return randomStringOfLength.slice(0, -1);
};
