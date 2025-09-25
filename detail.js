window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get("name"); // 캐릭터 이름 가져오기

  console.log("선택한 캐릭터:", characterName);

  // 이후 캐릭터 데이터를 찾을 때 활용 가능
  const character = characters.find(c => c.name === characterName);
  if (character) {
	  
	document.title = `${character.KR_name} - 육성 계산기`;
	const detailImg = `images/resonator/${character.name}/detail.jpg`;
    document.querySelector(".character-image").innerHTML =
      `<img src="${detailImg}" alt="${character.name}">`;
	
	const skillBtnTitle = document.getElementById("skill-button-title");
    skillBtnTitle.textContent = skills_button_title[1];
	createSkillButtons(character);
	
	const skillImgTitle = document.getElementById("skill-image-title");
    skillImgTitle.textContent = skills_image_title[1];
	
	renderSkillUpgrade(character);
	
	// 우측 재료 화면 생성
    renderRightContainer(character, "right-container");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  const name = params.get("name");
  
  console.log("addEventListener");
  
  if (type === "character") {
	  const character = characters.find(c => c.name === characterName);
	  if (character) {
		  document.title = `${character.KR_name} - 육성 계산기`;
		  document.getElementById("detail-title").textContent = `${character.KR_name} 육성 계산기`;
		  
		  renderCharacterUI(character, type);
	  }
  }
  
  else if (type === "weapon") {
	  const weapon = weapons.find(w => w.name === weaponName);
	  if (weapon) {
		  document.title = `${weapon.KR_name} - 육성 계산기`;
		  document.getElementById("detail-title").textContent = `${weapon.KR_name} 육성 계산기`;
		  
		  renderWeaponUI(weapon, type);
	  }
  }
});


function renderCharacterUI(character, type) {
	// 캐릭터 이미지
	document.querySelector(".character-image").innerHTML = 
		`<img src="images/resonator/${character.name}/detila.jpg" alt="${character.name}">`;
		
	createDetailInfo(character, type);
		
	createSkiilButtons(character);
	renderSkillUpgrade(character);
	
	renderRightContainer(character, "right-container");
}

function renderWeaponUI(weapon) {
  // 무기 이미지
  document.querySelector(".character-image").innerHTML =
    `<img src="images/weapon/${weapon.name}.jpg" alt="${weapon.name}">`;

  // 무기는 스킬/랭크 같은 게 필요 없으면 → 관련 DOM 숨기기
  document.getElementById("skill-buttons").style.display = "none";
  document.getElementById("skill-upgrade").style.display = "none";
  document.getElementById("skill-button-title").style.display = "none";
  document.getElementById("skill-image-title").style.display = "none";

  // 무기 재료 UI 따로 만들기 (예시)
  renderWeaponMaterials(weapon, "right-container");
}

function createDetailInfo(){
}

function createSkiilButtons(chara){
}

const container = document.getElementById("status-container");

skills_language[0].forEach((skill, index) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("skill");

  //라벨
  const label = document.createElement("span");
  label.classList.add("label");
  label.textContent = skills_language[1][index];
  
  const skillId = skill.toLowerCase().replace(/\s+/g, "_");

  // 현재 값 select box
  const selectCurrent = document.createElement("select");
  selectCurrent.id = `${skillId}_current`;   // 예: 일반공격_current
  for (let i=1; i<=10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectCurrent.appendChild(option);
  }
  
  // 화살표
  const arrow = document.createElement("span");
  arrow.textContent = ">>";
  arrow.classList.add("arrow");

  // 목표 값 select
  const selectGoal = document.createElement("select");
  selectGoal.id = `${skillId}_goal`;   // 예: 일반공격_current
  for (let i = 1; i <= 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectGoal.appendChild(option);
  }

  wrapper.appendChild(label);
  wrapper.appendChild(selectCurrent);
  wrapper.appendChild(arrow);
  wrapper.appendChild(selectGoal);

  container.appendChild(wrapper);
});

function createSkillButtons(character) {
  const container = document.getElementById("skill-buttons");
  container.innerHTML = "";

  // 버튼 이미지 규칙
  const btnImages = [
    character["stat bonus2"], // 1번째
    character["stat bonus1"], // 2번째
    `${character.name}_skill1.jpg`, // 3번째 (하단)
    character["stat bonus1"], // 4번째
    character["stat bonus2"], // 5번째
  ];

  // 5열 반복
  for (let col = 0; col < 5; col++) {
    const colDiv = document.createElement("div");
    colDiv.classList.add("skill-col");

    // === 상단 버튼 ===
    const topBtn = document.createElement("button");
    let topImg;
    if (col === 2) {
      topImg = `images/resonator/${character.name}/inherent2.jpg`;
    } else {
      topImg = `images/icon/skill/${btnImages[col]}.jpg`;
    }
    topBtn.innerHTML = `<img src="${topImg}" alt="skill">`;

    // === 연결선 ===
    const connector = document.createElement("div");
    connector.classList.add("connector");

    // === 하단 버튼 ===
    const bottomBtn = document.createElement("button");
    let bottomImg;
    if (col === 2) {
      bottomImg = `images/resonator/${character.name}/inherent1.jpg`;
    } else {
      bottomImg = `images/icon/skill/${btnImages[col]}.jpg`;
    }
    bottomBtn.innerHTML = `<img src="${bottomImg}" alt="skill">`;

    // === 클릭 동작 ===
    // 상단 버튼 → 상단+하단 둘 다 활성화
    topBtn.addEventListener("click", () => {
	  const isActive = topBtn.classList.contains("active");
      if (isActive) {
        topBtn.classList.remove("active");
      } else {
        topBtn.classList.add("active");
        bottomBtn.classList.add("active");
      }
    });

    // 하단 버튼 → 자기 자신만 활성화
    bottomBtn.addEventListener("click", () => {
      const isActive = bottomBtn.classList.contains("active");
      if (isActive) {
        bottomBtn.classList.remove("active");
		topBtn.classList.remove("active");
      } else {
        bottomBtn.classList.add("active");
      }
    });

    // colDiv 조립
    colDiv.appendChild(topBtn);
    colDiv.appendChild(connector);
    colDiv.appendChild(bottomBtn);

    container.appendChild(colDiv);
  }
}

