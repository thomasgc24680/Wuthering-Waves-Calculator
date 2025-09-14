//attribute : glacio(응결), fusion(용융), conducto(전도), aero(기류), spectra(회절), havoc(인멸)
//weapon : greatsword(대검), straightsword(직검), gun(권총), fist(권갑), amplifier(증폭기)

//속성
const attribute = ["ALL", "glacio", "fusion", "conducto", "aero", "spectra", "havoc"];

//필터
const filterSets = {
	character: {
		attribute: ["ALL", "glacio", "fusion", "conducto", "aero", "spectra", "havoc"],
		weaponType: ["ALL", "greatsword", "gun", "fist", "amplifier"]
	},
	weapon: {
		weaponType: ["ALL", "greatsword", "gun", "fist", "amplifier"]
	}
};
////////////////////////////

let currentTab = 'character';
let currentAttributeFilter = "ALL";
let currentWeaponFilter = "ALL";
let currentStarFilter = "ALL";



// 시작 화면 - 캐릭터 선택 화면
document.addEventListener("DOMContentLoaded", () => {
  // 필터 버튼 이벤트 바인딩 (동적으로 추가되어도 문제없게)
  document.querySelectorAll("#filter-screen .filter-buttons button").forEach(btn => {
    btn.addEventListener("click", onFilterButtonClick);
  });
  
  //기본 화면
  switchTab('character');
});

function onFilterButtonClick(e) {
  const btn = e.currentTarget;
  const type = btn.dataset.type;
  const filter = btn.dataset.filter;
  const alreadyActive = btn.classList.contains("active");

  // 같은 그룹 버튼들 active 해제
  document.querySelectorAll(`#filter-screen .filter-buttons button[data-type="${type}"]`)
    .forEach(b => b.classList.remove("active"));

  if (alreadyActive) {
    if (type === "attribute") currentAttributeFilter = "ALL";
    if (type === "weapon") currentWeaponFilter = "ALL";
	if (type === "star") currentStarFilter = "ALL";
  } else {
    btn.classList.add("active");
    if (type === "attribute") currentAttributeFilter = filter;
    if (type === "weapon") currentWeaponFilter = filter;
	if (type === "star") currentStarFilter = filter;
  }

  applyFilter();
}

function switchTab(tabName) {
	const tabIndex = tabName === 'character' ? 0 : 1;
	document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
	const tabBtn = document.querySelectorAll('.tab')[tabIndex];
	if (tabBtn) tabBtn.classList.add('active');
	
	currentTab = tabName;

	currentAttributeFilter = "ALL";
	currentWeaponFilter = "ALL";
	currentStarFilter = "ALL";
	const weaponOnlyStars = document.querySelectorAll(".star-filters .weapon-only");

	// 🔹 버튼 active 클래스 제거
	document.querySelectorAll("#filter-screen .filter-buttons button")
	.forEach(b => b.classList.remove("active"));

	// 🔹 필터 표시/숨김 제어
	const attrFilters = document.querySelector(".attribute-filters");
	
	if(tabName === "character") {
		if(attrFilters) attrFilters.classList.remove('invisible');
		// 1~3성 숨김
		weaponOnlyStars.forEach(btn => btn.classList.add("hidden"));
	}
	else{
		if(attrFilters) attrFilters.classList.add('invisible');
		weaponOnlyStars.forEach(btn => btn.classList.remove("hidden"));
	}
	
	applyFilter(); // 필터 초기화
	console.log("switchTab");
}

function applyFilter(filter) {
  const container = document.querySelector(".card-grid");
  container.innerHTML = "";

  const data = currentTab === "character" ? characters : weapons;

  const filtered = data.filter(item => {
    if (currentTab === "character") {
      const attrMatch = currentAttributeFilter === "ALL" || 
                        item.attribute.toLowerCase() === currentAttributeFilter.toLowerCase();
      const weaponMatch = currentWeaponFilter === "ALL" || 
                          item.weapon.toLowerCase() === currentWeaponFilter.toLowerCase();
	  const starMatch = currentStarFilter === "ALL" || 
                          String(item.star) === currentStarFilter;
      return attrMatch && weaponMatch && starMatch; // ✅ AND 조건
    } else {
      const weaponMatch = currentWeaponFilter === "ALL" ||
             item.weaponType.toLowerCase() === currentWeaponFilter.toLowerCase();
	  const starMatch = currentStarFilter === "ALL" || 
                          String(item.star) === currentStarFilter;
	  return weaponMatch && starMatch; // ✅ AND 조건
    }
  });

  container.innerHTML = "";
  filtered.forEach(item => {
    const button = document.createElement("button");
    button.classList.add("select-card");

	let starClass;
	
	if(item.star === 5) starClass = "star-5"
	else if(item.star === 4) starClass = "star-4";
	else if(item.star === 3) starClass = "star-3";
	else if(item.star === 2) starClass = "star-2";
	else starClass = "star-1";
	
	if (currentTab === "character") {	
		button.innerHTML = `
		  <div class="img-wrapper ${starClass}">
			<img src="${item.img}" alt="${item.name}">
			<img class="attr-icon" src="images/attribute/${item.attribute}.jpg" alt="${item.attribute}">
			<img class="weap-icon" src="images/filter/weapon/${item.weapon}.jpg" alt="${item.weapon}">
		  </div>
		  <p>${item.name}</p>
		`;
		button.onclick = () => alert(`${item.name} 선택됨 (캐릭터)`); 
    }
	else {
		button.innerHTML = `
		  <div class="img-wrapper ${starClass}">
			<img src="${item.img}" alt="${item.name}">
			<img class="weap-icon" src="images/filter/weapon/${item.weapon}.jpg" alt="${item.weapon}">
		  </div>
		  <p>${item.name}</p>
		`;
      button.onclick = () => alert(`${item.name} 선택됨 (무기)`); 
    }
	
	
    container.appendChild(button);
  });
}

