import * as Data from '../data/Data.js';
import { FilterButtonClickEvent } from './ButtonClickEvent.js';

export function Filtering(currentTab) {
	console.log("Filtering-", currentTab);
    const CardData = currentTab === "character" ? Data.characterData : Data.weaponData;
	
	const { currAttrFilter, currWeapFilter, currStarFilter } = FilterButtonStateCheck();
	console.log(currAttrFilter, currWeapFilter, currStarFilter);
	
    const FilterData = CardData.filter(card => {
        if (currentTab === "character") {
            return (currAttrFilter === "ALL" || card.attribute.toLowerCase() === currAttrFilter.toLowerCase())
                && (currWeapFilter === "ALL" || card.weapon.toLowerCase() === currWeapFilter.toLowerCase())
                && (currStarFilter === "ALL" || String(card.star) === currStarFilter);
        } else {
            return (currWeapFilter === "ALL" || card.weapon.toLowerCase() === currWeapFilter.toLowerCase())
                && (currStarFilter === "ALL" || String(card.star) === currStarFilter);
        }
    });
	
	console.log(FilterData);
	
	return FilterData;
}

function FilterButtonStateCheck() {
	const DOMattrFilter = document.querySelector('.filter-screen .attribute-filters button.active');
	const DOMweapFilter = document.querySelector('.filter-screen .weapon-filters button.active');
	const DOMstarFilter = document.querySelector('.filter-screen .star-filters button.active');

	const currAttrFilter = DOMattrFilter ? DOMattrFilter.dataset.filter : "ALL";
	const currWeapFilter = DOMweapFilter ? DOMweapFilter.dataset.filter : "ALL";
	const currStarFilter = DOMstarFilter ? DOMstarFilter.dataset.filter : "ALL";
	
	return { currAttrFilter, currWeapFilter, currStarFilter };
}	