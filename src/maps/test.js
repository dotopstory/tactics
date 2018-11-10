const grass = { name: "grass", solid: false }
const floor = { name: "floor", solid: false }
const wall  = { name: "wall",  solid: true  }

export default {
	layout: {
		size: [ 20, 20 ],
		data: [
			"           #########",
			"       ##  #......##",
			" #     ##  ##......#",
			" #         ##....###",
			"            ###..###",
			"          #####...##",
			"      ##  ###.#...# ",
			"      ##  #.......# ",
			"          ....##### ",
			"#         #...##### ",
			"#    #    #####     ",
			"     #    #####     ",
			"                    ",
			"                    ",
			"        ##    #     ",
			"        ##    #     ",
			" #               ## ",
			" ##    #         ## ",
			" ##    #            ",
			"                    ",
		]
			.join("")
			.split("")
			.map(char => {
				switch (char) {
					case " ": return grass
					case ".": return floor
					case "#": return wall
				}
			})
	},
	units: [
		[ "MAGE",       "mage",    "player", false,    [  4, 13 ] ],
		[ "KNIGHT",     "knight",  "player", false,    [  6, 14 ] ],
		[ "WARRIOR",    "warrior", "player", false,    [  5, 16 ] ],
		[ "ROGUE",      "rogue",   "player", false,    [  3, 15 ] ],
		[ "DARK MAGE",  "mage",    "enemy",  "defend", [ 15,  1 ] ],
		[ "TROLL",      "knight",  "enemy",  "defend", [ 15,  4 ] ],
		[ "TROLL",      "knight",  "enemy",  "defend", [ 16,  4 ] ],
		[ "ORC",        "warrior", "enemy",  "wait",   [ 16,  6 ] ],
		[ "TROLL",      "knight",  "enemy",  "defend", [ 10,  8 ] ],
		[ "GOBLIN",     "rogue",   "enemy",  "attack", [  9, 12 ] ],
		[ "GOBLIN",     "rogue",   "enemy",  "attack", [  8,  6 ] ],
		[ "ORC",        "warrior", "enemy",  "attack", [  7, 12 ] ]
	]
}