function renderSkillUpgrade(character) {
  const pathContainer = document.getElementById("skill-upgrade");
  pathContainer.innerHTML = ""; // 초기화
  
  const skills = character.skillLevelUpOrder.match(/[\w]+|＞|≥|=/g);

  skills.forEach((skillKey, index) => {
    // 이미지 + 텍스트 묶음
    const skillWrapper = document.createElement("div");
    skillWrapper.classList.add("skill-item");
	
	const img = document.createElement("img");
    // 스킬 아이콘
	if (skillKey === "＞" || skillKey === "≥" || skillKey === "=") {
		const arrow = document.createElement("span");
		arrow.textContent = skillKey;
		arrow.classList.add("skill-arrow");
		pathContainer.appendChild(arrow);
	}
	else {
		if (skillKey === "attack") {	// attack만 무기 아이콘 경로 사용
		  img.src = `images/icon/weapon/${character.weapon}_attack.jpg`;
		} else {
		  // 그 외 스킬은 원래 경로
		  img.src = `images/resonator/${character.name}/${skillKey}.jpg`;
		}
		img.alt = skillKey;
		img.classList.add("skill-icon");

		// 스킬 이름
		const skillNameIndex = skills_language[0].indexOf(skillKey); // 키값 기준 인덱스
		const label = document.createElement("span");
		label.textContent = skills_language[1][skillNameIndex] || skillKey;
		label.classList.add("skill-label");
		
		skillWrapper.appendChild(img);
		skillWrapper.appendChild(label);
		pathContainer.appendChild(skillWrapper);
	}
  });
}

const rightContainer = document.getElementById("right-container");
// 우측 재료 카드 생성 함수
function renderRightContainer(character, containerId) {
  rightContainer.innerHTML = ""; // 기존 내용 초기화

  const itemList = [
    { name: "Clamcoin", path: "images/item/Clamcoin.jpg", star : 3 },
    { name: "rankup", path: `images/item/rankup/${character.rankup}.jpg`, star : 4 },
    { name: "collect", path: `images/item/collect/${character.collect}.jpg`, star : 1 },
    { name: "weekly Boss", path: `images/item/weekly_boss/${character.weekly_boss}.jpg`, star : 4 },

    { name: "resonator exp 5", path: "images/item/resonator_exp/resonator_exp5.jpg", star : 5 },
    { name: "resonator exp 4", path: "images/item/resonator_exp/resonator_exp4.jpg", star : 4 },
    { name: "resonator exp 3", path: "images/item/resonator_exp/resonator_exp3.jpg", star : 3 },
    { name: "resonator exp 2", path: "images/item/resonator_exp/resonator_exp2.jpg", star : 2 },

    { name: "weapon 5", path: `images/item/weapon/${character.weapon}_5.jpg`, star : 5 },
    { name: "weapon 4", path: `images/item/weapon/${character.weapon}_4.jpg`, star : 4 },
    { name: "weapon 3", path: `images/item/weapon/${character.weapon}_3.jpg`, star : 3 },
    { name: "weapon 2", path: `images/item/weapon/${character.weapon}_2.jpg`, star : 2 },

    { name: "foster 5", path: `images/item/material/${character.material}_5.jpg`, star : 5 },
    { name: "foster 4", path: `images/item/material/${character.material}_4.jpg`, star : 4 },
    { name: "foster 3", path: `images/item/material/${character.material}_3.jpg`, star : 3 },
    { name: "foster 2", path: `images/item/material/${character.material}_2.jpg`, star : 2 },
  ];

  itemList.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("img-card", `star-${item.star}`);

    card.innerHTML = `
      <div class="img-wrapper star-${item.star}" >
        <img src="${item.path}" alt="${item.name}">
      </div>
      <div class="need-count">
        <span class="required-count">0</span>
      </div>
      <div class="have-count">
            <button class="dec">-</button>
			<input type="number" value="0" min="0">
			<button class="inc">+</button>
      </div>
    `;

    rightContainer.appendChild(card);
	
    // 카드별 버튼 이벤트
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
  });
  
  

	// 모든 카드 반복
	rightContainer.querySelectorAll(".img-card").forEach(card => {
	  const input = card.querySelector(".have-count input");
	  const currentValue = parseInt(input.value);
	});
}