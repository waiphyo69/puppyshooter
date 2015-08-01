(function () {
<<<<<<< HEAD
  if (typeof PuppyShooter === "undefined") {
    window.PuppyShooter = {};
=======
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0
  }




<<<<<<< HEAD
  var Bullet = PuppyShooter.Bullet = function (options) {
    options.radius = Bullet.RADIUS;
    PuppyShooter.MovingObject.call(this, options);
=======
  var Bullet = Asteroids.Bullet = function (options) {
    options.radius = Bullet.RADIUS;
    Asteroids.MovingObject.call(this, options);
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0
    var spriteImage = new Image();
    spriteImage.src = "images/sprite_bullet.png"
    this.sprite = spriteImage;
  };

  Bullet.RADIUS = 2;
  Bullet.SPEED = 15;

<<<<<<< HEAD
  PuppyShooter.Util.inherits(Bullet, PuppyShooter.MovingObject);
=======
  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0

  Bullet.prototype.draw = function (ctx) {
    ctx.drawImage(this.sprite, this.pos[0], this.pos[1] , 20, 20);
  };


  Bullet.prototype.collideWith = function (otherObject) {
<<<<<<< HEAD
    if (otherObject instanceof PuppyShooter.Ghost) {
      this.remove();
      otherObject.remove();
      PuppyShooter.score += 1;
      $(".scoretext").html("Score: "+ PuppyShooter.score );
=======
    if (otherObject instanceof Asteroids.Asteroid) {
      this.remove();
      otherObject.remove();
      Asteroids.score += 1;
      $(".scoretext").html("Score: "+ Asteroids.score );
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0
    }
  };

  Bullet.prototype.isWrappable = false;
})();
