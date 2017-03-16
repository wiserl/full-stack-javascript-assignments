class Robot{
  constructor(name,faction) {
    this.name = name;
    this.faction = faction;
    this.power = 1000;
    this.toughness = this.power * 2;
  }
  
  }
  get Power(){
    return this.power;
  }
  get Toughness (){
    return this.toughness;
  }
  
  set Toughness (toughness){
    if(toughness > 100){
      this.toughness = toughness;
    }
  }
    
  set Power(power){
    if(power > 0){
        this.power = power;
      }
      
  }
    greeting () {
    return `Hi I'm $(this.name)`
  }
}


class OptimusPrime extends Robot{
  constructor (name, faction){
    super(name, faction);
  }
  greet(){
    return 'I am Optimus Prime';
  }
  taunt(){
    return 'I am going to murder you!';
  }
}

class Megatron extends Robot{
  constructor (name, faction){
    super(name, faction);
  }
  greet(){
    return 'I am Megatron'
  }
  taunt(){
    return 'No, I am going to murder you!';
  }
}
let megatron = new Megatron;
let optimusPrime = new OptimusPrime;