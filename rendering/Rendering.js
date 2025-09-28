/*
import * as renderGrid from './renderGrid.js';
import * as renderButton from './renderButton.js';
*/

function mainPageInitRender() {
	console.log("mainPageInitRender");
	
	createSwitchTab();
	
	//필터 그리기
	const FilterScreen = document.getElementById("filter-screen");
	FilterScreen.innerHTML = "";
	
	createAttrFilter(FilterScreen, "character");
	createWeapFilter(FilterScreen, "character");
	createStarFilter(FilterScreen, "character");
	
	CardGrid("character", "ALL", "ALL", "ALL");
}

function detialPageRender(type, name) {
	document.title = `${name} - 육성 계산기`;
	createSelectCardInfo(type, name);
}