// detail.js
window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const characterName = params.get("name"); // 캐릭터 이름 가져오기

  console.log("선택한 캐릭터:", characterName);

  // 이후 캐릭터 데이터를 찾을 때 활용 가능
  const character = characters.find(c => c.name === characterName);
  if (character) {
	document.title = `${characterName} - 육성 계산기`;
	const detailImg = character.img.replace(".jpg", "-detail.jpg");
    document.querySelector(".character-image").innerHTML =
      `<img src="${detailImg}" alt="${character.name}">`;
  }
};
