(function () {
  if (typeof PuppyShooter === "undefined") {
    window.PuppyShooter = {};
  }

  function randomColor() {
    var hexDigits = "0123456789ABCDEF";

    var color = "#";
    for (var i = 0; i < 3; i ++) {
      color += hexDigits[Math.floor((Math.random() * 16))];
    }

    return color;
  }

  var Puppy = PuppyShooter.Puppy = function (options) {
    this.lives = 3;
    options.pos = [400,400];
    options.radius = Puppy.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = options.color || randomColor();

    PuppyShooter.MovingObject.call(this, options)
  };

  Puppy.RADIUS = 20;

  PuppyShooter.Util.inherits(Puppy, PuppyShooter.MovingObject);


  Puppy.prototype.draw = function(ctx){
    var that = this;
    ctx.drawImage(that.corgiSprite, that.pos[0], that.pos[1] , 60, 60);
  }

  Puppy.prototype.fireBulletUp = function () {
    event.preventDefault();
    var norm = PuppyShooter.Util.norm(this.vel);

    var bulletVel = [
      0, 20
    ];

    var bullet = new PuppyShooter.Bullet({
      pos: this.pos,
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    this.game.add(bullet);
  };

  Puppy.prototype.fireBulletDown = function () {
    event.preventDefault();
    var norm = PuppyShooter.Util.norm(this.vel);

    var bulletVel = [
      0, -20
    ];

    var bullet = new PuppyShooter.Bullet({
      pos: this.pos,
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    this.game.add(bullet);
  };


  Puppy.prototype.fireBulletLeft = function () {
    event.preventDefault();
    var norm = PuppyShooter.Util.norm(this.vel);

    var bulletVel = [
      -20, 0
    ];

    var bullet = new PuppyShooter.Bullet({
      pos: this.pos,
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    this.game.add(bullet);
  };

  Puppy.prototype.fireBulletRight = function () {
    event.preventDefault();
    var norm = PuppyShooter.Util.norm(this.vel);

    var bulletVel = [
      20, 0
    ];

    var bullet = new PuppyShooter.Bullet({
      pos: this.pos,
      vel: bulletVel,
      color: this.color,
      game: this.game
    });

    this.game.add(bullet);
  };


  Puppy.prototype.power = function (impulse) {
    this.pos[0] += impulse[0];
    this.pos[1] += impulse[1];
  };

  Puppy.prototype.relocate = function () {
    this.pos = [400,400];
    this.vel = [0, 0];
  };
})();
