/*
import * as Data from './data/data.js';
import { Search } from './Search.js';
import * as ButtonClick from './ButtonClickEvent.js';
*/

/*
추가할 함수
 - 스위치 탭 버튼
 - 필터 버튼 생성
 - 스킬 연결점 버튼 생성
*/

function createSwitchTab() {
	console.log("createSwitchTab");
	
	const nav = document.getElementById("tab-nav");
	
	//캐릭터 탭 버튼
	const characterTab = document.createElement("button");
	characterTab.classList.add("tab");
	characterTab.classList.add("active");
	characterTab.dataset.tab = "character";
	characterTab.textContent = "캐릭터" //추후 언어 추가 예정.
	characterTab.addEventListener("click", () => SwitchTabClickEvent("character"));
	
	nav.appendChild(characterTab);
	
	
	//무기 탭 버튼
	const weaponTab = document.createElement("button");
	weaponTab.classList.add("tab");
	weaponTab.dataset.tab = "weapon";
	weaponTab.textContent = "무기" //추후 언어 추가 예정.
	weaponTab.addEventListener("click", () => SwitchTabClickEvent("weapon"));

	nav.appendChild(weaponTab);
}

function createAttrFilter(container, currentTab) {	//무기 필터 버튼 생성
	console.log("createAttrFilter");
	
	const attributeFilter = document.createElement("div");
	attributeFilter.classList.add("filter-buttons", "attribute-filters");
	attribute.forEach(attr => {
		const Btn = document.createElement("button");
		Btn.dataset.type = "attribute";
		Btn.dataset.filter = attr;
		
		const img = document.createElement("img");
		img.src = `images/icon/attribute/${attr}.jpg`;
		img.alt = attr;
		
		Btn.appendChild(img);
		Btn.addEventListener("click", () => FilterButtonClickEvent(Btn, currentTab));
		attributeFilter.appendChild(Btn);
	});
	container.appendChild(attributeFilter);
}

function createWeapFilter(container, currentTab){	//무기 필터 버튼 생성
	console.log("createWeapFilter");
	
	const weaponFilter = document.createElement("div");
	weaponFilter.classList.add("filter-buttons", "weapon-filters");
	weapon.forEach(weap => {
		const Btn = document.createElement("button");
		Btn.dataset.type = "weapon";
		Btn.dataset.filter = weap;
		
		const img = document.createElement("img");
		img.src = `images/icon/weapon/${weap}.jpg`;
		img.alt = weap;
		
		Btn.appendChild(img);
		Btn.addEventListener("click", () => FilterButtonClickEvent(Btn, currentTab));
		weaponFilter.appendChild(Btn);
	});
	container.appendChild(weaponFilter);
}

function createStarFilter(container, currentTab) {	//등급 필터 버튼 생성
	console.log("createStarFilter");
	
	const starFilter = document.createElement("div");
	starFilter.classList.add("filter-buttons", "star-filters");
	star.forEach(star => {
		
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
		Btn.addEventListener("click", () => FilterButtonClickEvent(Btn, currentTab));
		starFilter.appendChild(Btn);
	});
	
	console.log("createFilterButton-searchInput");
	
	//검색창
	const searchInput = document.createElement("div");
	searchInput.classList.add("filter-search");
	
	const Input = document.createElement("input");
	Input.type = "text";
	Input.id = "SearchTool";
	Input.placeholder = "검색어를 입력하세요.";
	
	searchInput.appendChild(Input);	
	starFilter.appendChild(searchInput);
	
	container.appendChild(starFilter);
	
	Search();
}


//detail screen SelectCardInfo
function createSelectCardInfo(type, name) {
	console.log("createSelectCardInfo");
	
	const container = document.getElementById("left-container");
	container.innerHTML = "";
	
	const SelectCardInfo = document.createElement("div");
	SelectCardInfo.classList.add("character-info");
	
	if(type === "character") {
		const img = document.createElement("img");
		img.src = `images/resonator/${name}/detail.jpg`;
		img.alt = name;
		SelectCardInfo.appendChild(img);
	}
	else {
		const img = document.createElement("img");
		img.src = `images/weapon/${name}.jpg`;
		img.alt = name;
		SelectCardInfo.appendChild(img);
	}
	
	const CardOption = document.createElement("div");
	CardOption.classList.add("status");
	CardOption.id = "status-container";
	
	const LvOption = document.createElement("div");
	LvOption.classList.add("level");
	const LvSpan = document.createElement("span");
	LvSpan.classList.add("label");
	LvSpan.textContent = "LV";
	LvOption.appendChild(LvSpan);
	const LvSelect = document.createElement("select");
	LvSelect.id = "current_lv";
	
	
}