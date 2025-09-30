//개발 환경에 따른 코드 주석 처리
import * as render from './rendering/Rendering.js';
import * as Data from './data/Data.js';

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  console.log("addEventListener");

  if (path.endsWith("Main.html")) {
    // 메인 페이지
	console.log("Main");
    render.mainPageInitRender();
  } 
  else if (path.endsWith("Detail.html")) {
    // 디테일 페이지
	console.log("Detail");
	
    const params = new URLSearchParams(window.location.search);
    const currentTab = params.get("tab");
    const select_card_name = params.get("name");

    render.detailPageRender(currentTab, select_card_name);
  }
});
