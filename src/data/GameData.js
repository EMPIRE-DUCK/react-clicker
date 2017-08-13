const GameData = {
  upgrades: [
    {
      id: 0,
      name: "Click Reactor Upgrade",
      clickModifier: 5,
      generationModifier: 1,
      price: 10,
      active: false
    },
    {
      id: 1,
      name: "Click Reactor Upgrade 2",
      clickModifier: 5,
      generationModifier: 1,
      price: 50,
      active: false
    },
    {
      id: 2,
      name: "Click Reactor Upgrade 3",
      clickModifier: 3,
      generationModifier: 1,
      price: 500,
      active: false
    },
    {
      id: 3,
      name: "Click Reactor Upgrade 4",
      clickModifier: 5,
      generationModifier: 1,
      price: 5000,
      active: false
    }
  ],
 buildings: [
    {
      id: 0,
      name: "Basic Reactor",
      generationPower: 1,
      price: 10,
      amount: 0
    },
    {
      id: 1,
      name: "Advanced Reactor",
      generationPower: 5,
      price: 500,
      amount: 0
    },
    {
      id: 2,
      name: "Redux Reactor",
      generationPower: 25,
      price: 1000,
      amount: 0
    },
    {
      id: 3,
      name: "Advanced Redux Reactor",
      generationPower: 50,
      price: 5000,
      amount: 0
    }
  ]
} 

export default GameData;