import * as Data from '../data/Data.js';
import * as Common from '../common/Common.js';

/*
추가할 함수
 - 캐릭터/무기 그리드
 - 캐릭터 정보
 - 스킬 레벨업 순서 이미지 불러오기
 - detail 페이지의 우측 컨테이너(재화 모음)
*/

export function renderMainCardButton(currentTab, containerId) {
	console.log("renderCardButton-", currentTab, containerId);
	
	const screen = document.getElementById(containerId);	
	
	const container = screen.querySelector(".select-screen");
	container.innerHTML = "";
	
	const CardData = Common.Filtering(currentTab);
	
	CardData.forEach(card => {
		const btn = createCardButton(currentTab, card);
		container.appendChild(btn);
	});
	
	screen.appendChild(container);
}

export function createCardButton(currentTab, card, addweapon = null){
	const btn = document.createElement("button");
	btn.classList.add("card");
	
	const star = `star-${card.star}`;

	if(currentTab === "character") {
		btn.innerHTML = 
			`<div class="img-wrapper ${star}">
				<img src="images/resonator/${card.name}/main.jpg" alt="${card.name}">
				<img class="attr-icon" src="images/icon/attribute/${card.attribute}.jpg" alt="${card.attribute}">
				<img class="weap-icon" src="images/icon/weapon/${card.weapon}.jpg" alt="${card.weapon}">
			</div>
			<p>${card.KR_name}</p>
		`;
	}
	else {
		btn.innerHTML = 
			`<div class="img-wrapper ${star}">
				<img src="images/weapon/${card.name}.jpg" alt="${card.name}">
				<img class="weap-icon" src="images/icon/weapon/${card.weapon}.jpg" alt="${card.weapon}">
			</div>
			<p>${card.name}</p>
		`;
	}
	if(addweapon)
		btn.onclick = () => Common.BtnClickEvt.AddWeaponCardClick();
	else
		btn.onclick = () => Common.BtnClickEvt.MainToDetail(currentTab, card.name);
	return btn;
}

export function renderAddWeaponCardButton(weapontype){
	console.log("renderAddWeaponCardButton-",weapontype);
	const PopUpScreen = document.getElementById("add-weapon-popup");
	
	const selectScreen = document.getElementById("weapon-select");
	selectScreen.innerHTML = "";
	
	const CardData = Common.Filtering("weapon", weapontype);
	
	CardData.forEach(card => {
		const btn = createCardButton("weapon", card, "addweapon");
		selectScreen.appendChild(btn);
	});
	
	PopUpScreen.appendChild(selectScreen);
	
	console.log(PopUpScreen);
}