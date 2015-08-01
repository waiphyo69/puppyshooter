(function () {
  if (typeof PuppyShooter === "undefined") {
    window.PuppyShooter= {};
  }

  var GameView = PuppyShooter.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.puppy = this.game.addPuppy();
    this.timerId = null;
  };

  GameView.MOVES = {
    "w": [ 0, -20],
    "a": [-20,  0],
    "s": [ 0,  20],
    "d": [ 20,  0],
  };

  GameView.prototype.bindKeyHandlers = function () {
    var puppy = this.puppy;

    Object.keys(GameView.MOVES).forEach(function (k) {
      var move = GameView.MOVES[k];
      key(k, function () { puppy.power(move); });
    });

    key("down", function () {
      event.preventDefault();
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

  };

  GameView.prototype.start = function () {
    var gameView = this;
    this.timerId = setInterval(
      function () {
        gameView.game.step();
        gameView.game.draw(gameView.ctx);
      }, 1000 / PuppyShooter.Game.FPS
    );

    this.bindKeyHandlers();
  };

  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})();
