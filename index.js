let grace = new Character("grace", 20, 20, 100);
let ulder = new Character("ulder", 100, 20, 100);
let moana = new Character("moana", 100, 20, 30);
let draven = new Character("draven", 100, 20, 30);
let carl = new Character("carl", 10000, 20, 30);
let game = new Game

let playersList = [grace, ulder, moana, draven, carl];
let players = playersList.filter(player => player.state === "alive")
let playersInstances = [{"grace" : grace}, {"ulder" : ulder}, {"moana" : moana}, {"draven" : draven}, {"carl" : carl}]

    console.log("_________________________________");
    console.log("|  Bienvenue sur Jt'aikken III  |");
    console.log("_________________________________");
    console.log("voici nos personnages : ");
    console.log(grace.name + ", " + ulder.name + ", " + moana.name + ", " + draven.name + ", " + carl.name);