import * as Common from '../common/Common.js';

export function createSwitchTab() {
	console.log("createSwitchTab");
	
	const nav = document.getElementById("tab-nav");
	
	//캐릭터 탭 버튼
	const characterTab = document.createElement("button");
	characterTab.classList.add("tab");
	characterTab.classList.add("active");
	characterTab.dataset.tab = "character";
	characterTab.textContent = "캐릭터" //추후 언어 추가 예정.
	characterTab.addEventListener("click", () => Common.BtnClickEvt.SwitchTabClickEvent("character"));
	
	nav.appendChild(characterTab);
	
	
	//무기 탭 버튼
	const weaponTab = document.createElement("button");
	weaponTab.classList.add("tab");
	weaponTab.dataset.tab = "weapon";
	weaponTab.textContent = "무기" //추후 언어 추가 예정.
	weaponTab.addEventListener("click", () => Common.BtnClickEvt.SwitchTabClickEvent("weapon"));

	nav.appendChild(weaponTab);
}

export function createSkillConnect(){
	
}