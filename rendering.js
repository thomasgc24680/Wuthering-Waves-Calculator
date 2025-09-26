import * as renderGrid from './renderGrid.js';
import * as renderButton from './renderButton.js';

export function mainPageInitRender() {
	renderButton.createSwitchTab();
	renderButton.createFilterButton();
	renderGrid.initialCardGrid();
}

export function detialPageRender() {
	
}