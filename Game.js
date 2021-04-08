class Game {
    constructor(turn = 10, turnCount = 0){
        this.turn = turn;
        this.turnCount = turnCount;
    }

    newGame = function(){
        for(let i = 0; i < this.turn; i++){

            for(let i = 0; i < players.length; i++){
                let name = players[i].name;
                let player = players[i];
                let victim = prompt("c'est au tour de " + name + " de jouer, qui veux tu attaquer ?");
                player.attack(victim);
                player.isAlive;
                console.log(" ");
            }
            if (i < 8){
                console.log("okay guys ! voyons quelles sont les statistiques !");
                console.log("grace est : " + grace.state + " avec : " + grace.pv + " pv !!!");
                console.log("ulder est : " + ulder.state + " avec : " + ulder.pv + " pv !!!");
                console.log("moana est : " + moana.state + " avec : " + moana.pv + " pv !!!");
                console.log("draven est : " + draven.state + " avec : " + draven.pv + " pv !!!");
                console.log("carl est : " + carl.state + " avec : " + carl.pv + " pv !!!");
                console.log(`prêts pour le tour n°${i + 2} ?`);
                console.log(" ");
                console.log("_____________");

            }else{
                console.log("bien ! voyons qui sont nos heureux gagnant !");
                console.log("*roulement de tambour*...");
                console.log(players);
            }
        }
    }

    

}