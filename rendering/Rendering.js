import * as Button from './Button.js';
import * as GridButton from './GridButton.js';
import * as FilterButton from './FilterButton.js';

import * as CardInfo from './CardInfo.js';

export { Button, GridButton, FilterButton, CardInfo };

export function mainPageInitRender() {
	console.log("mainPageInitRender");
	
	Button.createSwitchTab();			//스위치탭 버튼 생성
	FilterButton.createFilterButton("character", "#main-screen");	//필터 버튼 생성
	
	
	GridButton.renderCardButton("character", "select-screen");
}

export function detailPageRender(type, name) {
	document.title = `${name} - 육성 계산기`;
	CardInfo.createSelectCardInfo(type, name);
}

export function createSkillOrderImg() {
	
}