(function () {
  if (typeof PuppyShooter === "undefined") {
    window.PuppyShooter = {};
  }

  var Ghost = PuppyShooter.Ghost = function (options) {
    options.color = Ghost.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = Ghost.RADIUS;
    options.vel = options.vel || PuppyShooter.Util.randomVec(Ghost.SPEED);

    PuppyShooter.MovingObject.call(this, options);
  };

  Ghost.COLOR = "#505050";
  Ghost.RADIUS = 25;
  Ghost.SPEED = 4;

  PuppyShooter.Util.inherits(Ghost, PuppyShooter.MovingObject);

  Ghost.prototype.collideWith = function (otherObject) {
    var that = this;
    if (otherObject instanceof PuppyShooter.Puppy) {
      if (PuppyShooter.lives === 1){
        PuppyShooter.lives -= 1;
        $(".livetext").html("Lives: "+ PuppyShooter.lives )
        otherObject.remove();
        otherObject.fireBulletUp = function(){};
        otherObject.fireBulletDown = function(){};
        otherObject.fireBulletLeft = function(){};
        otherObject.fireBulletRight = function(){};
        $(".gameOver").show();
      }
      else {
        PuppyShooter.puppy.relocate();
        PuppyShooter.lives -= 1;
        $(".livetext").html("Lives: "+ PuppyShooter.lives )
      }
    }
  };
})();
