//필터 버튼 클릭 동작
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