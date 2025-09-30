import * as Grid from './Grid.js';
import * as Button from './Button.js';
import * as CardInfo from './CardInfo.js';

export { Grid, Button, CardInfo };

export function mainPageInitRender() {
	console.log("mainPageInitRender");
	
	Button.createSwitchTab();
	
	//필터 그리기
	const FilterScreen = document.getElementById("filter-screen");
	FilterScreen.innerHTML = "";
	
	Button.createAttrFilter(FilterScreen, "character");
	Button.createWeapFilter(FilterScreen, "character");
	Button.createStarFilter(FilterScreen, "character");
	
	Grid.CardGrid("character", "ALL", "ALL", "ALL");
}

export function detailPageRender(type, name) {
	document.title = `${name} - 육성 계산기`;
	CardInfo.createSelectCardInfo(type, name);
}