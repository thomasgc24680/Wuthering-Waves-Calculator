const container = document.getElementById("status-container");

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get("name");
  
  const character = characters.find(c => c.name === characterName);

  if (character) {
    const titleEl = document.getElementById("detail-title");
    titleEl.textContent = `${character.KR_name} 육성 계산기`;
  }
});

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