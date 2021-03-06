(function () {
  if (typeof PuppyShooter === "undefined") {
    window.PuppyShooter = {};
  }

  var MovingObject = PuppyShooter.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    var spriteImage = new Image();
    spriteImage.src = "images/ghost1.png"
    this.sprite = spriteImage;
    var CorgiSpriteImage = new Image();
    CorgiSpriteImage.src = "images/cute_corgi_puppy.png"
    this.corgiSprite = CorgiSpriteImage;
  };

  MovingObject.prototype.collideWith = function (otherObject) {
    ; // default do nothing
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.drawImage(this.sprite, this.pos[0], this.pos[1] , 60, 60);
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var centerDist = PuppyShooter.Util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  };

  MovingObject.prototype.isWrappable = true;

  MovingObject.prototype.move = function () {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];

    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap(this.pos);
      } else {
        this.remove();
      }
    }
  };

  MovingObject.prototype.remove = function () {
    this.game.remove(this);
  };
})();
