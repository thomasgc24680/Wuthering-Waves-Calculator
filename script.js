function switchTab(tabName) {
  document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
  if (tabName === 'character') {
    document.querySelectorAll('.tab')[0].classList.add('active');
  } else {
    document.querySelectorAll('.tab')[1].classList.add('active');
  }
  console.log(`탭 전환: ${tabName}`);
}

function selectCharacter() {
  document.getElementById('character-placeholder').classList.add('hidden');
  document.getElementById('character-settings').classList.remove('hidden');
  console.log("캐릭터 선택됨 (예시)");
}

function selectWeapon() {
  document.getElementById('weapon-placeholder').innerHTML = `
    <img src="https://via.placeholder.com/150x80?text=무기" alt="무기 이미지">
    <p>무기 이름</p>
  `;
  console.log("무기 선택됨 (예시)");
}
