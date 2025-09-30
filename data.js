//attribute : glacio(응결), fusion(용융), conducto(전도), aero(기류), spectra(회절), havoc(인멸)
//weapon : greatsword(대검), straightsword(직검), gun(권총), fist(권갑), amplifier(증폭기)
//skill : attack(일반공격), skill(공명스킬), circuit(공명회로), liberation(공명해방), intro(변주), inherent(고유 스킬)
//weekly_boss : bell-borne_geochelone, dreamless, fleurdelys, hecate, jue, scar
//rankup : crownless, dragon_of_dirge, fallacy_of_no_return, feilian_beringal, fenrico, 
//         impermanence_heron, inferno_rider, lady_of_the_sea, lampylumen_myriad, lioness_of_glory,
//         lorelei, mech_abomination, mech_abomination, rover, sentry_construct, tempest_mephis,
//         the_false_sovereign, thundering_mephis
//material : howler(포효), mask(마스크), polygon(취합), residuum(구조물), ring(팔찌), whisperin(의음)
//collect : iris(붓꽃), terraspawn_fungus(검은 연꽃), lanternberry(등롱초), pecok_flower(공작화), belle_poppy(개양귀비),
//			coriolus(구름버섯), wintry_bell(인동국화), violet_coral(보라색 산호), pavo_plum(작령 열매), loong's_peart(클레로덴드론),
//			nova(신성), golden_fleece(황금 양모), sword_acorus(검창포꽃), firecracker(폭죽 봉선화), bamboo_iris(아이리스),
//			bloodleaf_viburnum(블러드 바이버넘), after_life(다음 생), luminous_calendula(빛나는 금잔), sliveglow_bloom(달맞이 꽃),
//			stone_rose(돌장미), seaside_cendretis(부유 바다꽃),

const skills_language = [
		["attack", "skill", "circuit", "liberation", "intro"],
		["일반공격", "공명스킬", "공명회로", "공명해방", "변주스킬"],
	];
	
const skills_button_title = ["Skill Connection Points", "스킬 연결점", "", ""];
const skills_image_title = ["Skill level up order", "스킬 레벨 업 순서", "", ""];


//각 분야별 필요 재화
const characterLvUp = [ //1~20, 20~40, 40~50, 50~60, 60~70, 70~80, 80~90
						[4375, 61425, 65905, 100310, 144550, 200340, 269115],	//클램코인
						[12500, 175500, 188300, 286600, 413000, 572400, 768900] //경험치
					];
					
const rankUp = [ //1, 2, 3, 4, 5, 6
				[5000, 10000, 15000, 20000, 40000, 80000],	//클램코인
				[0, 3, 6, 9, 12, 16], 						//돌파 보스 재료
				[0, 4, 8, 12, 16, 20],						//채집 재료
				[4, 4, 8, 4, 8, 4],							//육성 재료
			];
			
const skillLvUp = [ //2, 3, 4, 5, 6, 7, 8, 9, 10
				[1500, 2000, 4500, 6000, 16000, 30000, 50000, 70000, 100000],	//클램코인
				[2, 3, 2, 3, 2, 3, 2, 3, 4],									//육성 재료
				[2, 3, 2, 3, 3, 5, 2, 3, 6],									//무기 재료
				[0, 0, 0, 0, 0, 1, 1, 1, 1],
			];
			
const skiillConnect = [ //1, 2
				[50000, 100000],	//클램코인
				[3, 3],				//육성 재료
				[3, 3],				//무기 재료
				[0, 1],				//주간 보스 재료
			];
				
const inherentSkill = [ //1, 2
				[10000, 20000], //클램코인
				[3, 3],			//육성 재료
				[3, 3],			//무기 재료
				[1, 1],			//주간 보스 재료
			];


