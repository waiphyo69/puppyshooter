(function () {
  if (typeof PuppyShooter === "undefined") {
    window.PuppyShooter = {};
  }



  var Bullet = PuppyShooter.Bullet = function (options) {
    options.radius = Bullet.RADIUS;
    PuppyShooter.MovingObject.call(this, options);
    var spriteImage = new Image();
    spriteImage.src = "images/sprite_bullet.png"
    this.sprite = spriteImage;
  };

  Bullet.RADIUS = 2;
  Bullet.SPEED = 15;


  PuppyShooter.Util.inherits(Bullet, PuppyShooter.MovingObject);

  Bullet.prototype.draw = function (ctx) {
    ctx.drawImage(this.sprite, this.pos[0], this.pos[1] , 20, 20);
  };


  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof PuppyShooter.Ghost) {
      this.remove();
      otherObject.remove();
      PuppyShooter.score += 1;
      $(".scoretext").html("Score: "+ PuppyShooter.score );
    }
  };

  Bullet.prototype.isWrappable = false;
})();
