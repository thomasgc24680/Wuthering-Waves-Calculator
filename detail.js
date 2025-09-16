const skills = ["basic", "skill", "circuit", "liberation", "intro"];
const skills_KR = ["일반공격", "공명스킬", "공명회로", "공명해방", "변주스킬"];
const container = document.getElementById("status-container");

skills.forEach((skill, index) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("skill");

  //라벨
  const label = document.createElement("span");
  label.classList.add("label");
  label.textContent = skills_KR[index];
  
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
	const detailImg = character.img.replace(".jpg", "-detail.jpg");
    document.querySelector(".character-image").innerHTML =
      `<img src="${detailImg}" alt="${character.name}">`;
  }
};