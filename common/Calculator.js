import * as Data from '../data/Data.js';

export function CalculatorProcess(statusSelect, skillButton){
	statusSelect.forEach(select => {
		select.addEventListener("change", (event) => {
			statusSelectChange(event.target);
		});
	});
	skillButton.forEach(button => {
		button.addEventListener("change", (event) => {
			skillConnectButtonChange(event.target);
		});
	});
}

function statusSelectChange(selectDom) {
	console.log("statusSelectChange-",selectDom);
	const selectId = selectDom.id;
	const [ type, role ] = selectId.split("_");
	
	const { curr, goal } = getValue(type);
	
	console.log(selectId, type, role, curr, goal);
	
	if(curr > goal) {
		console.log("현재 레벨이 목표 레벨보다 큽니다!!");
		return;
	}
	
	if(type === "lv")	lv_counting(type, curr, goal);
	else if(type === "rank") ;
	else ;
	
}

function lv_counting(type, curr, goal) {
	const CalculatorData = Data.characterLvUp;
	
	console.log("lv_counting 1-",CalculatorData, curr, goal);
	
	let Clamcoin_lv = 0;
	
	for(let i = curr; i<goal; i++){
		Clamcoin_lv += CalculatorData[0][i];
	}
	console.log("lv_counting 2-",Clamcoin_lv);
}

function getValue(type) {
	const curr = Number(document.querySelector(`select[id="${type}_current"]`).value);
	const goal = Number(document.querySelector(`select[id="${type}_goal"]`).value);
	return { curr, goal };
}

function skillConnectButtonChange(buttonDom){
	
}