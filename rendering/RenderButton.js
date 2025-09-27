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










/*
// 필터 버튼 생성 + 이벤트 연결
export function createFilterButton(containerSelector, configArray, clickHandler) {
    const container = document.querySelector("#filter-screen .filter-buttons button");
    container.innerHTML = "";
	
    configArray.forEach(cfg => {
        const btn = document.createElement("button");
        btn.dataset.type = cfg.type;
        btn.dataset.filter = cfg.filter;
        const img = document.createElement("img");
        img.src = cfg.img;
        img.alt = cfg.filter;
        btn.appendChild(img);
        btn.addEventListener("click", FilterButtonClickEvent);
        container.appendChild(btn);
    });
}
*/