export function createSkillUpgradeOrder(character, container) {
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
				img.src = `images/icon/weapon/${character.weapon}.jpg`;
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

export function createPlateCountingContainer(rightcontainer) {
	console.log("createPlateCountingContainer-",rightcontainer);
	
	const plateCounting = document.createElement("section");
	plateCounting.classList.add("plate-counting");	
	
	const countingName = {
		"all-plate-count" : "총 플레이트 개수",
		"forgery" : "응소의 영역",
		"ascension" : "돌파 보스",
		"weekly" : "주간 보스"
	};
	
	Object.entries(countingName).forEach(([key, value]) => {
		const container = document.createElement("div");
		container.classList.add(key);
		
		const label = document.createElement("span");
		label.classList.add("count-label");
		label.textContent = `${value} : `;
		
		const count = document.createElement("div");
		count.classList.add("count");
		count.textContent = 0;
		
		container.appendChild(label);
		container.appendChild(count);
		plateCounting.appendChild(container);		
	});
	
	rightcontainer.appendChild(plateCounting);	
}

export function cretaeMaterialGrid(type, card, rightcontainer) {
	console.log("cretaeMaterialGrid-",card,rightcontainer);
	
	const materialGrid = document.createElement("section");
	materialGrid.classList.add("material-grid");
	
	let itemList;
	
	//캐릭터 육성 재료
	if(type === "character") {
		itemList = [
			{ name: "Clamcoin", path: "images/item/Clamcoin.jpg", star : 3 },
			{ name: "rankup", path: `images/item/rankup/${card.rankup}.jpg`, star : 4 },
			{ name: "collect", path: `images/item/collect/${card.collect}.jpg`, star : 1 },
			{ name: "weekly Boss", path: `images/item/weekly_boss/${card.weekly_boss}.jpg`, star : 4 },

			{ name: "resonator exp 5", path: "images/item/exp/resonator_5.jpg", star : 5 },
			{ name: "resonator exp 4", path: "images/item/exp/resonator_4.jpg", star : 4 },
			{ name: "resonator exp 3", path: "images/item/exp/resonator_3.jpg", star : 3 },
			{ name: "resonator exp 2", path: "images/item/exp/resonator_2.jpg", star : 2 },

			{ name: "weapon 5", path: `images/item/weapon/${card.weapon}_5.jpg`, star : 5 },
			{ name: "weapon 4", path: `images/item/weapon/${card.weapon}_4.jpg`, star : 4 },
			{ name: "weapon 3", path: `images/item/weapon/${card.weapon}_3.jpg`, star : 3 },
			{ name: "weapon 2", path: `images/item/weapon/${card.weapon}_2.jpg`, star : 2 },

			{ name: "foster 5", path: `images/item/material/${card.material}_5.jpg`, star : 5 },
			{ name: "foster 4", path: `images/item/material/${card.material}_4.jpg`, star : 4 },
			{ name: "foster 3", path: `images/item/material/${card.material}_3.jpg`, star : 3 },
			{ name: "foster 2", path: `images/item/material/${card.material}_2.jpg`, star : 2 },
		];
	}
	else{	//무기 육성 재료
		itemList = [
			{ name: "resonator exp 5", path: "images/item/exp/weapon_5.jpg", star : 5 },
			{ name: "resonator exp 4", path: "images/item/exp/weapon_4.jpg", star : 4 },
			{ name: "resonator exp 3", path: "images/item/exp/weapon_3.jpg", star : 3 },
			{ name: "resonator exp 2", path: "images/item/exp/weapon_2.jpg", star : 2 },

			{ name: "weapon 5", path: `images/item/weapon/${card.weapon}_5.jpg`, star : 5 },
			{ name: "weapon 4", path: `images/item/weapon/${card.weapon}_4.jpg`, star : 4 },
			{ name: "weapon 3", path: `images/item/weapon/${card.weapon}_3.jpg`, star : 3 },
			{ name: "weapon 2", path: `images/item/weapon/${card.weapon}_2.jpg`, star : 2 },

			{ name: "foster 5", path: `images/item/material/${card.material}_5.jpg`, star : 5 },
			{ name: "foster 4", path: `images/item/material/${card.material}_4.jpg`, star : 4 },
			{ name: "foster 3", path: `images/item/material/${card.material}_3.jpg`, star : 3 },
			{ name: "foster 2", path: `images/item/material/${card.material}_2.jpg`, star : 2 },
		];
	}
	
	
	itemList.forEach((item, index) => {
		const card = document.createElement("div");
		card.classList.add("img-card", `star-${item.star}`);
		
		card.innerHTML = `
			<div class="img-wrapper star-${item.star}" >
			<img src="${item.path}" alt="${item.name}">
			</div>
			<div class="need-count">
			<span class="required-count">0</span>
			</div>
		`;

		if(index >= 8){
			card.innerHTML += `
				<div class="have-count">
				<button class="dec">-</button>
				<input type="number" value="0" min="0">
				<button class="inc">+</button>
				</div>
			`;
		}

		materialGrid.appendChild(card);
		
		// 카드별 버튼 이벤트
		
		if(index >= 8){
			const wrapper = card.querySelector('.have-count');
			const input = wrapper.querySelector('input');
			const inc = wrapper.querySelector('.inc');
			const dec = wrapper.querySelector('.dec');
			
			inc.addEventListener('click', () => {
				input.value = parseInt(input.value) + 1;
				input.dispatchEvent(new Event("input"));
			});

			dec.addEventListener('click', () => {
				input.value = Math.max(0, parseInt(input.value) - 1);
				input.dispatchEvent(new Event("input"));
			});
			
			// 🔥 input 값 변경 시 실시간 계산
			input.addEventListener("input", () => {
			});
		}
	});
	
	rightcontainer.appendChild(materialGrid);
}

function createCounting(type, container) {
	
}