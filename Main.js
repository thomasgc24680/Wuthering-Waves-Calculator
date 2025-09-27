/*
//개발 환경에 따른 코드 주석 처리
import * as render from './render/Rendering.js';
import * as Data from './data/Data.js';
import { Search } from './Search.js';
*/

// 시작 화면 - 캐릭터 선택 화면
document.addEventListener("DOMContentLoaded", () => {
	console.log("Main");
	mainPageInitRender(); //화면 그리기
});

function main_rendering() {
	rendering_switchTab();
	rendering_filterBtn();
	rendering_cardGrid();
}


