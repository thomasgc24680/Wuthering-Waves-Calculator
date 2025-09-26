import * as Data from './data/data.js';
import { Search } from './Search.js';
import * as render from './Rendering.js';

// 시작 화면 - 캐릭터 선택 화면
document.addEventListener("DOMContentLoaded", () => {
	render.mainPageInitRender(); //화면 그리기
	
	Search.Search(); //검색 기능
});

function main_rendering() {
	rendering_switchTab();
	rendering_filterBtn();
	rendering_cardGrid();
}


