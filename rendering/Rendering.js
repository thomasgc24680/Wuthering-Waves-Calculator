import * as Button from './Button.js';
import * as GridButton from './GridButton.js';
import * as FilterButton from './FilterButton.js';

import * as CardInfo from './CardInfo.js';

import * as Data from '../data/Data.js';

export { Button, GridButton, FilterButton, CardInfo };

export function mainPageInitRender() {
	console.log("mainPageInitRender");
	
	Button.createSwitchTab();			//스위치탭 버튼 생성
	FilterButton.createFilterButton("character", "main-screen");	//필터 버튼 생성
	GridButton.renderCardButton("character", "main-screen");
}

export function detailPageRender(type, name) {
	document.title = `${name} - 육성 계산기`;
	CardInfo.createSelectCardInfo(type, name);
	
	const selectCharacter = Data.characterData.find(c => c.name === name);
	console.log(selectCharacter);
	Button.createSkillConnectContainer(selectCharacter);
}