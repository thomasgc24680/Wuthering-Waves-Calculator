import * as Data from '../data/Data.js';

const materials = {
		lv: {clamcoin : 0, resonator_exp : [0,0,0,0] },
		rank : {clamcoin : 0, rankup : 0, collect : [0,0,0,0] , material : [0,0,0,0] },
		attack : {clamcoin : 0, weapon : [0,0,0,0] , material : [0,0,0,0] },
		skill : {clamcoin : 0, weapon : [0,0,0,0] , material : [0,0,0,0] },
		circuit : {clamcoin : 0, weapon : [0,0,0,0] , material : [0,0,0,0] },
		liberation : {clamcoin : 0, weapon : [0,0,0,0] , material : [0,0,0,0] },
		intro : {clamcoin : 0, weapon : [0,0,0,0] , material : [0,0,0,0] },
		total : {}
	};

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
	const target = Number(selectDom.value);
	
	const { curr, goal } = getValue(type);
	
	console.log(selectId, type, role, target);
	
	//정합성 검사
	if(curr > goal) {
		console.log("현재 레벨이 목표 레벨보다 큽니다!!");
		return;
	}
	

	if(type == "lv" || type === "rank") {
		setLvRank(type, target, role);
	}
	
	counting(type, curr, goal);
	
	update();
}

function getValue(type) {
	const curr = Number(document.querySelector(`select[id="${type}_current"]`).value);
	const goal = Number(document.querySelector(`select[id="${type}_goal"]`).value);
	return { curr, goal };
}

function setLvRank(type, target, role) {
	const Lv = document.getElementById(`lv_${role}`);
	const Rank = document.getElementById(`rank_${role}`);
	
	console.log("setLvRank1-", type, target, Lv.value, Rank.value);
	
	if(type === "lv"){
		if(target - Rank.value < 0 || target - Rank.value > 1){
			Rank.value = String(target-1 > 0 ? target-1 : 0);
		}
	}
	else {
		if(target - Lv.value < 0 || target - Lv.value > 1){
			Lv.value = String(target+1 > 0 ? target+1 : 0);
			console.log(target+1);
		}
	}
	console.log("setLvRank2-", type, target, Lv.value, Rank.value);
}

function counting(type, curr, goal) {
	if(type === "lv" || type === "rank") {
		materials.lv = countLv(curr, goal);
		materials.rank = countRank(curr, goal);
	}
	else {
		switch(type){
			case "attack" 		: materials.attack = countSkill(curr, goal); break;
			case "skill" 		: materials.skill = countSkill(curr, goal); break;
			case "circuit" 		: materials.circuit = countSkill(curr, goal); break;
			case "liberation" 	: materials.liberation = countSkill(curr, goal); break;
			case "intro" 		: materials.intro = countSkill(curr, goal); break;
		}
	}
	
	console.log(materials);
}

function countLv(curr, goal) {
	const calData = Data.characterLvUp;
	const LvData = { clamcoin : 0, resonator_exp : [0,0,0,0] };
	
	for(let i = curr; i < goal; i++){
		LvData.clamcoin += calData[0][i];
		for(let j = 0; j < 4; j++){
			LvData.resonator_exp[j] += calData[1][i][j];
		}
	}
	
	console.log(LvData);
	
	return LvData;
		
}	

function countRank(curr, goal) {
	const calData = Data.rankUp;
	const RankData = {
		clamcoin : 0,
		rankup : 0,
		collect : 0,
		material : [0,0,0,0]
	};
	
	for(let i = curr; i < goal; i++){
		RankData.clamcoin += calData[0][i];
		RankData.rankup += calData[1][i];
		RankData.collect += calData[2][i];
		
		let index;
		if(i <= 1) index = 0;
		else if(i <= 3) index = 1;
		else if(i <= 5) index = 2;
		else index = 3;
		
		RankData.material[index] += calData[3][i];
	}
	console.log(RankData);
	return RankData;
}

function countSkill(curr, goal){
	const calData = Data.skillLvUp;
	const SkillData = {
		clamcoin : 0,
		material : [0,0,0,0],
		weapon : [0,0,0,0],
		weekly_boss : 0
	};
	
	for(let i = curr; i < goal; i++){
		SkillData.clamcoin += calData[0][i];
		SkillData.weekly_boss += calData[1][i];
		
		let index;
		if(i <= 1) index = 0;
		else if(i <= 3) index = 1;
		else if(i <= 5) index = 2;
		else index = 3;
		
		SkillData.material[index] += calData[2][i];
		SkillData.weapon[index] += calData[3][i];
	}
	console.log(SkillData);
	return SkillData;
}

function update() {
    const sections = ["lv","rank","attack","skill","circuit","liberation","intro"];
    const total = {}; // 항목별 합계를 담을 객체

    sections.forEach(section => {
        Object.keys(materials[section]).forEach(key => {
            const value = materials[section][key];

            if(Array.isArray(value)) { // 4칸 배열 처리
                value.forEach((count, idx) => {
                    if(count > 0){
                        const itemKey = `${key}_${idx + 2}`; // 0→2, 1→3, 2→4, 3→5
                        if(!total[itemKey]) total[itemKey] = 0;
                        total[itemKey] += count;
                    }
                });
            } else { // 단일 값 처리
                if(value > 0){
                    if(!total[key]) total[key] = 0;
                    total[key] += value;
                }
            }
        });
    });

    console.log(materials);
	
	const allItems = document.querySelectorAll(".material-grid .img-card .need-count");

    allItems.forEach(container => {
        const key = container.id;
        const span = container.querySelector(".required-count");
        if(span){
            // groupedMaterials에 값이 있으면 넣고, 없으면 0
            span.textContent = total[key] || 0;
        }
    });
	
	Object.keys(total).forEach(key => {
		const count = total[key];
		const container = document.getElementById(key);
		if(container){
			const span = container.querySelector(".required-count");
			if(span){
				span.textContent = count;
			}
		}
		console.log(key, container);
    });
}