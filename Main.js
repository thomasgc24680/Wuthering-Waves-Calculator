//개발 환경에 따른 코드 주석 처리
import * as render from './rendering/Rendering.js';
import * as Data from './data/Data.js';
import { Search } from './Search.js';

// 시작 화면 - 캐릭터 선택 화면
document.addEventListener("DOMContentLoaded", () => {
	console.log("Main");
	render.mainPageInitRender(); //화면 그리기
});

window.addEventListener("DOMContentLoaded", () => {
    history.replaceState({ page: "main" }, "Main", "#main");
});