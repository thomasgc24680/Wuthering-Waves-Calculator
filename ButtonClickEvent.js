/*
추가할 함수
 - 필터 버튼 클릭 동작
 - 스위치 탭 동작
 - 캐릭터/무기 선택 화면 클릭 동작
 - 스킬 연결점 버튼 활성화/비활성화 동작
*/


//탭 변경(캐릭터 / 무기)
function SwitchTabClickEvent(currentTab) {
	const tabIndex = tabName === 'character' ? 0 : 1;
	
	currentTab = tabName;

	// 추후 따로 정의 예정.(위치 이동)
	const currentAttributeFilter = "ALL";
	const currentWeaponFilter = "ALL";
	const currentStarFilter = "ALL";


	// 🔹 필터 표시/숨김 제어
	const attrFilters = document.querySelector(".attribute-filters");
	
	if(currentTab === "character") {
		if(attrFilters) attrFilters.classList.remove('invisible');
		// 1~3성 숨김
		weaponOnlyStars.forEach(btn => btn.classList.add("hidden"));
	}
	else{
		attrFilters.classList.add('invisible');
		weaponOnlyStars.forEach(btn => btn.classList.remove("hidden"));
	}
	
	applyFilter(); // 필터 초기화
}

//main 페이지에서 카드 클릭 시 카드 type과 name detail 페이지로 넘기기.
export function CardClickEvent(select_card_name) {
	window.location.href = `detail.html?type=${currentTab}&name=${encodeURIComponent(select_card_name)}`;
}

// 스킬 버튼 활성/비활성 확인
export function toggleSkillButton(buttonElement, isActive) {
    if (isActive) buttonElement.classList.add("active");
    else buttonElement.classList.remove("active");
}

//필터 버튼 클릭 동작
export function FilterButtonClickEvent(ClickBtn) {
  const type = ClickBtn.dataset.type;
  const filter = ClickBtn.dataset.filter;
  const alreadyActive = ClickBtn.classList.contains("active");
  
  const currentAttributeFilter = "ALL";
  const currentWeaponFilter = "ALL";
  const currentStarFilter = "ALL";

  // 같은 그룹 버튼들 active 해제
  document.querySelectorAll(`#filter-screen .filter-buttons button[data-type="${type}"]`)
    .forEach(b => b.classList.remove("active"));

  if (alreadyActive) { //활성화 -> 비활성화
    if (type === "attribute") 
    if (type === "weapon") currentWeaponFilter = "ALL";
	if (type === "star") currentStarFilter = "ALL";
  }
  else { //비활성화 -> 활성화
    ClickBtn.classList.add("active");
    if (type === "attribute") currentAttributeFilter = filter;
    if (type === "weapon") currentWeaponFilter = filter;
	if (type === "star") currentStarFilter = filter;
  }

  applyFilter();
}