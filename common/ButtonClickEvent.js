import * as Rendering from '../rendering/Rendering.js';

/*
추가할 함수
 - 필터 버튼 클릭 동작
 - 스위치 탭 동작
 - 캐릭터/무기 선택 화면 클릭 동작
 - 스킬 연결점 버튼 활성화/비활성화 동작
*/


//탭 변경(캐릭터 / 무기) - 완료
export function SwitchTabClickEvent(SwitchingTab) {
	console.log("SwitchTabClickEvent-", SwitchingTab);
	
	// 탭 active 상태 업데이트
	document.querySelectorAll("#tab-nav .tab").forEach(btn => {
		btn.classList.remove("active");
	});
	
	const currentTab = document.querySelector(`#tab-nav .tab[data-tab="${SwitchingTab}"]`);
	currentTab.classList.add("active");

	// 필터 초기화
	const FilterScreen = document.getElementById("filter-screen");
	FilterScreen.innerHTML = "";
	
	if(SwitchingTab === "character"){
		console.log("SwitchingTab-character");
		Render.RenderButton.createAttrFilter(FilterScreen, SwitchingTab);
		Render.RenderButton.createWeapFilter(FilterScreen, SwitchingTab);
		Render.RenderButton.createStarFilter(FilterScreen, SwitchingTab);
	}
	else {
		console.log("SwitchingTab-character");
		Render.RenderButton.createWeapFilter(FilterScreen, SwitchingTab);
		Render.RenderButton.createStarFilter(FilterScreen, SwitchingTab);		
	}
	
	Render.RenderGrid.CardGrid(SwitchingTab, "ALL", "ALL", "ALL");
}

//main 페이지에서 카드 클릭 시 카드 type과 name detail 페이지로 넘기기. - 완료
export function MainToDetail(currentTab, select_card_name) {
	// 기본 동작 막기
	if(event) event.preventDefault();

    // 선택한 탭과 카드 이름을 URL 파라미터로 detail.html에 전달
    const url = new URL("./Detail.html", window.location.href);
	console.log(url);
    url.searchParams.set("tab", currentTab);
    url.searchParams.set("name", select_card_name);

    // 실제 페이지 이동
    window.location.href = url.toString();
}

// 스킬 버튼 활성/비활성 확인
export function toggleSkillButton(buttonElement, isActive) {
    if (isActive) buttonElement.classList.add("active");
    else buttonElement.classList.remove("active");
}

//필터 버튼 클릭 동작
export function FilterButtonClickEvent(ClickBtn, currentTab) {
  const type = ClickBtn.dataset.type;
  const filter = ClickBtn.dataset.filter;
  const alreadyActive = ClickBtn.classList.contains("active");
  
  const attrFilter = document.querySelector('#filter-screen .attribute-filters button.active');
  const weapFilter = document.querySelector('#filter-screen .weapon-filters button.active');
  const starFilter = document.querySelector('#filter-screen .star-filters button.active');
  
  let currentAttrFilter = attrFilter ? attrFilter.dataset.filter : "ALL";
  let currentWeapFilter = weapFilter ? weapFilter.dataset.filter : "ALL";
  let currentStarFilter = starFilter ? starFilter.dataset.filter : "ALL";
  
  // 같은 그룹 버튼들 active 해제
  document.querySelectorAll(`#filter-screen .filter-buttons button[data-type="${type}"]`)
    .forEach(b => b.classList.remove("active"));

  if (alreadyActive) { //활성화 -> 비활성화
    if (type === "attribute")  currentAttrFilter = "ALL";
    if (type === "weapon") currentWeapFilter = "ALL";
	if (type === "star") currentStarFilter = "ALL";
  }
  else { //비활성화 -> 활성화
    ClickBtn.classList.add("active");
    if (type === "attribute") currentAttrFilter = filter;
    if (type === "weapon") currentWeapFilter = filter;
	if (type === "star") currentStarFilter = filter;
  } 
  
  console.log(currentAttrFilter, currentWeapFilter, currentStarFilter);
  Rendering.Grid.CardGrid(currentTab, currentAttrFilter, currentWeapFilter, currentStarFilter);
}