//캐릭터
const characters = [
			{ "name": "sanhua", "star": 4, "attribute": "glacio", "weapon": "straightsword",
			"rankup": "lampylumen_myriad", "collect": "wintry_bell", "material": "whisperin", "weekly_boss": "scar",
			"skillLevelUpOrder": "liberation＞circuit＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "glacio_dmg",
			"KR_name": "산화" },

			{ "name": "baizhi", "star": 4, "attribute": "glacio", "weapon": "amplifier",
			"rankup": "lampylumen_myriad", "collect": "lanternberry", "material": "howler", "weekly_boss": "bell-borne_geochelone",
			"skillLevelUpOrder": "liberation≥skill＞circuit≥attack＞intro",
			"stat bonus1": "hp", "stat bonus2": "healing_bonus",
			"KR_name": "설지" },

			{ "name": "lingyang", "star": 5, "attribute": "glacio", "weapon": "fist",
			"rankup": "lampylumen_myriad", "collect": "coriolus", "material": "whisperin", "weekly_boss": "scar",
			"skillLevelUpOrder": "circuit≥liberation＞skill≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "glacio_dmg",
			"KR_name": "능양" },

			{ "name": "zhezhi", "star": 5, "attribute": "glacio", "weapon": "amplifier",
			"rankup": "lampylumen_myriad", "collect": "lanternberry", "material": "howler", "weekly_boss": "bell-borne_geochelone",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞intro＞attack",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "절지" },

			{ "name": "youhu", "star": 4, "attribute": "glacio", "weapon": "fist",
			"rankup": "fallacy_of_no_return", "collect": "violet_coral", "material": "ring", "weekly_boss": "bell-borne_geochelone",
			"skillLevelUpOrder": "skill＞circuit＞liberation＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "유호" },

			{ "name": "carlotta", "star": 5, "attribute": "glacio", "weapon": "gun",
			"rankup": "sentry_construct", "collect": "sword_acorus", "material": "polygon", "weekly_boss": "hecate",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "카를로타" },

			{ "name": "chixia", "star": 4, "attribute": "fusion", "weapon": "gun",
			"rankup": "inferno_rider", "collect": "belle_poppy", "material": "whisperin", "weekly_boss": "bell-borne_geochelone",
			"skillLevelUpOrder": "circuit≥liberation＞skill≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "fusion_dmg",
			"KR_name": "치샤" },

			{ "name": "mortefi", "star": 4, "attribute": "fusion", "weapon": "gun",
			"rankup": "inferno_rider", "collect": "coriolus", "material": "whisperin", "weekly_boss": "bell-borne_geochelone",
			"skillLevelUpOrder": "liberation＞circuit＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "fusion_dmg",
			"KR_name": "모르테피" },

			{ "name": "encore", "star": 5, "attribute": "fusion", "weapon": "fist",
			"rankup": "inferno_rider", "collect": "pecok_flower", "material": "whisperin", "weekly_boss": "scar",
			"skillLevelUpOrder": "liberation＞skill＞circuit＞intro＞attack",
			"stat bonus1": "atk", "stat bonus2": "fusion_dmg",
			"KR_name": "앙코" },

			{ "name": "changli", "star": 5, "attribute": "fusion", "weapon": "straightsword",
			"rankup": "inferno_rider", "collect": "pavo_plum", "material": "ring", "weekly_boss": "jue",
			"skillLevelUpOrder": "skill≥circuit＞liberation≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "장리" },

			{ "name": "brant", "star": 5, "attribute": "fusion", "weapon": "straightsword",
			"rankup": "dragon_of_dirge", "collect": "golden_fleece", "material": "residuum", "weekly_boss": "hecate",
			"skillLevelUpOrder": "circuit≥liberation＞skill≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "브렌트" },

			{ "name": "lupa", "star": 5, "attribute": "fusion", "weapon": "greatsword",
			"rankup": "lioness_of_glory", "collect": "bloodleaf_viburnum", "material": "howler", "weekly_boss": "hecate",
			"skillLevelUpOrder": "circuit＞liberation＞attack＞intro＞skill",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "루파" },

			{ "name": "galbrena", "star": 5, "attribute": "fusion", "weapon": "gun",
			"rankup": "the_false_sovereign", "collect": "stone_rose", "material": "residuum", "weekly_boss": "hecate",
			"skillLevelUpOrder": "attack=skill=circuit=liberation=intro",
			"stat bonus1": "atk", "stat bonus2": "crit_dmg",
			"KR_name": "갈브레나" },

			{ "name": "yuanwu", "star": 5, "attribute": "conducto", "weapon": "fist",
			"rankup": "tempest_mephis", "collect": "terraspawn_fungus", "material": "ring", "weekly_boss": "scar",
			"skillLevelUpOrder": "circuit≥liberation＞skill≥attack＞intro",
			"stat bonus1": "def", "stat bonus2": "conducto_dmg",
			"KR_name": "연무" },

			{ "name": "calcharo", "star": 5, "attribute": "conducto", "weapon": "greatsword",
			"rankup": "thundering_mephis", "collect": "iris", "material": "ring", "weekly_boss": "bell-borne_geochelone",
			"skillLevelUpOrder": "circuit≥liberation＞skill≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_dmg",
			"KR_name": "카카루" },

			{ "name": "yinlin", "star": 5, "attribute": "conducto", "weapon": "amplifier",
			"rankup": "mech_abomination", "collect": "coriolus", "material": "whisperin", "weekly_boss": "dreamless",
			"skillLevelUpOrder": "circuit≥liberation＞skill≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "음림" },

			{ "name": "xiangliYao", "star": 5, "attribute": "conducto", "weapon": "fist",
			"rankup": "tempest_mephis", "collect": "violet_coral", "material": "whisperin", "weekly_boss": "scar",
			"skillLevelUpOrder": "liberation＞circuit＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_dmg",
			"KR_name": "상리요" },

			{ "name": "lumi", "star": 4, "attribute": "conducto", "weapon": "greatsword",
			"rankup": "thundering_mephis", "collect": "terraspawn_fungus", "material": "howler", "weekly_boss": "jue",
			"skillLevelUpOrder": "circuit＞attack＞liberation＞skill＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "루미" },

			{ "name": "augusta", "star": 5, "attribute": "conducto", "weapon": "greatsword",
			"rankup": "the_false_sovereign", "collect": "luminous_calendula", "material": "residuum", "weekly_boss": "fleurdelys",
			"skillLevelUpOrder": "liberation＞circuit＞attack＞skill＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "아우구스타" },

			
			{ "name": "rover·aero", "star": 5, "attribute": "aero", "weapon": "straightsword",
			"rankup": "rover", "collect": "pecok_flower", "material": "residuum", "weekly_boss": "fleurdelys",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "healing_bonus",
			"KR_name": "방랑자·기류" },

			{ "name": "yangyang", "star": 4, "attribute": "aero", "weapon": "straightsword",
			"rankup": "feilian_beringal", "collect": "wintry_bell", "material": "ring", "weekly_boss": "scar",
			"skillLevelUpOrder": "liberation≥circuit＞skill≥intro＞attack",
			"stat bonus1": "atk", "stat bonus2": "aero_dmg",
			"KR_name": "양양" },

			{ "name": "aalto", "star": 5, "attribute": "aero", "weapon": "gun",
			"rankup": "feilian_beringal", "collect": "wintry_bell", "material": "howler", "weekly_boss": "bell-borne_geochelone",
			"skillLevelUpOrder": "attack≥skill＞circuit≥liberation＞intro",
			"stat bonus1": "atk", "stat bonus2": "aero_dmg",
			"KR_name": "알토" },

			{ "name": "jianxin", "star": 5, "attribute": "aero", "weapon": "fist",
			"rankup": "feilian_beringal", "collect": "lanternberry", "material": "whisperin", "weekly_boss": "scar",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "감심" },

			{ "name": "jiyan", "star": 5, "attribute": "aero", "weapon": "greatsword",
			"rankup": "feilian_beringal", "collect": "pecok_flower", "material": "howler", "weekly_boss": "bell-borne_geochelone",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "기염" },

			{ "name": "ciaccona", "star": 5, "attribute": "aero", "weapon": "gun",
			"rankup": "dragon_of_dirge", "collect": "golden_fleece", "material": "residuum", "weekly_boss": "fleurdelys",
			"skillLevelUpOrder": "liberation＞circuit＞attack＞skill＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_dmg",
			"KR_name": "샤콘" },

			{ "name": "cartethyia", "star": 5, "attribute": "aero", "weapon": "straightsword",
			"rankup": "lioness_of_glory", "collect": "bamboo_iris", "material": "residuum", "weekly_boss": "fleurdelys",
			"skillLevelUpOrder": "circuit＞liberation＞attack＞skill＞intro",
			"stat bonus1": "hp", "stat bonus2": "crit_rate",
			"KR_name": "카르티시아" },

			{ "name": "iuno", "star": 5, "attribute": "aero", "weapon": "fist",
			"rankup": "lady_of_the_sea", "collect": "sliveglow_bloom", "material": "polygon", "weekly_boss": "hecate",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro", "stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "유노" },

			{ "name": "qiuyuan", "star": 5, "attribute": "aero", "weapon": "straightsword",
			"rankup": "fenrico", "collect": "wintry_bell", "material": "whisperin", "weekly_boss": "hecate",
			"skillLevelUpOrder": "attack=skill=circuit=liberation=intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "구원" },
			

			{ "name": "rover·spectra", "star": 5, "attribute": "spectra", "weapon": "straightsword",
			"rankup": "rover", "collect": "pecok_flower", "material": "whisperin", "weekly_boss": "scar",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro", "stat bonus1": "atk", "stat bonus2": "spectra_dmg",
			"KR_name": "방랑자·회절" },

			{ "name": "verina", "star": 5, "attribute": "spectra", "weapon": "amplifier",
			"rankup": "mourning_aix", "collect": "belle_poppy", "material": "howler", "weekly_boss": "bell-borne_geochelone",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro", "stat bonus1": "atk", "stat bonus2": "healing_bonus",
			"KR_name": "벨리나" },

			{ "name": "jinhsi", "star": 5, "attribute": "spectra", "weapon": "greatsword",
			"rankup": "mourning_aix", "collect": "loong's_peart", "material": "howler", "weekly_boss": "jue",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro", "stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "금희" },

			{ "name": "shorekeeper", "star": 5, "attribute": "spectra", "weapon": "amplifier",
			"rankup": "fallacy_of_no_return", "collect": "nova", "material": "whisperin", "weekly_boss": "jue",
			"skillLevelUpOrder": "circuit＞liberation＞skill≥attack≥intro", "stat bonus1": "hp", "stat bonus2": "healing_bonus",
			"KR_name": "파수인" },

			{ "name": "phoebe", "star": 5, "attribute": "spectra", "weapon": "amplifier",
			"rankup": "lorelei", "collect": "firecracker", "material": "whisperin", "weekly_boss": "jue",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro", "stat bonus1": "atk", "stat bonus2": "crit_dmg",
			"KR_name": "페비" },

			{ "name": "zani", "star": 5, "attribute": "spectra", "weapon": "fist",
			"rankup": "sentry_construct", "collect": "sword_acorus", "material": "polygon", "weekly_boss": "hecate",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro", "stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "젠니" },
			

			{ "name": "rover·havoc", "star": 5, "attribute": "havoc", "weapon": "straightsword",
			"rankup": "rover", "collect": "pecok_flower", "material": "whisperin", "weekly_boss": "dreamless",
			"skillLevelUpOrder": "liberation＞circuit＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "havoc_dmg",
			"KR_name": "방랑자·인멸" },

			{ "name": "danjin", "star": 4, "attribute": "havoc", "weapon": "straightsword",
			"rankup": "crownless", "collect": "belle_poppy", "material": "ring", "weekly_boss": "dreamless",
			"skillLevelUpOrder": "circuit≥skill＞liberation≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "havoc_dmg",
			"KR_name": "단근" },

			{ "name": "taoqi", "star": 4, "attribute": "havoc", "weapon": "greatsword",
			"rankup": "impermanence_heron", "collect": "iris", "material": "howler", "weekly_boss": "dreamless",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞intro＞attack",
			"stat bonus1": "def", "stat bonus2": "havoc_dmg",
			"KR_name": "도기" },

			{ "name": "camellya", "star": 5, "attribute": "havoc", "weapon": "straightsword",
			"rankup": "fallacy_of_no_return", "collect": "nova", "material": "whisperin", "weekly_boss": "dreamless",
			"skillLevelUpOrder": "circuit＞skill＞liberation＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_dmg",
			"KR_name": "카멜리아" },

			{ "name": "roccia", "star": 5, "attribute": "havoc", "weapon": "fist",
			"rankup": "lorelei", "collect": "firecracker", "material": "residuum", "weekly_boss": "hecate",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro", "stat bonus1": "atk", "stat bonus2": "crit_dmg",
			"KR_name": "로코코" },

			{ "name": "cantarella", "star": 5, "attribute": "havoc", "weapon": "amplifier",
			"rankup": "lorelei", "collect": "seaside_cendretis", "material": "polygon", "weekly_boss": "fleurdelys",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "칸타렐라" },

			{ "name": "phrolova", "star": 5, "attribute": "havoc", "weapon": "amplifier",
			"rankup": "fenrico", "collect": "after_life", "material": "polygon", "weekly_boss": "hecate",
			"skillLevelUpOrder": "liberation＞attack＞circuit＞intro＞skill",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "플로로" }
		];

	
//무기
const weapons = [
		{ "name": "천년의 회류", "star": 5, "weapon" : "straightsword", "img" : "images/weapon/천년의 회류.jpg"},
		{ "name": "견습용 권총", "star": 1, "weapon" : "gun", "img" : "images/weapon/견습용 권총.jpg"},
		{ "name": "수호자의 권총 · 용맹", "star": 3, "weapon" : "gun", "img" : "images/weapon/수호자의 권총 · 용맹.jpg"},
	];