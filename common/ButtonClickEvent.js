import * as Data from '../data/Data.js';
import * as Rendering from '../rendering/Rendering.js';
import * as Common from '../common/Common.js';

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
	
	if(SwitchingTab === "character"){
		console.log("SwitchingTab-character");
		Rendering.FilterButton.createFilterButton(SwitchingTab, "main-screen");
	}
	else {
		console.log("SwitchingTab-character");
		Rendering.FilterButton.createFilterButton(SwitchingTab, "main-screen");
	}
	
	Rendering.GridButton.renderMainCardButton(SwitchingTab, "main-screen");
}

//필터 버튼 클릭 동작
export function FilterButtonClickEvent(ClickBtn, currentTab, containerId = null, weapontype = null) {
  console.log("FilterButtonClickEvent-",containerId,weapontype);

  const type = ClickBtn.dataset.type;
  const filter = ClickBtn.dataset.filter;
  const alreadyActive = ClickBtn.classList.contains("active"); 
  
  let Selector;
  if(weapontype) Selector = ".weapon-filter";
  else Selector = ".filter-screen";	  
  
  // 같은 그룹 버튼들 active 해제
  document.querySelectorAll(`${Selector} .filter-buttons button[data-type="${type}"]`)
    .forEach(b => b.classList.remove("active"));
  
  if(!alreadyActive) {
	ClickBtn.classList.add("active");
  }
  
  if(containerId) Rendering.GridButton.renderMainCardButton(currentTab, containerId);
  else Rendering.GridButton.renderAddWeaponCardButton(weapontype);
}

//main 페이지에서 카드 클릭 시 카드 type과 name detail 페이지로 넘기기. - 완료
export function MainToDetail(currentTab, name) {
	// 기본 동작 막기
	if(event) event.preventDefault();

    // 선택한 탭과 카드 이름을 URL 파라미터로 detail.html에 전달
    const url = new URL("./Detail.html", window.location.href);
	console.log(url);
    url.searchParams.set("tab", currentTab);
    url.searchParams.set("name", name);

    // 실제 페이지 이동
    window.location.href = url.toString();
}

export function SkillConnectButtonClick(Btn, position) { //chat gpt 코드 참고
	const pair = Btn.pair;
	
	Common.Calculator.skillConnectButton(Btn);
	
	if(position === "top") {
		Btn.classList.toggle("active");
		
		if(Btn.classList.contains("active") && !pair.classList.contains("active")){
			pair.classList.add("active");
		}
	}
	else {
		Btn.classList.toggle("active");
		
		if(!Btn.classList.contains("active") && pair.classList.contains("active")){
			pair.classList.remove("active");
		}
	}
}


export function AddWeaponPopUp() {
	
}

export function AddWeaponClick(weapontype){
	console.log("AddWeaponClick-",weapontype);
	
	let PopUp = document.getElementById("add-weapon-popup");
	
	if(!PopUp) {
		PopUp = document.createElement("div");
		PopUp.id = "add-weapon-popup";
		PopUp.style.display = "flex";
	}
	else return;
	
	const closeBtn = document.createElement("span");
	closeBtn.classList.add("close-btn");
	closeBtn.innerHTML = "&times;";
	closeBtn.addEventListener("click", () => {
		PopUp.remove();
	});
	
	const filterScreen = document.createElement("section");
	filterScreen.classList.add("weapon-filter");
	
	const selectScreen = document.createElement("section");
	selectScreen.id = "weapon-select";

	PopUp.appendChild(closeBtn);
	PopUp.appendChild(filterScreen);
	PopUp.appendChild(selectScreen);
	document.body.appendChild(PopUp);
	
	Rendering.FilterButton.createStarFilter("weapon", filterScreen, null, weapontype);
	Common.Search.createSearchFunc("#weapon-select")
	PopUp.appendChild(filterScreen);
	Rendering.GridButton.renderAddWeaponCardButton(weapontype);
	
	document.body.appendChild(PopUp);
}

export function AddWeaponCardClick(){
	console.log("AddWeaponCardClick");
}