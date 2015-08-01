(function () {
<<<<<<< HEAD
  if (typeof PuppyShooter === "undefined") {
    window.PuppyShooter= {};
  }

  var GameView = PuppyShooter.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.puppy = this.game.addPuppy();
=======
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.ship = this.game.addShip();
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0
    this.timerId = null;
  };

  GameView.MOVES = {
    "w": [ 0, -20],
    "a": [-20,  0],
    "s": [ 0,  20],
    "d": [ 20,  0],
  };

  GameView.prototype.bindKeyHandlers = function () {
<<<<<<< HEAD
    var puppy = this.puppy;

    Object.keys(GameView.MOVES).forEach(function (k) {
      var move = GameView.MOVES[k];
      key(k, function () { puppy.power(move); });
=======
    var ship = this.ship;

    Object.keys(GameView.MOVES).forEach(function (k) {
      var move = GameView.MOVES[k];
      key(k, function () { ship.power(move); });
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0
    });

    key("down", function () {
      event.preventDefault();
<<<<<<< HEAD
      puppy.fireBulletUp() });
    key("left", function () {
      event.preventDefault();
      puppy.fireBulletLeft() });
    key("up", function () {
      event.preventDefault();
      puppy.fireBulletDown() });
    key("right", function () {
      event.preventDefault();
      puppy.fireBulletRight() });
=======
      ship.fireBulletUp() });
    key("left", function () {
      event.preventDefault();
      ship.fireBulletLeft() });
    key("up", function () {
      event.preventDefault();
      ship.fireBulletDown() });
    key("right", function () {
        event.preventDefault();
      ship.fireBulletRight() });
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0

  };

  GameView.prototype.start = function () {
    var gameView = this;
    this.timerId = setInterval(
      function () {
        gameView.game.step();
        gameView.game.draw(gameView.ctx);
<<<<<<< HEAD
      }, 1000 / PuppyShooter.Game.FPS
=======
      }, 1000 / Asteroids.Game.FPS
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0
    );

    this.bindKeyHandlers();
  };

  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})();
