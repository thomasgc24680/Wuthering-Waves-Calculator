import * as Data from '../data/Data.js';

export function statusChangeProcess(selectDom) {
	console.log("statusSelectChange-",selectDom);
	
	const selectId = selectDom.id;
	const [ type, role ] = selectId.split("_");
	const target = Number(selectDom.value);
	const { curr, goal } = getValue(type);
	
	//정합성 검사
	if(curr > goal) {
		console.log("현재 레벨이 목표 레벨보다 큽니다!!");
		return true;
	}

	//Lv Rank 동기화
	if(type == "lv" || type === "rank") {
		const RankValue = Number(setLvRank(type, target, role));
		updateSkillOption(RankValue);
	}
	
	counting(type, curr, goal);
	
	update();
}

function updateSkillOption(Rank) {
	const skill = ["attack", "skill", "circuit", "liberation", "intro"];
	const SkillLv = Data.rankUp[4][Rank];
	
	skill.forEach(name => {
		["current", "goal"].forEach(role => {			
			const skillSelect = document.getElementById(`${name}_${role}`);
			skillSelect.innerHTML = "";
			
			for(let i = 0; i < SkillLv; i++) {
				const option = document.createElement("option");
				option.value = i;
				option.textContent = i+1;
				skillSelect.appendChild(option);
			}
			skillSelect.value = 0;
		});
	});
	
	const position = ["top", "bottom"];
	
	position.forEach(pos => {
		for(let i = 0; i<5; i++){
			const Btn = document.getElementById(`${pos}-${i}`);
			console.log(Btn);
			
			if(Rank < 3) {
				Btn.disabled = true;
				skillConnectButton(Btn);
				Btn.classList.remove("active");
			}
			else if(Rank === 3) {
				if(pos === "bottom") {
					Btn.disabled = false;
				}
				else{
					Btn.disabled = true;
					skillConnectButton(Btn);
					Btn.classList.remove("active");
				}
			}
			else Btn.disabled = false;
		}
	});
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
		}
	}
	console.log("setLvRank2-", type, target, Lv.value, Rank.value);
	return Rank.value;
}

function counting(type, curr, goal) {
	if(type === "lv" || type === "rank") {
		Data.materials.lv = calLv(curr, goal);
		Data.materials.rank = calRank(curr, goal);
	}
	else {
		switch(type){
			case "attack" 		: Data.materials.attack = calSkill(curr, goal); break;
			case "skill" 		: Data.materials.skill = calSkill(curr, goal); break;
			case "circuit" 		: Data.materials.circuit = calSkill(curr, goal); break;
			case "liberation" 	: Data.materials.liberation = calSkill(curr, goal); break;
			case "intro" 		: Data.materials.intro = calSkill(curr, goal); break;
		}
	}
}

function calLv(curr, goal) {
	const calData = Data.characterLvUp;
	const LvData = { clamcoin : 0, resonator_exp : [0,0,0,0] };
	
	for(let i = curr; i < goal; i++){
		LvData.clamcoin += calData[0][i];
		for(let j = 0; j < 4; j++){
			LvData.resonator_exp[j] += calData[1][i][j];
		}
	}
	
	console.log("calLv",LvData);
	
	return LvData;
		
}	

function calRank(curr, goal) {
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
	console.log("calRank",RankData);
	return RankData;
}

function calSkill(curr, goal){
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
	console.log("calSkill",SkillData);
	return SkillData;
}
//////////////////////////////////

//스킬 연결점 계산 코드
export function skillConnectButton(buttonDom) {
	
	console.log("skillConnectButton");
	
	const total = {
		clamcoin : 0,
		material : [0,0,0,0],
		weapon : [0,0,0,0],
		weekly_boss : 0
	};
	
	const buttonId = buttonDom.id;
	const [ positionBtn, indexBtn ] = buttonId.split("-");
	const activeBtn = buttonDom.classList.contains("active");
	
	const pairBtn = buttonDom.pair;
	const pairId = pairBtn.id;
	const [ positionPair, indexPair ] = pairId.split("-");
	const activePair = pairBtn.classList.contains("active");
	
	const currentBtnData = calSkillConnect(positionBtn, indexBtn, activeBtn);
	addSkillConnectData(total, currentBtnData);
	
	if(positionBtn === "top") {
		if(activeBtn === false && activePair === false){
			const pairData = calSkillConnect(positionPair, indexPair, activePair);
			addSkillConnectData(total, pairData);
		}			
	}
	if(positionBtn === "bottom") {
		if(activeBtn === true && activePair === true){
			const pairData = calSkillConnect(positionPair, indexPair, activePair);
			addSkillConnectData(total, pairData);
		}			
	}
	
	addSkillConnectData(Data.materials.skillconnect, total);
	
	update();
}

function calSkillConnect(position, index, active){	
	const calData = Data.skillConnect;
	const sign = active ? -1 : 1;
	const skillConnectData = {
		clamcoin : 0,
		material : [0,0,0,0],
		weapon : [0,0,0,0],
		weekly_boss : 0
	};
	
	const itemIndex = index === "2" ? (position === "top" ? 2 : 1) : (position === "top" ? 3 : 2);
	
	let col;
	if(position === "top"){
		if(index === "2") col = 3;
		else col = 1;
	}
	else{
		if(index === "2") col = 2;
		else col = 0;
	}
	
	skillConnectData.clamcoin = calData[0][col] * sign;
	skillConnectData.material[itemIndex] = calData[1][col] * sign;
	skillConnectData.weapon[itemIndex] = calData[2][col] * sign;
	skillConnectData.weekly_boss = calData[3][col] * sign;
	
	return skillConnectData;
}

function addSkillConnectData(total, add) {
	total.clamcoin += add.clamcoin;
	total.weekly_boss += add.weekly_boss;
	for(let i = 0; i<4; i++){
		total.weapon[i] += add.weapon[i];
		total.material[i] += add.material[i];
	}
}

function update() {
    const sections = ["lv","rank","attack","skill","circuit","liberation","intro", "skillconnect"];
    const total = {}; // 항목별 합계를 담을 객체

    sections.forEach(section => {
        Object.keys(Data.materials[section]).forEach(key => {
            const value = Data.materials[section][key];

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

    console.log("update", Data.materials);
	
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
    });
}
