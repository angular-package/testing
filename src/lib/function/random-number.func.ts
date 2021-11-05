import { NumberBetween } from '@angular-package/type';
/**
 * The `randomNumber()` function generates number between 0 and declared `max`.
 * @param max The maximum value of a generated number.
 * @returns The return value is a random number.
 */
export const randomNumber = <Max extends number>(
  max: Max
): NumberBetween<0, Max> => Math.floor(Math.random() * max);
