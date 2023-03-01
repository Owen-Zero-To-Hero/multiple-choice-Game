const game = {
  currentQuestIndex: 0,
  quests: [
    {
      name: "Defeat the monster",
      monster: {
        name: "Goblin",
        health: Math.floor(Math.random() * 30) + 70,
        damageTaken: 0
      },
      options: [
        { text: "Attack with sword", damage: 10 },
        { text: "Shoot with bow", damage: 15 },
        { text: "Cast spell", damage: 20 },
        { text: "Run away", damage: 0 }
      ],
      completed: false
    }
  ],
  player: {
    health: 100,
    damageTaken: 0
  },
  monstersDefeated: 0,

  chooseMonster: function() {
    const index = Math.floor(Math.random() * this.monsters.length);
    return this.monsters[index];
  },

  getCurrentQuest() {
    console.log(this.currentQuestIndex)
    if (this.currentQuestIndex < this.quests.length) {
      return this.quests[this.currentQuestIndex];
    } else {
      return null;
    }
  },
  
  selectOption: function(optionIndex) {
    const quest = this.getCurrentQuest();
    const option = quest.options[optionIndex];
    const damage = option.damage;
    const monster = quest.monster;

    if (damage > 0) {
      monster.damageTaken += damage;
      console.log(`You attack the ${monster.name} with ${option.text} and deal ${damage} damage!`);
    } else {
      console.log(option.text);
    }

    if (monster.damageTaken >= monster.health) {
      console.log(`You defeated the ${monster.name}!`);
      this.monstersDefeated++;
      quest.completed = true;

      if (this.monstersDefeated === 1) {
        console.log("You have completed the game!");
      } else {
        this.currentQuestIndex++;
        console.log("You move on to the next quest.");
        displayQuest(this.getCurrentQuest());
      }
    } else {
      console.log(`The ${monster.name} attacks you and deals 5 damage!`);
      this.player.damageTaken += 5;

      if (this.player.damageTaken >= this.player.health) {
        console.log("You have been defeated!");
      } else {
        displayHealthBars();
      }
    }
  }
};

game.monsters = [ "Goblin", "Orc", "Troll", "Dragon", "Giant", "Zombie", "Skeleton", "Werewolf", "Vampire", "Demon" ];

export default game;
