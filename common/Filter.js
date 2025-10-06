import * as Data from '../data/Data.js';
import { FilterButtonClickEvent } from './ButtonClickEvent.js';

export function Filtering(currentTab, weapontype = null) {
	console.log("Filtering-", currentTab, weapontype);
    const CardData = currentTab === "character" ? Data.characterData : Data.weaponData;
	
	let { currAttrFilter, currWeapFilter, currStarFilter, currWeaponOptionFilter } = FilterButtonStateCheck(weapontype);
	if(weapontype) currWeapFilter = weapontype;
	console.log(currAttrFilter, currWeapFilter, currStarFilter, currWeaponOptionFilter);
	
    const FilterData = CardData.filter(card => {
        if (currentTab === "character") {
            return (currAttrFilter === "ALL" || card.attribute.toLowerCase() === currAttrFilter.toLowerCase())
                && (currWeapFilter === "ALL" || card.weapon.toLowerCase() === currWeapFilter.toLowerCase())
                && (currStarFilter === "ALL" || String(card.star) === currStarFilter);
        } else {
            return (currWeapFilter === "ALL" || card.weapon.toLowerCase() === currWeapFilter.toLowerCase())
                && (currStarFilter === "ALL" || String(card.star) === currStarFilter)
				&& (currWeaponOptionFilter === "ALL" || card.option.toLowerCase() === currWeaponOptionFilter);
        }
    });
	
	console.log(FilterData);
	
	return FilterData;
}

function FilterButtonStateCheck(weapontype = null) {
	
	let Selector;
	if(weapontype) Selector = ".weapon-filter";
	else Selector = ".filter-screen";
	
	const DOMattrFilter = document.querySelector(`${Selector} .attribute-filters button.active`);
	const DOMweapFilter = document.querySelector(`${Selector} .weapon-filters button.active`);
	const DOMstarFilter = document.querySelector(`${Selector} .star-filters button.active`);
	const DOMweaponOptionFilter = document.querySelector(`${Selector} .weaponoption-filters button.active`);

	const currAttrFilter = DOMattrFilter ? DOMattrFilter.dataset.filter : "ALL";
	const currWeapFilter = DOMweapFilter ? DOMweapFilter.dataset.filter : "ALL";
	const currStarFilter = DOMstarFilter ? DOMstarFilter.dataset.filter : "ALL";
	const currWeaponOptionFilter = DOMweaponOptionFilter ? DOMweaponOptionFilter.dataset.filter : "ALL";
	
	return { currAttrFilter, currWeapFilter, currStarFilter, currWeaponOptionFilter };
}	