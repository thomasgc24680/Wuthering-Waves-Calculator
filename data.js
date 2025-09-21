//attribute : glacio(응결), fusion(용융), conducto(전도), aero(기류), spectra(회절), havoc(인멸)
//weapon : greatsword(대검), straightsword(직검), gun(권총), fist(권갑), amplifier(증폭기)
//stat : attack(일반공격), skill(공명스킬), circuit(공명회로), liberation(공명해방), intro(변주), inherent(고유 스킬)
//bonus : crit dmg, crit rate, healing bonus, def

//캐릭터
const characters = [
			{ "name": "sanhua", "star": 4, "attribute": "glacio", "weapon" : "straightsword",
			"foster": "ideophone", "rankup" : "Lampylumen_Myriad", "collect" : "", "weekly_boss" : "Scar",
			"first_skill" : "liberation", "second_skill" : "circuit", "third_skill" : "skill", "fourth_skill" : "attack", "fifth_skill": "intro",
			"stat bonus1" : "atk", "stat bonus2" : "glacio_dmg",
			"KR_name" : "산화"},

			{ "name": "baizhi", "star": 4, "attribute": "glacio", "weapon" : "amplifier",
			"foster": "roar", "rankup" : "Lampylumen_Myriad", "collect" : "", "weekly_boss" : "Bell-Borne_Geochelone",
			"first_skill" : "liberation", "second_skill" : "skill", "third_skill" : "circuit", "fourth_skill" : "attack", "fifth_skill": "intro",
			"stat bonus1" : "hp", "stat bonus2" : "healing_bonus",
			"KR_name" : "설지"},

			{ "name": "lingyang", "star": 5, "attribute": "glacio", "weapon" : "fist",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "circuit", "second_skill" : "liberation", "third_skill" : "skill", "fourth_skill" : "attack", "fifth_skill": "intro",
			"stat bonus1" : "atk", "stat bonus2" : "glacio_dmg",
			"KR_name" : "능양"},

			{ "name": "zhezhi", "star": 5, "attribute": "glacio", "weapon" : "amplifier",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "atk", "stat bonus2" : "crit_rate",
			"KR_name" : "절지"},

			{ "name": "youhu", "star": 4, "attribute": "glacio", "weapon" : "fist",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "atk", "stat bonus2" : "crit_rate",
			"KR_name" : "유호"},

			{ "name": "carlotta", "star": 5, "attribute": "glacio", "weapon" : "gun",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "atk", "stat bonus2" : "crit_rate",
			"KR_name" : "카를로타"},
			

			{ "name": "chixia", "star": 4, "attribute": "fusion", "weapon" : "gun",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "atk", "stat bonus2" : "fusion_dmg",
			"KR_name" : "치샤"},

			{ "name": "mortefi", "star": 4, "attribute": "fusion", "weapon" : "gun",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "atk", "stat bonus2" : "fusion_dmg",
			"KR_name" : "모르테피"},

			{ "name": "encore", "star": 5, "attribute": "fusion", "weapon" : "fist",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "atk", "stat bonus2" : "fusion_dmg",
			"KR_name" : "앙코"},

			{ "name": "changli", "star": 5, "attribute": "fusion", "weapon" : "straightsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "atk", "stat bonus2" : "crit_rate",
			"KR_name" : "장리"},

			{ "name": "brant", "star": 5, "attribute": "fusion", "weapon" : "straightsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "atk", "stat bonus2" : "crit_rate",
			"KR_name" : "브렌트"},

			{ "name": "lupa", "star": 5, "attribute": "fusion", "weapon" : "greatsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "atk", "stat bonus2" : "crit_rate",
			"KR_name" : "루파"},

			{ "name": "galbrena", "star": 5, "attribute": "fusion", "weapon" : "gun",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "atk", "stat bonus2" : "crit_dmg",
			"KR_name" : "갈브레나"},
			

			{ "name": "yuanwu", "star": 5, "attribute": "conducto", "weapon" : "fist",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "연무"},

			{ "name": "calcharo", "star": 5, "attribute": "conducto", "weapon" : "greatsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "카카루"},

			{ "name": "yinlin", "star": 5, "attribute": "conducto", "weapon" : "amplifier",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "음림"},

			{ "name": "xiangliYao", "star": 5, "attribute": "conducto", "weapon" : "fist",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "상리요"},

			{ "name": "lumi", "star": 4, "attribute": "conducto", "weapon" : "greatsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "루미"},

			{ "name": "augusta", "star": 5, "attribute": "conducto", "weapon" : "greatsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "아우구스타"},
			

			{ "name": "cartethyia", "star": 5, "attribute": "aero", "weapon" : "straightsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "카르티시아"},

			{ "name": "iuno", "star": 5, "attribute": "aero", "weapon" : "fist",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "유노"},

			{ "name": "phoebe", "star": 5, "attribute": "spectra", "weapon" : "amplifier",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "페비"},

			{ "name": "phrolova", "star": 5, "attribute": "havoc", "weapon" : "amplifier",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "플로로"},
			
			

			{ "name": "sanhua", "star": 4, "attribute": "glacio", "weapon" : "straightsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "liberation", "second_skill" : "circuit", "third_skill" : "skill", "fourth_skill" : "attack", "fifth_skill": "intro",
			"stat bonus1" : "atk", "stat bonus2" : "glacio dmg",
			"KR_name" : "산화"},

			{ "name": "baizhi", "star": 4, "attribute": "glacio", "weapon" : "amplifier",
			"foster": "roar", "rankup" : "Lampylumen_Myriad", "collect" : "", "weekly_boss" : "Bell-Borne_Geochelone",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "설지"},

			{ "name": "lingyang", "star": 5, "attribute": "glacio", "weapon" : "fist",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "능양"},

			{ "name": "zhezhi", "star": 5, "attribute": "glacio", "weapon" : "amplifier",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "절지"},

			{ "name": "youhu", "star": 4, "attribute": "glacio", "weapon" : "fist",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "유호"},

			{ "name": "carlotta", "star": 5, "attribute": "glacio", "weapon" : "gun",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "카를로타"},
			

			{ "name": "chixia", "star": 4, "attribute": "fusion", "weapon" : "gun",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "치샤"},

			{ "name": "mortefi", "star": 4, "attribute": "fusion", "weapon" : "gun",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "모르테피"},

			{ "name": "encore", "star": 5, "attribute": "fusion", "weapon" : "fist",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "앙코"},

			{ "name": "changli", "star": 5, "attribute": "fusion", "weapon" : "straightsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "장리"},

			{ "name": "brant", "star": 5, "attribute": "fusion", "weapon" : "straightsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "브렌트"},

			{ "name": "lupa", "star": 5, "attribute": "fusion", "weapon" : "greatsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "루파"},

			{ "name": "galbrena", "star": 5, "attribute": "fusion", "weapon" : "gun",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "갈브레나"},
			

			{ "name": "yuanwu", "star": 5, "attribute": "conducto", "weapon" : "fist",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "연무"},

			{ "name": "calcharo", "star": 5, "attribute": "conducto", "weapon" : "greatsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "카카루"},

			{ "name": "yinlin", "star": 5, "attribute": "conducto", "weapon" : "amplifier",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "음림"},

			{ "name": "xiangliYao", "star": 5, "attribute": "conducto", "weapon" : "fist",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "상리요"},

			{ "name": "lumi", "star": 4, "attribute": "conducto", "weapon" : "greatsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "루미"},

			{ "name": "augusta", "star": 5, "attribute": "conducto", "weapon" : "greatsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "아우구스타"},
			

			{ "name": "cartethyia", "star": 5, "attribute": "aero", "weapon" : "straightsword",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "카르티시아"},

			{ "name": "iuno", "star": 5, "attribute": "aero", "weapon" : "fist",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "유노"},

			{ "name": "phoebe", "star": 5, "attribute": "spectra", "weapon" : "amplifier",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "페비"},

			{ "name": "phrolova", "star": 5, "attribute": "havoc", "weapon" : "amplifier",
			"foster": "", "rankup" : "", "collect" : "", "weekly_boss" : "",
			"first_skill" : "", "second_skill" : "", "third_skill" : "", "fourth_skill" : "", "fifth_skill": "",
			"stat bonus1" : "", "stat bonus2" : "",
			"KR_name" : "플로로"},
		];

	
//무기
const weapons = [
		{ "name": "천년의 회류", "star": 5, "weapon" : "straightsword", "img" : "images/weapon/천년의 회류.jpg"},
		{ "name": "견습용 권총", "star": 1, "weapon" : "gun", "img" : "images/weapon/견습용 권총.jpg"},
		{ "name": "수호자의 권총 · 용맹", "star": 3, "weapon" : "gun", "img" : "images/weapon/수호자의 권총 · 용맹.jpg"},
		{ "name": "천년의 회류", "star": 5, "weapon" : "straightsword", "img" : "images/weapon/천년의 회류.jpg"},
		{ "name": "견습용 권총", "star": 1, "weapon" : "gun", "img" : "images/weapon/견습용 권총.jpg"},
		{ "name": "수호자의 권총 · 용맹", "star": 3, "weapon" : "gun", "img" : "images/weapon/수호자의 권총 · 용맹.jpg"},
		{ "name": "천년의 회류", "star": 5, "weapon" : "straightsword", "img" : "images/weapon/천년의 회류.jpg"},
		{ "name": "견습용 권총", "star": 1, "weapon" : "gun", "img" : "images/weapon/견습용 권총.jpg"},
		{ "name": "수호자의 권총 · 용맹", "star": 3, "weapon" : "gun", "img" : "images/weapon/수호자의 권총 · 용맹.jpg"},
	];