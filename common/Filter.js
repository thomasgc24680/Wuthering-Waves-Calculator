import * as Data from '../data/Data.js';

export function Filter(currentTab, currentAttributeFilter, currentWeaponFilter, currentStarFilter) {
  const container = document.querySelector(".card-grid");
  container.innerHTML = "";

  const data = currentTab === "character" ? Data.characters : Data.weapons;

  const filtered = data.filter(card => {
    if (currentTab === "character") { //캐릭터 조건
      const attrMatch = currentAttributeFilter === "ALL" || //속성 필터
                        card.attribute.toLowerCase() === currentAttributeFilter.toLowerCase();
      const weaponMatch = currentWeaponFilter === "ALL" ||  //무기 필터
                          card.weapon.toLowerCase() === currentWeaponFilter.toLowerCase();
	  const starMatch = currentStarFilter === "ALL" ||      //등급 필터
                          String(card.star) === currentStarFilter;
      return attrMatch && weaponMatch && starMatch;
    }
	else { //무기 조건
		const weaponMatch = currentWeaponFilter === "ALL" || //속성 필터
			 card.weaponType.toLowerCase() === currentWeaponFilter.toLowerCase();
		const starMatch = currentStarFilter === "ALL" ||   //무기 필터
						  String(card.star) === currentStarFilter;
		return weaponMatch && starMatch;
    }
  });
}