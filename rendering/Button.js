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

export function createSkillConnectContainer(character, container){
	console.log("createSkillConnectContainer-",character, container);
	
	//스킬 버튼 컨테이너 - 스킬 타이틀 + 스킬 버튼들
	const SkillButtonContainer = document.createElement("div");
	SkillButtonContainer.classList.add("skill-connector");
	
	//스킬 타이틀
	const SkillButtonTitle = document.createElement("div");
	SkillButtonTitle.classList.add("skill-title");
	SkillButtonTitle.id = "skill-button-title";
	SkillButtonTitle.textContent = "스킬 연결점 버튼";
	
	SkillButtonContainer.appendChild(SkillButtonTitle);
	
	//스킬 버튼들 전체 컨테이너
	const SkillButtons = document.createElement("div");
	SkillButtons.classList.add("skill-buttons");
	SkillButtons.id = "skill-buttons";
	
	//스킬 연결점 버튼 생성 및 컨테이너(SkillButtons)에 추가
	createSkillButton(character, SkillButtons);
	
	//
	SkillButtonContainer.appendChild(SkillButtons); //스킬 버튼들 -> 컨테이너 추가
	container.appendChild(SkillButtonContainer); //스킬 버튼 컨테이너 -> left 컨테이너에 추가
}

function createSkillButton(character, container) {
	const CharacterBtnImg = [
		character["stat bonus2"],
		character["stat bonus1"],
		"inherent",
		character["stat bonus1"],
		character["stat bonus2"],
	];
	
	for (let col = 0; col < 5; col++) {
		const SkillCol = document.createElement("div");
		SkillCol.classList.add("skill-col");
		
		const topBtn = SkillButtonImg(SkillCol, col, character.name, CharacterBtnImg[col], "top");
		
		const connector = document.createElement("div");
		connector.classList.add("connector");
		
		const bottomBtn = SkillButtonImg(SkillCol, col, character.name, CharacterBtnImg[col], "bottom");
		
		topBtn.pair = bottomBtn;
		bottomBtn.pair = topBtn;
		
		SkillCol.appendChild(topBtn);
		SkillCol.appendChild(connector);
		SkillCol.appendChild(bottomBtn);
	
		container.appendChild(SkillCol);
	}
}

function SkillButtonImg(container, index, name, bonus, position){
	const Btn = document.createElement("button");
	Btn.id = `${position}-${index}`;
	Btn.disabled = true;
	
	let Img;
	if(index === 2)	{
		if( position === "top") Img = `images/resonator/${name}/inherent2.jpg`;
		else Img = `images/resonator/${name}/inherent1.jpg`;
	}
	else {
		Img = `images/icon/skill/${bonus}.jpg`;
	}
	
	Btn.innerHTML = `<img src="${Img}">`;
	
	Btn.onclick = () => Common.BtnClickEvt.SkillConnectButtonClick(Btn, position);
	
	return Btn;
}
	

export function createAddWeapon(character, container) {
	console.log("createAddWeapon-",character, container);
	const AddWeaponBtn = document.createElement("button");
	AddWeaponBtn.classList.add("add-weapon");
	
	const BtnText = document.createElement("span");
	BtnText.textContent = "무기 추가";
	
	
	
	AddWeaponBtn.appendChild(BtnText);
	
	container.appendChild(AddWeaponBtn);
	AddWeaponBtn.onclick  = () => Common.BtnClickEvt.AddWeaponClick(character.weapon);
}