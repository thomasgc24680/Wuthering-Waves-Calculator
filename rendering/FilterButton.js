import * as Data from '../data/Data.js';
import * as Common from '../common/Common.js';

/*
추가할 함수
 - 스위치 탭 버튼
 - 필터 버튼 생성
 - 스킬 연결점 버튼 생성
*/

export function createFilterButton(currentTab, containerId) {
	console.log("createFilterButton-",currentTab, containerId);
	
	//필터 그릴 페이지 가져오기
	const screen = document.getElementById(containerId);
	const container = screen.querySelector(".filter-screen");
	container.innerHTML = "";
	
	//필터 버튼 추가
	if(currentTab === "character"){
		createAttrFilter(currentTab, container, containerId);
		createWeapFilter(currentTab, container, containerId);
		createStarFilter(currentTab, container, containerId);
	}
	else {
		createWeapFilter(currentTab, container, containerId);
		createStarFilter(currentTab, container, containerId);
	}
	
	screen.appendChild(container);
		
	Common.Search.createSearchFunc(".select-screen"); //검색창이 DOM에 포함된 후 기능 연결.
}

export function createAttrFilter(currentTab, container, containerId) {	//무기 필터 버튼 생성
	console.log("createAttrFilter");
	
	const attributeFilter = document.createElement("div");
	attributeFilter.classList.add("filter-buttons", "attribute-filters");
	Data.attribute.forEach(attr => {
		const Btn = document.createElement("button");
		Btn.dataset.type = "attribute";
		Btn.dataset.filter = attr;
		
		const img = document.createElement("img");
		img.src = `images/icon/attribute/${attr}.jpg`;
		img.alt = attr;
		
		Btn.appendChild(img);
		Btn.addEventListener("click", () => Common.BtnClickEvt.FilterButtonClickEvent(Btn, currentTab, containerId));
		attributeFilter.appendChild(Btn);
	});
	container.appendChild(attributeFilter);
}

export function createWeapFilter(currentTab, container, containerId){	//무기 필터 버튼 생성
	console.log("createWeapFilter");
	
	const weaponFilter = document.createElement("div");
	weaponFilter.classList.add("filter-buttons", "weapon-filters");
	Data.weapon.forEach(weap => {
		const Btn = document.createElement("button");
		Btn.dataset.type = "weapon";
		Btn.dataset.filter = weap;
		
		const img = document.createElement("img");
		img.src = `images/icon/weapon/${weap}.jpg`;
		img.alt = weap;
		
		Btn.appendChild(img);
		Btn.addEventListener("click", () => Common.BtnClickEvt.FilterButtonClickEvent(Btn, currentTab, containerId));
		weaponFilter.appendChild(Btn);
	});
	container.appendChild(weaponFilter);
}

export function createStarFilter(currentTab, container, containerId, weapontype = null) {	//등급 필터 버튼 생성
	console.log("createStarFilter-",currentTab, container, containerId, weapontype);
	
	const starFilter = document.createElement("div");
	starFilter.classList.add("filter-buttons", "star-filters");
	Data.star.forEach(star => {
		
		if(currentTab === "character" && star >= 1 && star <= 3) {
			return;
		}
		
		const Btn = document.createElement("button");
		Btn.dataset.type = "star";
		Btn.dataset.filter = star;
		
		const img = document.createElement("img");
		img.src = `images/icon/grade/star-${star}.jpg`;
		img.alt = star;
		
		Btn.appendChild(img);
		Btn.addEventListener("click", () => Common.BtnClickEvt.FilterButtonClickEvent(Btn, currentTab, containerId, weapontype));
		starFilter.appendChild(Btn);
	});
	
	console.log("createFilterButton-searchInput");
	
	Common.Search.createSearchInput(starFilter, weapontype); //검색창 생성
	
	container.appendChild(starFilter);
}