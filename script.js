//attribute : aero(기류), conducto(전도), fusion(용융), glacio(응결), havoc(인멸), spectra(회절)
//weapon : greatsword(대검), straightsword(직검), gun(권총), fist(권갑), amplifier(증폭기)

const attribute = ["ALL", "glacio", "fusion", "conducto", "aero", "spectra", "havoc"];

const characters = [
		{ "name": "산화", "star": 4, "attribute": "Glacio", "weapon" : "straightsword", "img": "images/Resonator/Sanhua.jpg"},
		{ "name": "페비", "star": 5, "attribute": "Spectra", "weapon" : "amplifier", "img": "images/Resonator/Phoebe.jpg"},
		{ "name": "카르티시아", "star": 5, "attribute": "Aero", "weapon" : "straightsword", "img": "images/Resonator/Cartethyia.jpg"},
		{ "name": "아우구스타", "star": 5, "attribute": "conducto", "weapon" : "greatsword", "img": "images/Resonator/Augusta.jpg"},
		{ "name": "카를로타", "star": 5, "attribute": "glacio", "weapon" : "gun", "img": "images/Resonator/Carlotta.jpg"},
		{ "name": "갈브레나", "star": 5, "attribute": "fusion", "weapon" : "gun", "img": "images/Resonator/Galbrena.jpg"},
		{ "name": "플로로", "star": 5, "attribute": "glacio", "weapon" : "amplifier", "img": "images/Resonator/Phrolova.jpg"},
	];

const weapons = [
		{ "name": "천년의 회류", "weaponType" : "straightsword", "img" : "images/weapon/천년의 회류.jpg"}
	];
	
const filterSets = {
	character: {
		attribute: ["ALL", "glacio", "fusion", "conducto", "aero", "spectra", "havoc"],
		weaponType: ["ALL", "greatsword", "gun", "fist", "amplifier"]
	},
	weapon: {
		weaponType: ["ALL", "greatsword", "gun", "fist", "amplifier"]
	}
};

// 시작 화면 - 캐릭터 선택 화면
document.addEventListener("DOMContentLoaded", () => {
  switchTab('character');
});


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
    button.classList.add("select-card");
	
	const starClass = item.star === 5 ? "star-5" : "star-4";
    button.innerHTML = `
		<div class="img-wrapper ${starClass}">
			<img src="${item.img}" alt="${item.name}">
		</div>
		<p>${item.name}</p>
    `;
    if (currentTab === "character") {
//      button.onclick = () => showCharacterDetail(item);
        button.onclick = () => alert(`${item.name} 선택됨 (캐릭터)`); 
    } else {
      button.onclick = () => alert(`${item.name} 선택됨 (무기)`); 
    }
    container.appendChild(button);
  });

  // 선택 화면만 보이도록
  document.getElementById("select-screen").classList.remove("hidden");
}

/*
function switchTab(tabName) {
  renderFilterButtons(tabName);
  if (tabName === "character") {
    renderCharacters(characters);
  } else {
    renderWeapons(weapons);
  }
}

// 🔹 버튼 렌더링
const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");

filters.forEach((filter, index) => {
  const btn = document.createElement("button");
  btn.textContent = filter;
  btn.onclick = () => applyFilter(filter, btn);

  if (index < 6) row1.appendChild(btn);
  else row2.appendChild(btn);
});

function renderCharacters(list) {
  const container = document.getElementById("character-list");
  container.innerHTML = "";
  list.forEach(char => {
    const card = document.createElement("div");
    card.classList.add("select-card");
    card.innerHTML = `
      <img src="${char.img}" alt="${char.name}">
      <p>${char.name}</p>
    `;
    container.appendChild(card);
  });
}

function renderWeapons(list) {
  const container = document.getElementById("weapon-list");
  container.innerHTML = "";
  list.forEach(weapon => {
    const card = document.createElement("div");
    card.classList.add("select-card");
    card.innerHTML = `
      <img src="${weapon.img}" alt="${weapon.name}">
      <p>${weapon.name}</p>
    `;
    container.appendChild(card);
  });
}

function applyFilter(type, filter, button) {
  // 버튼 active 표시
  document.querySelectorAll(".filter-buttons button").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  if (type === "character") {
    if (filter === "전체") {
      renderCharacters(characters);
    } else {
      const filtered = characters.filter(c =>
        c.element === filter || c.weaponType === filter
      );
      renderCharacters(filtered);
    }
  } else if (type === "weapon") {
    if (filter === "전체") {
      renderWeapons(weapons);
    } else {
      const filtered = weapons.filter(w => w.weaponType === filter);
      renderWeapons(filtered);
    }
  }
}
*/


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

// 캐릭터 상세 화면 표시(개발 대기)
function showCharacterDetail(char) {
  document.getElementById("select").classList.add("hidden");
  document.getElementById("character-detail").classList.remove("hidden");

  document.getElementById("detail-image").src = char.img;
  document.getElementById("detail-name").innerText = char.name;
}
