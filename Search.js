function Search(){
	console.log("Search");
	const searchInput = document.getElementById("SearchTool");
	
	if(!searchInput) {
		console.log("don't find searchInput");
		return;
	}

	searchInput.addEventListener("input", () => {
		const query = searchInput.value.toLowerCase().trim();

		document.querySelectorAll("#select-screen .select-card").forEach(card => {
			const name = card.querySelector("p").textContent.toLowerCase();
			if (name.includes(query)) {
				card.style.display = "";   // 검색어 포함 → 보이기
			} else {
				card.style.display = "none"; // 불일치 → 숨기기
			}
		});
	});
}