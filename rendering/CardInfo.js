export function createSelectOption(type, container) {
	console.log("createSelectOption-", type);
	
	//type에 따른 Option 선언
	let array;
	if(type === "Lv") array = [1, 20, 40, 50, 60, 70, 80, 90];
	else if(type === "Rank") array = [0, 1, 2, 3, 4, 5, 6];
	else array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	
	const skillKorean = {
		attack : "일반스킬", skill : "공명스킬", circuit : "공명회로", liberation : "공명해방", intro : "변주스킬"
	};
	
	const SelectOption = document.createElement("div");
	SelectOption.id = `${type.toLowerCase()}_select`;
	
	//label
	const label = document.createElement("span");
	label.classList.add("stauts-label");
	if(type === "Lv" || type === "Rank") label.textContent = type;
	else label.textContent = skillKorean[type];
	SelectOption.appendChild(label);
	
	//첫 번째 선택 상자
	const currentOption = document.createElement("select");
	currentOption.id = `${type.toLowerCase()}_current`; //Lv_current, rank_current, skill_current
	
	array.forEach((value, index) => {
		const option = document.createElement("option");
		option.value = index;
		option.textContent = value;
		currentOption.appendChild(option);
	});
	SelectOption.appendChild(currentOption);
	
	//화살표
	const arrow = document.createElement("span");
	arrow.classList.add("arrow");
	arrow.textContent = ">>";
	SelectOption.appendChild(arrow);
	
	//두 번째 선택 상자
	const goalOption = document.createElement("select");
	goalOption.id = `${type.toLowerCase()}_goal`; //Lv_current, rank_current, skill_current
	
	array.forEach((value, index) => {
		const option = document.createElement("option");
		option.value = index;
		option.textContent = value;
		goalOption.appendChild(option);
	});
	SelectOption.appendChild(goalOption);
	
	console.log("createSelectOption done-", SelectOption);
	container.appendChild(SelectOption);
}

export function createCardSelectOption(type, container) {	
	console.log("createCardSelectOption");
	const CardOption = document.createElement("div");
	CardOption.classList.add("status");
	CardOption.id = "status-container";
	
	
	createSelectOption("Lv", CardOption); //LvOption 생성
	createSelectOption("Rank", CardOption); //Rank 생성
	
	if(type === "character") {
		createSelectOption("attack", CardOption); //일반공격 생성		
		createSelectOption("skill", CardOption); //공명스킬 생성
		createSelectOption("circuit", CardOption); //공명회로 생성
		createSelectOption("liberation", CardOption); //공명해방 생성
		createSelectOption("intro", CardOption); //변주스킬 생성
	}
	console.log("createCardSelectOption done-", CardOption);
	container.appendChild(CardOption);
}

export function createCardImg(type, name, container){
	console.log("createCardImg");
	
	const SelectCardImg = document.createElement("div");
	SelectCardImg.classList.add("select-card-image");
	
	if(type === "character") {
		SelectCardImg.id = "character-image";
		const img = document.createElement("img");
		img.src = `images/resonator/${name}/detail.jpg`;
		img.alt = name;
		SelectCardImg.appendChild(img);
	}
	else {
		SelectCardImg.id = "weapon-image";
		const img = document.createElement("img");
		img.src = `images/weapon/${name}.jpg`;
		img.alt = name;
		SelectCardImg.appendChild(img);
	}
	
	container.appendChild(SelectCardImg);
}

//detail screen SelectCardInfo
export function createSelectCardInfo(type, card) {
	console.log("createSelectCardInfo");
	
	const container = document.getElementById("left-container");
	container.innerHTML = "";
	
	const SelectCardInfo = document.createElement("div");
	SelectCardInfo.classList.add("select-card-info");
	
	createCardImg(type, card.name, SelectCardInfo);
	createCardSelectOption(type, SelectCardInfo);
	
	container.appendChild(SelectCardInfo);
	
	console.log("createSelectCardInfo done-", SelectCardInfo);
}