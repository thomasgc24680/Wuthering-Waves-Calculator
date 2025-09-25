/*
//개별 import 개별 export
import { CharacterData } from './DataCharacter.js';
import { WeaponData } from './DataWeapon.js';
import * as CalculatorData from './DataCalculator.js';
import * as Language from './language.js';

export { CharacterData, WeaponData, CalculatorData, Language };
*/

//모든 파일 export
export * from './DataCharacter.js';
export * from './DataWeapon.js';
export * from './DataCalculator.js';
export * from './Language.js';

export const attributes = ["glacio", "fusion", "conducto", "aero", "spectra", "havoc"];
export const weapons = ["greatsword", "straightsword", "gun", "fist", "amplifier"];
export const stars = ["1", "2", "3", "4", "5"];