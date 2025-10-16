import * as Button from './Button.js';
import * as GridButton from './GridButton.js';
import * as FilterButton from './FilterButton.js';

import * as CardInfo from './CardInfo.js';
import * as Grid from './Grid.js';

import * as Data from '../data/Data.js';
import * as Common from '../Common/Common.js';

export { Button, GridButton, FilterButton, CardInfo };

export function mainPageInitRender() {
	console.log("mainPageInitRender");
	
	Button.createSwitchTab();			//스위치탭 버튼 생성
	FilterButton.createFilterButton("character", "main-screen");	//필터 버튼 생성
	GridButton.renderMainCardButton("character", "main-screen");
}

export function detailPageRender(type, name) {
	console.log("detailPageRender-",type, name);
	document.title = `${name} - 육성 계산기`;
	
	let selectCard;
	if(type === "character") {
		selectCard = Data.characterData.find(c => c.name === name);
	}
	else {
		selectCard = Data.weaponData.find(c => c.name === name);
	}
	
	createLeftContainer(type, selectCard);
	createRightContainer(type, selectCard);
}

function createLeftContainer(type, card) {
	const LeftContainer = document.getElementById("left-container");
	
	CardInfo.createSelectCardInfo(type, card);
	
	if(type === "character"){
		Button.createSkillConnectContainer(card, LeftContainer);
		Grid.createSkillUpgradeOrder(card, LeftContainer);
		Button.createAddWeapon(card, LeftContainer);
	}
	
	const statusContainer = document.getElementById("status-container");
	const statusSelect = statusContainer.querySelectorAll("select");
	statusSelect.forEach(select => {
		select.addEventListener("change", (event) => {
			Common.Calculator.statusChangeProcess(event.target);
		});
	});
}

function createRightContainer(type, card) {
	console.log("createRightContainer-",type, card);
	const RightContainer = document.getElementById("right-container");
	
	Grid.createPlateCountingContainer(RightContainer);
	
	Grid.cretaeMaterialGrid(type, card, RightContainer);
}