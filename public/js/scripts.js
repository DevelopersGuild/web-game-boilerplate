/*eslint-disable */

var WINDOWWIDTH = 800;
var WINDOWHEIGHT = 600;

var game = new Phaser.Game(WINDOWWIDTH, WINDOWHEIGHT, Phaser.AUTO, 'game-container');

function preload() {
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create() {
  this.dude = game.add.sprite(100, game.world.height/2, 'dude');
  game.physics.arcade.enable(this.dude);

  this.dude.frame = 4;

  this.dude.body.gravity.y = 1000;

  var spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.SPACEBAR);
  spaceKey.onDown.add(this.jump, this);
}

function update() {
  if (this.dude.y < 0 || this.dude.y > game.world.height) {
    this.restartGame();
  }
}

function jump() {
  this.dude.body.velocity.y = -350;
}

function restartGame() {
  game.state.start('main');
}

var mainState = { preload: preload, create: create, update: update, jump: jump, restartGame: restartGame };

game.state.add('main', mainState);
game.state.start('main');