import * as RenderGrid from './RenderGrid.js';
import * as RenderButton from './RenderButton.js';
import * as RenderCardInfo from './RenderCardInfo.js';

export { RenderGrid, RenderButton, RenderCardInfo };

export function mainPageInitRender() {
	console.log("mainPageInitRender");
	
	RenderButton.createSwitchTab();
	
	//필터 그리기
	const FilterScreen = document.getElementById("filter-screen");
	FilterScreen.innerHTML = "";
	
	RenderButton.createAttrFilter(FilterScreen, "character");
	RenderButton.createWeapFilter(FilterScreen, "character");
	RenderButton.createStarFilter(FilterScreen, "character");
	
	RenderGrid.CardGrid("character", "ALL", "ALL", "ALL");
}

export function detialPageRender(type, name) {
	document.title = `${name} - 육성 계산기`;
	RenderCardInfo.createSelectCardInfo(type, name);
}