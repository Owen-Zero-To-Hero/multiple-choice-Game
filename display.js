import game from './game.js';

// Player health bar
const playerHealthBar = document.querySelector('#player-health-bar');

// Monster health bar
const monsterHealthBar = document.querySelector('#monster-health-bar');

// Text displays
const optionButtons = document.querySelectorAll("#options button");
const questName = document.querySelector('#quest-name');
const monsterName = document.querySelector('#monster-name');
const playerHealth = document.querySelector('#player-health');
const monsterHealth = document.querySelector('#monster-health');

function updateDisplay() {
  // Get current quest
  const quest = game.getCurrentQuest();
  if (!quest) return;

  // Update quest name
  questName.textContent = quest.name;

  // Update monster name
  monsterName.textContent = `You encounter a ${quest.monster} with ${game.monster.health} HP!`;

  // Update player health
  const playerHealthPercent = 100 - (game.player.damageTaken / game.player.health) * 100;
  playerHealth.textContent = `Health: ${game.player.health - game.player.damageTaken}/${game.player.health}`;
  playerHealthBar.style.width = `${playerHealthPercent}%`;

  // Update monster health
  const monsterHealthPercent = 100 - (game.monster.damageTaken / game.monster.health) * 100;
  monsterHealth.textContent = `Health: ${game.monster.health - game.monster.damageTaken}/${game.monster.health}`;
  monsterHealthBar.style.width = `${monsterHealthPercent}%`;
}

export default updateDisplay;


optionButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    game.selectOption(index);
    updateDisplay();
  });
});
