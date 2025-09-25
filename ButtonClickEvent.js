/*
추가할 함수
 - 필터 버튼 클릭 동작
 - 스위치 탭 동작
 - 캐릭터/무기 선택 화면 클릭 동작
 - 스킬 연결점 버튼 활성화/비활성화 동작
*/

function CardClickEvent(select_card_name) {
	window.location.href = `detail.html?type=${currentTab}&name=${encodeURIComponent(select_card_name)}`;
}


//필터 버튼 클릭 동작
export function FilterButtonClickEvent(ClickBtn) {
  const currentBtn = ClickBtn.currentTarget;
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

//탭 변경(캐릭터 / 무기)
function TabSwitchEvent(currentTab) {
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

/*
//아래 두 함수 활용 방안(예시)
document.querySelectorAll("#filter-screen .filter-buttons button")
    .forEach(btn => {
        btn.addEventListener("click", () => {
            const result = toggleFilterButton(btn);

            // 버튼 상태 기반 전역 필터 값 갱신
            if (result.type === "attribute") currentAttributeFilter = result.currentFilter;
            if (result.type === "weapon") currentWeaponFilter = result.currentFilter;
            if (result.type === "star") currentStarFilter = result.currentFilter;

            // 실제 grid 재렌더링
            applyFilterGrid(currentTab, currentAttributeFilter, currentWeaponFilter, currentStarFilter, 
                            currentTab === "character" ? CharacterData : WeaponData, ".card-grid");
        });
    });



//applyFilter 함수를 GPT가 분류한 함수 2개
// 버튼 클릭 시 active 토글 및 현재 필터 상태 반환
export function toggleFilterButton(btn) {
    const type = btn.dataset.type;
    const filter = btn.dataset.filter;
    const alreadyActive = btn.classList.contains("active");

    // 같은 그룹 버튼 active 제거
    document.querySelectorAll(`#filter-screen .filter-buttons button[data-type="${type}"]`)
        .forEach(b => b.classList.remove("active"));

    let currentFilter;

    if (alreadyActive) {
        btn.classList.remove("active");
        currentFilter = "ALL";
    } else {
        btn.classList.add("active");
        currentFilter = filter;
    }

    return { type, currentFilter }; // 어떤 타입 필터가 어떤 값인지 반환
}

export function applyFilterGrid(currentTab, currentAttributeFilter, currentWeaponFilter, currentStarFilter, dataArray, containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = "";

    const filtered = dataArray.filter(item => {
        if (currentTab === "character") {
            return (currentAttributeFilter === "ALL" || item.attribute.toLowerCase() === currentAttributeFilter.toLowerCase())
                && (currentWeaponFilter === "ALL" || item.weapon.toLowerCase() === currentWeaponFilter.toLowerCase())
                && (currentStarFilter === "ALL" || String(item.star) === currentStarFilter);
        } else {
            return (currentWeaponFilter === "ALL" || item.weaponType.toLowerCase() === currentWeaponFilter.toLowerCase())
                && (currentStarFilter === "ALL" || String(item.star) === currentStarFilter);
        }
    });

    filtered.forEach(item => {
        const cardBtn = document.createElement("button");
        cardBtn.classList.add("select-card");
        // innerHTML 구성 (캐릭터/무기 구분 포함)
        container.appendChild(cardBtn);
    });
}

*/


//필터 -> 기능 분류 필요
//분류할 기능 : 필터링, Grid 생성 -> 해당 파일에선 버튼 클릭 이벤트만 필요
function applyFilter(filter) {
  const container = document.querySelector(".card-grid");
  container.innerHTML = "";

  const data = currentTab === "character" ? characters : weapons;

  const filtered = data.filter(card => {
    if (currentTab === "character") {
      const attrMatch = currentAttributeFilter === "ALL" || 
                        card.attribute.toLowerCase() === currentAttributeFilter.toLowerCase();
      const weaponMatch = currentWeaponFilter === "ALL" || 
                          card.weapon.toLowerCase() === currentWeaponFilter.toLowerCase();
	  const starMatch = currentStarFilter === "ALL" || 
                          String(card.star) === currentStarFilter;
      return attrMatch && weaponMatch && starMatch; // ✅ AND 조건
    } else {
      const weaponMatch = currentWeaponFilter === "ALL" ||
             card.weaponType.toLowerCase() === currentWeaponFilter.toLowerCase();
	  const starMatch = currentStarFilter === "ALL" || 
                          String(card.star) === currentStarFilter;
	  return weaponMatch && starMatch; // ✅ AND 조건
    }
  });

  container.innerHTML = "";
  filtered.forEach(card => {
    const button = document.createElement("button");
    button.classList.add("select-card");

	let starClass;
	
	if(card.star === 5) starClass = "star-5"
	else if(card.star === 4) starClass = "star-4";
	else if(card.star === 3) starClass = "star-3";
	else if(card.star === 2) starClass = "star-2";
	else starClass = "star-1";
	
	if (currentTab === "character") {	
		button.innerHTML = `
		  <div class="img-wrapper ${starClass}">
			<img src="images/resonator/${card.name}/main.jpg" alt="${card.name}">
			<img class="attr-icon" src="images/icon/attribute/${card.attribute}.jpg" alt="${card.attribute}">
			<img class="weap-icon" src="images/icon/weapon/${card.weapon}.jpg" alt="${card.weapon}">
		  </div>
		  <p>${card.KR_name}</p>
		`;
		button.onclick = () => goToDetail(card.name);
    }
	else {
		button.innerHTML = `
		  <div class="img-wrapper ${starClass}">
			<img src="images/weapon/${card.name}.jpg" alt="${card.name}">
			<img class="weap-icon" src="images/icon/weapon/${card.weapon}.jpg" alt="${card.weapon}">
		  </div>
		  <p>${card.KR_name}</p>
		`;
      button.onclick = () => goToDetail(card.name);
    }
	
    container.appendChild(button);
  });
}