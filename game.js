const game = {
    currentQuest: 0,
    quests: [
      {
        name: "Defeat the monster",
        options: [
          { text: "Attack with sword", result: "You attack the monster with your sword!" },
          { text: "Shoot with bow", result: "You shoot the monster with your bow!" },
          { text: "Cast spell", result: "You cast a spell at the monster!" },
          { text: "Run away", result: "You try to run away, but the monster catches you!" }
        ],
        completed: false
      }
    ],
  
    // List of 10 random monsters
    monsters: [
      "Goblin",
      "Orc",
      "Troll",
      "Dragon",
      "Giant",
      "Zombie",
      "Skeleton",
      "Werewolf",
      "Vampire",
      "Demon"
    ],
  
    // Function to choose a random monster for the player to defeat
    chooseMonster: function() {
      const index = Math.floor(Math.random() * this.monsters.length);
      return this.monsters[index];
    },
  
    // Function to display the current quest and options on the screen
    displayQuest: function() {
      const monster = this.chooseMonster();
      const quest = this.quests[this.currentQuest];
  
      console.log(`You encounter a ${monster}!`);
      console.log(`Quest: ${quest.name}`);
  
      quest.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option.text}`);
      });
    }
  };
  
  game.displayQuest();
  