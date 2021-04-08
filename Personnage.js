function Character (name, pv, att, mana, state = "alive") {
    this.name = name;
    this.pv = pv; 
    this.att = att;
    this.mana = mana;
    this.state = state;

    this.attack = function(character) {
        console.log(this.name + " attaque " + character.name);
        character.pv = (character.pv - this.att);
        console.log(character.name + " a " + character.pv);
    }

    this.isAlive = function(){
        if (this.pv <= 0){
            this.state = "dead"
        }else{
            this.state = "alive"
        }
    }
}
