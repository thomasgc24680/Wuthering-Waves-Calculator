/*
import * as Data from './data/Data.js';
import * as ButtonClick from './ButtonClickEvent.js';
*/

/*
추가할 함수
 - 캐릭터/무기 그리드
 - 캐릭터 정보
 - 스킬 레벨업 순서 이미지 불러오기
 - detail 페이지의 우측 컨테이너(재화 모음)
*/

function initialCardGrid(){
	const currentTab = "character";
	
	const SelectScreen = document.getElementById("select-screen");
	
	const SelectCardGrid = document.createElement("div");
	SelectCardGrid.classList.add("card-grid");
	
	characterData.forEach(card => {
		const CardBtn = document.createElement("button");
		CardBtn.classList.add("select-card");
		
		let star;
		if(card.star === 5) star = "star-5";
		else if(card.star === 4) star = "star-4";
		else if(card.star === 3) star = "star-3";
		else if(card.star === 2) star = "star-2";
		else star = "star-1";
		
		CardBtn.innerHTML = 
			`<div class="img-wrapper ${star}">
				<img src="images/resonator/${card.name}/main.jpg" alt="${card.name}">
				<img class="attr-icon" src="images/icon/attribute/${card.attribute}.jpg" alt="${card.attribute}">
				<img class="weap-icon" src="images/icon/weapon/${card.weapon}.jpg" alt="${card.weapon}">
			</div>
			<p>${card.KR_name}</p>
		`;
		CardBtn.onclick = () => MainToDetail(card.type, card.name);
		
		SelectCardGrid.appendChild(CardBtn);
	});
	
	SelectScreen.appendChild(SelectCardGrid);
}

function CardGridWithFilter(currentTab, currentAttributeFilter, currentWeaponFilter, currentStarFilter, dataArray, containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = "";

    const filtered = dataArray.filter(item => {
        if (currentTab === "character") {
            return (currentAttributeFilter === "ALL" || item.attribute.toLowerCase() === currentAttributeFilter.toLowerCase())
                && (currentWeaponFilter === "ALL" || item.weapon.toLowerCase() === currentWeaponFilter.toLowerCase())
                && (currentStarFilter === "ALL" || String(item.star) === currentStarFilter);
        } else {
            return (currentWeaponFilter === "ALL" || item.weaponType.toLowerCase() === currentWeaponFilter.toLowerCase())
                && (currentStarFilter === "ALL" || String(item.star) === currentStarFilter);
        }
    });

    filtered.forEach(item => {
        const cardBtn = document.createElement("button");
        cardBtn.classList.add("select-card");
        // innerHTML 구성 (캐릭터/무기 구분 포함)
        container.appendChild(cardBtn);
    });
}

// 캐릭터/무기 선택 버튼 생성
function createSelectCard(containerSelector, cardDataArray, currentTab, clickHandler) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = "";

    cardDataArray.forEach(card => {
        const btn = document.createElement("button");
        btn.classList.add("select-card");

        const starClass = `star-${card.star}`;
        btn.innerHTML = `
            <div class="img-wrapper ${starClass}">
                <img src="${currentTab === 'character' ? `images/resonator/${card.name}/main.jpg` : `images/weapon/${card.name}.jpg`}" alt="${card.name}">
                ${currentTab === 'character' ? `<img class="attr-icon" src="images/icon/attribute/${card.attribute}.jpg" alt="${card.attribute}">
                <img class="weap-icon" src="images/icon/weapon/${card.weapon}.jpg" alt="${card.weapon}">` : `<img class="weap-icon" src="images/icon/weapon/${card.weapon}.jpg" alt="${card.weapon}">`}
            </div>
            <p>${card.KR_name}</p>
        `;
        btn.addEventListener("click", () => clickHandler(card.name));
        container.appendChild(btn);
    });
}