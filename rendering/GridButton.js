import * as Data from '../data/Data.js';
import * as Common from '../common/Common.js';

/*
추가할 함수
 - 캐릭터/무기 그리드
 - 캐릭터 정보
 - 스킬 레벨업 순서 이미지 불러오기
 - detail 페이지의 우측 컨테이너(재화 모음)
*/

export function renderCardButton(currentTab, containerId) {
	console.log("renderCardButton-", currentTab, containerId);
	
	const container = document.getElementById(containerId);
	if(container) 
	{
		container.innerHTML = "";
	console.log(container);
	}
	console.log(container);
	
	const CardData = Common.Filtering(currentTab);
	
	CardData.forEach(card => {
		const btn = createCardButton(currentTab, card);
		container.appendChild(btn);
	});
}

export function createCardButton(currentTab, card){
	const btn = document.createElement("button");
	btn.classList.add("main-card");
	
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
	btn.onclick = () => Common.BtnClickEvt.MaintoDetail(currentTab, card.name);
	return btn;
}


export function CardGrid(currentTab, currentAttrFilter, currentWeapFilter, currentStarFilter) {
	console.log("CardGrid-", currentTab);
	
	const SelectScreen = document.getElementById("select-screen");
	SelectScreen.innerHTML = "";
	
	const SelectCardGrid = document.createElement("div");
	SelectCardGrid.classList.add("card-grid");
	
	let CardData;
	
	if(currentTab === "character") CardData = Data.characterData;
	else CardData = Data.weaponData;
	
	const filterdData = CardData.filter(card => {
        if (currentTab === "character") {
            return (currentAttrFilter === "ALL" || card.attribute.toLowerCase() === currentAttrFilter.toLowerCase())
                && (currentWeapFilter === "ALL" || card.weapon.toLowerCase() === currentWeapFilter.toLowerCase())
                && (currentStarFilter === "ALL" || String(card.star) === currentStarFilter);
        } else {
            return (currentWeapFilter === "ALL" || card.weapon.toLowerCase() === currentWeapFilter.toLowerCase())
                && (currentStarFilter === "ALL" || String(card.star) === currentStarFilter);
        }
    });
	
	filterdData.forEach(card => {
		const CardBtn = document.createElement("button");
		CardBtn.classList.add("select-card");
		
		let star;
		if(card.star === 5) star = "star-5";
		else if(card.star === 4) star = "star-4";
		else if(card.star === 3) star = "star-3";
		else if(card.star === 2) star = "star-2";
		else star = "star-1";
		
		if(currentTab === "character") {
			CardBtn.innerHTML = 
				`<div class="img-wrapper ${star}">
					<img src="images/resonator/${card.name}/main.jpg" alt="${card.name}">
					<img class="attr-icon" src="images/icon/attribute/${card.attribute}.jpg" alt="${card.attribute}">
					<img class="weap-icon" src="images/icon/weapon/${card.weapon}.jpg" alt="${card.weapon}">
				</div>
				<p>${card.KR_name}</p>
			`;
		}
		else {
			CardBtn.innerHTML = 
				`<div class="img-wrapper ${star}">
					<img src="images/weapon/${card.name}.jpg" alt="${card.name}">
					<img class="weap-icon" src="images/icon/weapon/${card.weapon}.jpg" alt="${card.weapon}">
				</div>
				<p>${card.name}</p>
			`;
		}
		CardBtn.onclick = () => Common.BtnClickEvt.MainToDetail(currentTab, card.name);
		
		SelectCardGrid.appendChild(CardBtn);
	});
	
	SelectScreen.appendChild(SelectCardGrid);
}
	
	/*
	const SelectCardGrid = document.createElement("div");
	SelectCardGrid.classList.add("card-grid");
	
	if(currentTab === "character") CardData = Data.characterData;
	else CardData = Data.weaponData;
	
	const filterdData = CardData.filter(card => {
        if (currentTab === "character") {
            return (currentAttrFilter === "ALL" || card.attribute.toLowerCase() === currentAttrFilter.toLowerCase())
                && (currentWeapFilter === "ALL" || card.weapon.toLowerCase() === currentWeapFilter.toLowerCase())
                && (currentStarFilter === "ALL" || String(card.star) === currentStarFilter);
        } else {
            return (currentWeapFilter === "ALL" || card.weapon.toLowerCase() === currentWeapFilter.toLowerCase())
                && (currentStarFilter === "ALL" || String(card.star) === currentStarFilter);
        }
    });
	
	filterdData.forEach(card => {
		const CardBtn = document.createElement("button");
		CardBtn.classList.add("select-card");
		
		let star;
		if(card.star === 5) star = "star-5";
		else if(card.star === 4) star = "star-4";
		else if(card.star === 3) star = "star-3";
		else if(card.star === 2) star = "star-2";
		else star = "star-1";
		
		if(currentTab === "character") {
			CardBtn.innerHTML = 
				`<div class="img-wrapper ${star}">
					<img src="images/resonator/${card.name}/main.jpg" alt="${card.name}">
					<img class="attr-icon" src="images/icon/attribute/${card.attribute}.jpg" alt="${card.attribute}">
					<img class="weap-icon" src="images/icon/weapon/${card.weapon}.jpg" alt="${card.weapon}">
				</div>
				<p>${card.KR_name}</p>
			`;
		}
		else {
			CardBtn.innerHTML = 
				`<div class="img-wrapper ${star}">
					<img src="images/weapon/${card.name}.jpg" alt="${card.name}">
					<img class="weap-icon" src="images/icon/weapon/${card.weapon}.jpg" alt="${card.weapon}">
				</div>
				<p>${card.name}</p>
			`;
		}
		CardBtn.onclick = () => Common.BtnClickEvt.MainToDetail(currentTab, card.name);
		
		SelectCardGrid.appendChild(CardBtn);
	});
	
	SelectScreen.appendChild(SelectCardGrid);
}
*/

