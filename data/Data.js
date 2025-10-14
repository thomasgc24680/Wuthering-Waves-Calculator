/*
//개별 import 개별 export
import { CharacterData } from './DataCharacter.js';
import { WeaponData } from './DataWeapon.js';
import * as CalculatorData from './DataCalculator.js';
import * as Language from './language.js';

export { CharacterData, WeaponData, CalculatorData, Language };
*/

//모든 파일 export
export * from './CharacterData.js';
export * from './WeaponData.js';
export * from './CalculatorData.js';
export * from '../Language.js';

export const attribute = ["glacio", "fusion", "conducto", "aero", "spectra", "havoc"];
export const weapon = ["greatsword", "straightsword", "gun", "fist", "amplifier"];
export const star = [1, 2, 3, 4, 5];
export const weapon_option = ["atk", "crit_rate", "crit_dmg", "def", "hp", "efficiency"];