////////////////////////////////

//attribute : glacio(응결), fusion(용융), conducto(전도), aero(기류), spectra(회절), havoc(인멸)
//weapon : greatsword(대검), straightsword(직검), gun(권총), fist(권갑), amplifier(증폭기)

//캐릭터 데이터
const characters = [
		{ "name": "산화", "star": 4, "attribute": "glacio", "weapon" : "straightsword", "img": "images/resonator/sanhua.jpg"},
		{ "name": "페비", "star": 5, "attribute": "spectra", "weapon" : "amplifier", "img": "images/resonator/phoebe.jpg"},
		{ "name": "카르티시아", "star": 5, "attribute": "aero", "weapon" : "straightsword", "img": "images/resonator/cartethyia.jpg"},
		{ "name": "아우구스타", "star": 5, "attribute": "conducto", "weapon" : "greatsword", "img": "images/resonator/augusta.jpg"},
		{ "name": "카를로타", "star": 5, "attribute": "glacio", "weapon" : "gun", "img": "images/resonator/carlotta.jpg"},
		{ "name": "갈브레나", "star": 5, "attribute": "fusion", "weapon" : "gun", "img": "images/resonator/galbrena.jpg"},
		{ "name": "플로로", "star": 5, "attribute": "havoc", "weapon" : "amplifier", "img": "images/resonator/phrolova.jpg"},
		{ "name": "유노", "star": 5, "attribute": "aero", "weapon" : "fist", "img": "images/resonator/iuno.jpg"},
		{ "name": "설지", "star": 4, "attribute": "glacio", "weapon" : "amplifier", "img": "images/resonator/baizhi.jpg"},
		{ "name": "브렌트", "star": 5, "attribute": "fusion", "weapon" : "straightsword", "img": "images/resonator/brant.jpg"},
		{ "name": "카카루", "star": 5, "attribute": "conducto", "weapon" : "greatsword", "img": "images/resonator/calcharo.jpg"},
		{ "name": "장리", "star": 5, "attribute": "fusion", "weapon" : "straightsword", "img": "images/resonator/changli.jpg"},
		{ "name": "치샤", "star": 4, "attribute": "fusion", "weapon" : "gun", "img": "images/resonator/chixia.jpg"},
		{ "name": "앙코", "star": 5, "attribute": "fusion", "weapon" : "fist", "img": "images/resonator/encore.jpg"},
		{ "name": "능양", "star": 5, "attribute": "glacio", "weapon" : "fist", "img": "images/resonator/lingyang.jpg"},
		{ "name": "루미", "star": 4, "attribute": "conducto", "weapon" : "greatsword", "img": "images/resonator/lumi.jpg"},
		{ "name": "루파", "star": 5, "attribute": "fusion", "weapon" : "greatsword", "img": "images/resonator/lupa.jpg"},
		{ "name": "모르테피", "star": 4, "attribute": "fusion", "weapon" : "gun", "img": "images/resonator/mortefi.jpg"},
		{ "name": "상리요", "star": 5, "attribute": "conducto", "weapon" : "fist", "img": "images/resonator/xiangli Yao.jpg"},
		{ "name": "음림", "star": 5, "attribute": "conducto", "weapon" : "amplifier", "img": "images/resonator/yinlin.jpg"},
		{ "name": "유호", "star": 4, "attribute": "glacio", "weapon" : "fist", "img": "images/resonator/youhu.jpg"},
		{ "name": "연무", "star": 5, "attribute": "conducto", "weapon" : "fist", "img": "images/resonator/yuanwu.jpg"},
		{ "name": "절지", "star": 5, "attribute": "glacio", "weapon" : "amplifier", "img": "images/resonator/zhezhi.jpg"},
	];
	
//무기 데이터
const weapons = [
		{ "name": "천년의 회류", "star": 5, "weapon" : "straightsword", "img" : "images/weapon/천년의 회류.jpg"},
		{ "name": "견습용 권총", "star": 1, "weapon" : "gun", "img" : "images/weapon/견습용 권총.jpg"},
		{ "name": "수호자의 권총 · 용맹", "star": 3, "weapon" : "gun", "img" : "images/weapon/수호자의 권총 · 용맹.jpg"},
		{ "name": "천년의 회류", "star": 5, "weapon" : "straightsword", "img" : "images/weapon/천년의 회류.jpg"},
		{ "name": "견습용 권총", "star": 1, "weapon" : "gun", "img" : "images/weapon/견습용 권총.jpg"},
		{ "name": "수호자의 권총 · 용맹", "star": 3, "weapon" : "gun", "img" : "images/weapon/수호자의 권총 · 용맹.jpg"},
		{ "name": "천년의 회류", "star": 5, "weapon" : "straightsword", "img" : "images/weapon/천년의 회류.jpg"},
		{ "name": "견습용 권총", "star": 1, "weapon" : "gun", "img" : "images/weapon/견습용 권총.jpg"},
		{ "name": "수호자의 권총 · 용맹", "star": 3, "weapon" : "gun", "img" : "images/weapon/수호자의 권총 · 용맹.jpg"},
	];