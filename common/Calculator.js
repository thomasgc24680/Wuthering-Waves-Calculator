import * as Data from '../data/Data.js';

export function CalculatorProcess(statusSelect, skillButton){
	statusSelect.forEach(select => {
		select.addEventListener("change", (event) => {
			statusChangeProcess(event.target);
		});
	});
	skillButton.forEach(button => {
		button.addEventListener("change", (event) => {
			skillConnectButtonChange(event.target);
		});
	});
}

function statusChangeProcess(selectDom) {
	console.log("statusSelectChange-",selectDom);
	const selectId = selectDom.id;
	const [ type, role ] = selectId.split("_");
	
	const { curr, goal } = getValue(type);
	
	console.log(selectId, type, role, curr, goal);
	
	if(curr > goal) {
		console.log("현재 레벨이 목표 레벨보다 큽니다!!");
		return;
	}
	
	let changeCount = {
		clamcoin : 0,
		resonator_exp : [0, 0, 0, 0],
		rankup : 0,
		weekly_boss : 0,
		collect : 0,
		material : 0,
		weapon : 0,
		weapon_exp : 0
	};
	
	if(type == "lv" || type === "rank") changeCount = countLvRank(changeCount, curr, goal);
	else countSkill(curr, goal);
	
	update(changeCount, curr, goal, role);
}

function getValue(type) {
	const curr = Number(document.querySelector(`select[id="${type}_current"]`).value);
	const goal = Number(document.querySelector(`select[id="${type}_goal"]`).value);
	return { curr, goal };
}

function countLvRank(total, curr, goal) {
	const LvCalData = Data.characterLvUp;
	const RankCalData = Data.rankUp;
	
	for(let i = curr; i < goal; i++){
		//클램코인
		total.clamcoin += LvCalData[0][i];
		total.clamcoin += RankCalData[0][i];
		
		//공명자 경험치 재료
		for(let j = 0; j < 4; j++){
			total.resonator_exp[j] = LvCalData[1][i][j];
		}
		
		total.rankup += RankCalData[1][i];		//돌파 재료
		total.collect += RankCalData[2][i];		//채집 재료
		total.material += RankCalData[3][i];	//육성 재료
	}
	
	return total;
}

function countSkill(type, curr, goal){}

function lv_counting(type, curr, goal) {
	const CalculatorData = Data.characterLvUp;
	
	console.log("lv_counting 1-",CalculatorData, curr, goal);
	
	let Clamcoin_lv = 0;
	
	for(let i = curr; i<goal; i++){
		Clamcoin_lv += CalculatorData[0][i];
	}
	console.log("lv_counting 2-",Clamcoin_lv);
}

function update(changeCount, curr, goal, role){
	console.log("update-", changeCount, curr, goal, role);
	
	const LvSelect = document.getElementById(`lv_${role}`);	
	const RankSelect = document.getElementById(`rank_${role}`);
	console.log("update2-", LvSelect.value, RankSelect.value);
	if(role === "current") {
		if(LvSelect.value - curr > 1 || curr - LvSelect.value > 1)	LvSelect.value = String(curr);
		if(RankSelect.value - curr > 1 || curr - RankSelect.value > 1)	{
			console.log("curr");
			RankSelect.value = String(curr);
		}
	}
	else{
		if(LvSelect.value - goal > 1)	LvSelect.value = String(goal);
		if(RankSelect.value - goal > 1)	RankSelect.value = String(goal);
	}
	console.log("update3-", LvSelect.value, RankSelect.value);
}

function updateLvRank(item, curr, goal) {
	const LvSelect = document.getElementById("lv_select");
	const RankSelect = document.getElementById("rank_select");
	
}