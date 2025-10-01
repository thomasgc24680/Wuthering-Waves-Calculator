export function createSearchInput(container) {
	const searchInput = document.createElement("div");
	searchInput.classList.add("filter-search");
	
	const Input = document.createElement("input");
	Input.type = "text";
	Input.id = "SearchTool";
	Input.placeholder = "검색어를 입력하세요.";
	
	searchInput.appendChild(Input);	
	container.appendChild(searchInput);
}

export function createSearchFunc() {
	const searchInput = document.getElementById("SearchTool");
	
	if(!searchInput) {
		console.log("don't find searchInput");
		return;
	}

	searchInput.addEventListener("input", () => {
		const query = searchInput.value.toLowerCase().trim();

		document.querySelectorAll(".select-screen .card").forEach(card => {
			const name = card.querySelector("p").textContent.toLowerCase();
			if (name.includes(query)) {
				card.style.display = "";   // 검색어 포함 → 보이기
			} else {
				card.style.display = "none"; // 불일치 → 숨기기
			}
		});
	});
}