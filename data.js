//attribute : glacio(응결), fusion(용융), conducto(전도), aero(기류), spectra(회절), havoc(인멸)
//weapon : greatsword(대검), straightsword(직검), gun(권총), fist(권갑), amplifier(증폭기)
//skill : attack(일반공격), skill(공명스킬), circuit(공명회로), liberation(공명해방), intro(변주), inherent(고유 스킬)
//weekly_boss : bell-borne_geochelone, dreamless, fleurdelys, hecate, jue, scar
//rankup : crownless, dragon_of_dirge, fallacy_of_no_return, feilian_beringal, fenrico, 
//         impermanence_heron, inferno_rider, lady_of_the_sea, lampylumen_myriad, lioness_of_glory,
//         lorelei, mech_abomination, mech_abomination, rover, sentry_construct, tempest_mephis,
//         the_false_sovereign, thundering_mephis
//foster : howler(포효), mask(마스크), polygon(취합), residuum(구조물), ring(팔찌), Whisperin(의음)

//캐릭터
const characters = [
			{ "name": "sanhua", "star": 4, "attribute": "glacio", "weapon": "straightsword",
			"rankup": "lampylumen_myriad", "collect": "wintry_bell", "foster": "whisperin", "weekly_boss": "scar",
			"skillLevelUpOrder": "liberation＞circuit＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "glacio_dmg",
			"KR_name": "산화" },

			{ "name": "baizhi", "star": 4, "attribute": "glacio", "weapon": "amplifier",
			"rankup": "lampylumen_myriad", "collect": "lanternberry", "foster": "howler", "weekly_boss": "bell-borne_geochelone",
			"skillLevelUpOrder": "liberation≥skill＞circuit≥attack＞intro",
			"stat bonus1": "hp", "stat bonus2": "healing_bonus",
			"KR_name": "설지" },

			{ "name": "lingyang", "star": 5, "attribute": "glacio", "weapon": "fist",
			"rankup": "lampylumen_myriad", "collect": "coriolus", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "circuit≥liberation＞skill≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "glacio_dmg",
			"KR_name": "능양" },

			{ "name": "zhezhi", "star": 5, "attribute": "glacio", "weapon": "amplifier",
			"rankup": "lampylumen_myriad", "collect": "lanternberry", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞intro＞attack",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "절지" },

			{ "name": "youhu", "star": 4, "attribute": "glacio", "weapon": "fist",
			"rankup": "fallacy_of_no_return", "collect": "violet_coral", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "skill＞circuit＞liberation＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "유호" },

			{ "name": "carlotta", "star": 5, "attribute": "glacio", "weapon": "gun",
			"rankup": "sentry_construct", "collect": "sword_acorus", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "circuit＞liberation＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "카를로타" },

			{ "name": "chixia", "star": 4, "attribute": "fusion", "weapon": "gun",
			"rankup": "inferno_rider", "collect": "belle_poppy", "foster": "belle_poppy", "weekly_boss": "",
			"skillLevelUpOrder": "circuit≥liberation＞skill≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "fusion_dmg",
			"KR_name": "치샤" },

			{ "name": "mortefi", "star": 4, "attribute": "fusion", "weapon": "gun",
			"rankup": "inferno_rider", "collect": "coriolus", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "liberation＞circuit＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "fusion_dmg",
			"KR_name": "모르테피" },

			{ "name": "encore", "star": 5, "attribute": "fusion", "weapon": "fist",
			"rankup": "inferno_rider", "collect": "pecok_flower", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "liberation＞skill＞circuit＞intro＞attack",
			"stat bonus1": "atk", "stat bonus2": "fusion_dmg",
			"KR_name": "앙코" },

			{ "name": "changli", "star": 5, "attribute": "fusion", "weapon": "straightsword",
			"rankup": "inferno_rider", "collect": "pavo_plum", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "skill≥circuit＞liberation≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "장리" },

			{ "name": "brant", "star": 5, "attribute": "fusion", "weapon": "straightsword",
			"rankup": "dragon_of_dirge", "collect": "golden_fleece", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "circuit≥liberation＞skill≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "브렌트" },

			{ "name": "lupa", "star": 5, "attribute": "fusion", "weapon": "greatsword",
			"rankup": "lioness_of_glory", "collect": "bloodleaf_viburnum", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "circuit＞liberation＞attack＞intro＞skill",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "루파" },

			{ "name": "galbrena", "star": 5, "attribute": "fusion", "weapon": "gun",
			"rankup": "the_false_sovereign", "collect": "stone_rose", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "attack=skill=circuit=liberation=intro",
			"stat bonus1": "atk", "stat bonus2": "crit_dmg",
			"KR_name": "갈브레나" },

			{ "name": "yuanwu", "star": 5, "attribute": "conducto", "weapon": "fist",
			"rankup": "tempest_mephis", "collect": "terraspawn_fungus", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "circuit≥liberation＞skill≥attack＞intro",
			"stat bonus1": "def", "stat bonus2": "conducto_dmg",
			"KR_name": "연무" },

			{ "name": "calcharo", "star": 5, "attribute": "conducto", "weapon": "greatsword",
			"rankup": "thundering_mephis", "collect": "iris", "foster": "iris", "weekly_boss": "",
			"skillLevelUpOrder": "circuit≥liberation＞skill≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_dmg",
			"KR_name": "카카루" },

			{ "name": "yinlin", "star": 5, "attribute": "conducto", "weapon": "amplifier",
			"rankup": "mech_abomination", "collect": "coriolus", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "circuit≥liberation＞skill≥attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "음림" },

			{ "name": "xiangliYao", "star": 5, "attribute": "conducto", "weapon": "fist",
			"rankup": "tempest_mephis", "collect": "violet_coral", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "liberation＞circuit＞skill＞attack＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_dmg",
			"KR_name": "상리요" },

			{ "name": "lumi", "star": 4, "attribute": "conducto", "weapon": "greatsword",
			"rankup": "thundering_mephis", "collect": "terraspawn_fungus", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "circuit＞attack＞liberation＞skill＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "루미" },

			{ "name": "augusta", "star": 5, "attribute": "conducto", "weapon": "greatsword",
			"rankup": "the_false_sovereign", "collect": "luminous_calendula", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "liberation＞circuit＞attack＞skill＞intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "아우구스타" },

			
			{ "name": "rover·aero", "star": 5, "attribute": "aero", "weapon": "straightsword",
			"rankup": "", "collect": "pecok_flower", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "healing_bonus",
			"KR_name": "방랑자·기류" },

			{ "name": "yangyang", "star": 4, "attribute": "aero", "weapon": "straightsword",
			"rankup": "feilian_beringal", "collect": "wintry_bell", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "aero_dmg",
			"KR_name": "양양" },

			{ "name": "aalto", "star": 5, "attribute": "aero", "weapon": "gun",
			"rankup": "feilian_beringal", "collect": "wintry_bell", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "aero_dmg",
			"KR_name": "알토" },

			{ "name": "jianxin", "star": 5, "attribute": "aero", "weapon": "fist",
			"rankup": "feilian_beringal", "collect": "lanternberry", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "감심" },

			{ "name": "jiyan", "star": 5, "attribute": "aero", "weapon": "greatsword",
			"rankup": "feilian_beringal", "collect": "pecok_flower", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "기염" },

			{ "name": "ciaccona", "star": 5, "attribute": "aero", "weapon": "gun",
			"rankup": "dragon_of_dirge", "collect": "golden_fleece", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "crit_dmg",
			"KR_name": "샤콘" },

			{ "name": "cartethyia", "star": 5, "attribute": "aero", "weapon": "straightsword",
			"rankup": "lioness_of_glory", "collect": "bamboo_iris", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "hp", "stat bonus2": "crit_rate",
			"KR_name": "카르티시아" },

			{ "name": "iuno", "star": 5, "attribute": "aero", "weapon": "fist",
			"rankup": "lady_of_the_sea", "collect": "sliveglow_bloom", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "유노" },

			{ "name": "qiuyuan", "star": 5, "attribute": "aero", "weapon": "straightsword",
			"rankup": "fenrico", "collect": "wintry_bell", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "attack=skill=circuit=liberation=intro",
			"stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "구원" },

			{ "name": "rover·spectra", "star": 5, "attribute": "spectra", "weapon": "straightsword",
			"rankup": "", "collect": "pecok_flower", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "spectra_dmg",
			"KR_name": "방랑자·회절" },

			{ "name": "verina", "star": 5, "attribute": "spectra", "weapon": "amplifier",
			"rankup": "mourning_aix", "collect": "belle_poppy", "foster": "belle_poppy", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "healing_bonus",
			"KR_name": "벨리나" },

			{ "name": "jinhsi", "star": 5, "attribute": "spectra", "weapon": "greatsword",
			"rankup": "mourning_aix", "collect": "loong's_peart", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "금희" },

			{ "name": "shorekeeper", "star": 5, "attribute": "spectra", "weapon": "amplifier",
			"rankup": "fallacy_of_no_return", "collect": "nova", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "hp", "stat bonus2": "healing_bonus",
			"KR_name": "파수인" },

			{ "name": "phoebe", "star": 5, "attribute": "spectra", "weapon": "amplifier",
			"rankup": "lorelei", "collect": "firecracker", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "crit_dmg",
			"KR_name": "페비" },

			{ "name": "zani", "star": 5, "attribute": "spectra", "weapon": "fist",
			"rankup": "sentry_construct", "collect": "sword_acorus", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "crit_rate",
			"KR_name": "젠니" },

			{ "name": "rover·havoc", "star": 5, "attribute": "havoc", "weapon": "straightsword",
			"rankup": "", "collect": "pecok_flower", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "", "stat bonus2": "",
			"KR_name": "방랑자·인멸" },

			{ "name": "danjin", "star": 4, "attribute": "havoc", "weapon": "straightsword",
			"rankup": "crownless", "collect": "belle_poppy", "foster": "ring", "weekly_boss": "dreamless",
			"skillLevelUpOrder": "", "stat bonus1": "atk", "stat bonus2": "havoc_dmg",
			"KR_name": "단근" },

			{ "name": "taoqi", "star": 4, "attribute": "havoc", "weapon": "greatsword",
			"rankup": "impermanence_heron", "collect": "iris", "foster": "iris", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "", "stat bonus2": "",
			"KR_name": "도기" },

			{ "name": "camellya", "star": 5, "attribute": "havoc", "weapon": "straightsword",
			"rankup": "fallacy_of_no_return", "collect": "nova", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "", "stat bonus2": "",
			"KR_name": "카멜리아" },

			{ "name": "roccia", "star": 5, "attribute": "havoc", "weapon": "fist",
			"rankup": "lorelei", "collect": "firecracker", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "", "stat bonus2": "",
			"KR_name": "로코코" },

			{ "name": "cantarella", "star": 5, "attribute": "havoc", "weapon": "amplifier",
			"rankup": "lorelei", "collect": "", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "", "stat bonus2": "",
			"KR_name": "칸타렐라" },

			{ "name": "phrolova", "star": 5, "attribute": "havoc", "weapon": "amplifier",
			"rankup": "fenrico", "collect": "after_life", "foster": "", "weekly_boss": "",
			"skillLevelUpOrder": "", "stat bonus1": "", "stat bonus2": "",
			"KR_name": "플로로" }
		];

	
//무기
const weapons = [
		{ "name": "천년의 회류", "star": 5, "weapon" : "straightsword", "img" : "images/weapon/천년의 회류.jpg"},
		{ "name": "견습용 권총", "star": 1, "weapon" : "gun", "img" : "images/weapon/견습용 권총.jpg"},
		{ "name": "수호자의 권총 · 용맹", "star": 3, "weapon" : "gun", "img" : "images/weapon/수호자의 권총 · 용맹.jpg"},
	];