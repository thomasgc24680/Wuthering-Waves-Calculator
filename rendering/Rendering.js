import * as Button from './Button.js';
import * as GridButton from './GridButton.js';
import * as FilterButton from './FilterButton.js';
import * as Grid from './Grid.js';

import * as CardInfo from './CardInfo.js';

import * as Data from '../data/Data.js';

export { Button, GridButton, FilterButton, CardInfo };

export function mainPageInitRender() {
	console.log("mainPageInitRender");
	
	Button.createSwitchTab();			//스위치탭 버튼 생성
	FilterButton.createFilterButton("character", "main-screen");	//필터 버튼 생성
	GridButton.renderMainCardButton("character", "main-screen");
}

export function detailPageRender(type, name) {
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
		createSkillUpgradeOrder(card, LeftContainer);
		Button.createAddWeapon(card, LeftContainer);
	}
}

function createRightContainer(type, card) {
	const RightContainer = document.getElementById("right-container");
	Grid.createPlateCountingContainer(RightContainer);
	console.log(RightContainer);
	
	Grid.cretaeMaterialGrid(card, RightContainer);
}

function createSkillUpgradeOrder(character, container) {
	//스킬 업그레이드 순서 컨테이너
	const SkillUpgradeOrderContainer = document.createElement("div");	
	SkillUpgradeOrderContainer.id = "skill-upgrade-container";
	
	//스킬 업그레이드 순서 타이틀
	const SkillUpgradeOrderTitle = document.createElement("div");
	SkillUpgradeOrderTitle.classList.add("skill-title");
	SkillUpgradeOrderTitle.textContent = "스킬 레벨 업 순서";
	SkillUpgradeOrderContainer.appendChild(SkillUpgradeOrderTitle);	
	
	const skillName = {
		attack : "일반공격",
		skill : "공명스킬",
		circuit : "공명회로",
		liberation : "공명해방",
		intro : "변주스킬"
	};
	
	const skills = character.skillLevelUpOrder.match(/[\w]+|＞|≥|=/g);
	console.log(skills);
	
	const skillUpgrade = document.createElement("div");
	skillUpgrade.classList.add("skill-upgrade");
	
	//스킬 업그레이드 각 이미지 및 기호
	skills.forEach(skillKey => {
		const skillWrapper = document.createElement("div");
		skillWrapper.classList.add("skill-wrapper");
		
		const img = document.createElement("img");
		
		//스킬 기호
		if(skillKey === "＞" || skillKey === "≥" || skillKey === "=") {
			const sign = document.createElement("span");
			sign.classList.add("skill-sign");
			sign.textContent = skillKey;
			skillWrapper.appendChild(sign);
		}
		
		//스킬 이미지 및 이름
		else {
			if(skillKey === "attack") {
				img.src = `images/icon/weapon/${character.weapon}_attack.jpg`;
			}
			else {
				img.src = `images/resonator/${character.name}/${skillKey}.jpg`;
			}
			img.alt = skillKey;
			img.classList.add("skill-img");
			
			const label = document.createElement("span");
			label.classList.add("skill-label");
			label.textContent = skillName[skillKey];
			
			skillWrapper.appendChild(img);
			skillWrapper.appendChild(label);
		}
		
		skillUpgrade.appendChild(skillWrapper);
	});
	
	SkillUpgradeOrderContainer.appendChild(skillUpgrade);
	container.appendChild(SkillUpgradeOrderContainer);
}