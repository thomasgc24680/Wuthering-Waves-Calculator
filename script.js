const characters = [
		{ "name": "산화", "img": "images/Resonator/Sanhua.jpg", "attribute": "Glacio", "weapon" : "straightsword"},
		{ "name": "페비", "img": "images/Resonator/Phoebe.jpg", "attribute": "Spectra", "weapon" : "amplifier"},
		{ "name": "카르티시아", "img": "images/Resonator/Cartethyia.jpg", "attribute": "Aero", "weapon" : "straightsword"},
	];

const weapons = [
		{ "name": "천년의 회류", "img" : "images/weapon/천년의 회류.jpg"}
	];

let currentTab = "character";

function switchTab(tabName) {
  document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab')[tabName === 'character' ? 0 : 1].classList.add('active');

  currentTab = tabName;
  renderSelectScreen();
}

function renderSelectScreen() {
  const container = document.querySelector(".card-grid");
  container.innerHTML = "";

  const data = currentTab === "character" ? characters : weapons;

  data.forEach(item => {
    const button = document.createElement("button");
    button.classList.add("char-card");
    button.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <p>${item.name}</p>
    `;
    if (currentTab === "character") {
      button.onclick = () => showCharacterDetail(item);
    } else {
      button.onclick = () => alert(`${item.name} 선택됨 (무기)`); 
    }
    container.appendChild(button);
  });

  // 선택 화면만 보이도록
  document.getElementById("select-screen").classList.remove("hidden");
  document.getElementById("character-detail").classList.add("hidden");
}

/*
//JSON 파일 사용 시 활성화
async function renderCharacterSelect() {
  try {
    // JSON 파일 불러오기
    const response = await fetch("characters.json");
    const characters = await response.json();

    const container = document.querySelector(".card-grid");
    container.innerHTML = "";

    characters.forEach(char => {
      const button = document.createElement("button");
      button.classList.add("card");
      button.innerHTML = `
        <img src="${char.img}" alt="${char.name}">
        <p>${char.name}</p>
      `;
      button.onclick = () => showCharacterDetail(char.name);
      container.appendChild(button);
    });
  } catch (error) {
    console.error("캐릭터 데이터를 불러오지 못했습니다:", error);
  }
}
*/

// 캐릭터 상세 화면 표시
function showCharacterDetail(char) {
  document.getElementById("select").classList.add("hidden");
  document.getElementById("character-detail").classList.remove("hidden");

  document.getElementById("detail-image").src = char.img;
  document.getElementById("detail-name").innerText = char.name;
}
