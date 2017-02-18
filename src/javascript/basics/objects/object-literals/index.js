export const FACTIONS = {
  Autobots: 'autobots',
  Decepticons: 'decepticons'
};

export const OptimusPrime= {
    name: "Optimus Prime" ,
    role: "leader of the autobots",
    faction: FACTIONS.Autobots,
    power: 1000,
    greet: () => {
        return("Hello, I'm " + $[this.name])
    }
};

export const Megatron = {
    name: 'Megatron' ,
    role: 'leader of the Decepticons',
    faction: FACTIONS.Decepticons,
    power: 1000,
    greet: () => {
        return("Hello, I'm " + $[this.name])
    }
};


