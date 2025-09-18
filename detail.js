const skills = ["basic", "skill", "circuit", "liberation", "intro"];
const skills_languege = [
		["basic", "skill", "circuit", "liberation", "intro"],
		["일반공격", "공명스킬", "공명회로", "공명해방", "변주스킬"],
	];
	
const skills_button_title = ["Skill Connection Points", "스킬 연결점", "", ""];
const skills_image_title = ["Skill level up order", "스킬 레벨 업 순서", "", ""];


const container = document.getElementById("status-container");

skills_languege[0].forEach((skill, index) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("skill");

  //라벨
  const label = document.createElement("span");
  label.classList.add("label");
  label.textContent = skills_languege[1][index];
  
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
  
  // 구분선
  const divider = document.createElement("span");
  divider.classList.add("inner-divider");

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
  wrapper.appendChild(divider);
  wrapper.appendChild(selectGoal);

  container.appendChild(wrapper);
});

// detail.js
window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get("name"); // 캐릭터 이름 가져오기

  console.log("선택한 캐릭터:", characterName);

  // 이후 캐릭터 데이터를 찾을 때 활용 가능
  const character = characters.find(c => c.name === characterName);
  if (character) {
	document.title = `${characterName} - 육성 계산기`;
	const detailImg = `images/resonator/${character.name}-detail.jpg`;
    document.querySelector(".character-image").innerHTML =
      `<img src="${detailImg}" alt="${character.name}">`;
	
	const skillBtnTitle = document.getElementById("skill-button-title");
    skillBtnTitle.textContent = skills_button_title[1];
	createSkillButtons(character);
	
	const skillImgTitle = document.getElementById("skill-image-title");
    skillImgTitle.textContent = skills_image_title[1];
	createSkillImage(character);
  }
};

function createSkillButtons(character) {
  const container = document.getElementById("skill-buttons");
  container.innerHTML = "";

  // 버튼 이미지 규칙
  const btnImages = [
    character["skill bonus2"], // 1번째
    character["skill bonus1"], // 2번째
    `${character.name}_skill1.jpg`, // 3번째 (하단)
    character["skill bonus1"], // 4번째
    character["skill bonus2"], // 5번째
  ];

  // 5열 반복
  for (let col = 0; col < 5; col++) {
    const colDiv = document.createElement("div");
    colDiv.classList.add("skill-col");

    // === 상단 버튼 ===
    const topBtn = document.createElement("button");
    let topImg;
    if (col === 2) {
      topImg = `images/skill/${character.name}_skill2.jpg`;
    } else {
      topImg = `images/skill/link/${btnImages[col]}.jpg`;
    }
    topBtn.innerHTML = `<img src="${topImg}" alt="skill">`;

    // === 연결선 ===
    const connector = document.createElement("div");
    connector.classList.add("connector");

    // === 하단 버튼 ===
    const bottomBtn = document.createElement("button");
    let bottomImg;
    if (col === 2) {
      bottomImg = `images/skill/${character.name}_skill1.jpg`;
    } else {
      bottomImg = `images/skill/link/${btnImages[col]}.jpg`;
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

function createSkillImage(character) {
  const imageContainer = document.getElementById("skill-image");
  imageContainer.innerHTML = ""; // 초기화

  const skillLvUpImg = document.createElement("img");
  skillLvUpImg.classList.add("skill-lv-up");
  skillLvUpImg.src = `images/skill/${character.name}_skill_lv_up.jpg`;
  skillLvUpImg.alt = `${character.name} 스킬 레벨업`;

  imageContainer.appendChild(skillLvUpImg);
}