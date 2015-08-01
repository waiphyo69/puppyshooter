(function () {
<<<<<<< HEAD
  if (typeof PuppyShooter === "undefined") {
    window.PuppyShooter = {};
  }

  var Game = PuppyShooter.Game = function () {
    this.ghosts = [];
    this.bullets = [];
    this.puppies = [];
    this.addGhosts();
=======
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.asteroids = [];
    this.bullets = [];
    this.ships = [];

    this.addAsteroids();
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0
  };

  Game.BG_COLOR = "#000000";
  Game.DIM_X = 1000;
  Game.DIM_Y = 600;
  Game.FPS = 32;
<<<<<<< HEAD
  Game.NUM_GHOSTS = 10;

  Game.prototype.add = function (object) {
    if (object instanceof PuppyShooter.Ghost) {
      this.ghosts.push(object);
    } else if (object instanceof PuppyShooter.Bullet) {
      this.bullets.push(object);
    } else if (object instanceof PuppyShooter.Puppy) {
      this.puppies.push(object);
=======
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.add = function (object) {
    if (object instanceof Asteroids.Asteroid) {
      this.asteroids.push(object);
    } else if (object instanceof Asteroids.Bullet) {
      this.bullets.push(object);
    } else if (object instanceof Asteroids.Ship) {
      this.ships.push(object);
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0
    } else {
      throw "wtf?";
    }
  };

<<<<<<< HEAD
  Game.prototype.addGhosts = function () {
    for (var i = 0; i < Game.NUM_GHOSTS; i++) {
      this.add(new PuppyShooter.Ghost({ game: this }));
    }
  };

  Game.prototype.addPuppy = function () {
    var puppy = new PuppyShooter.Puppy({
=======
  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.add(new Asteroids.Asteroid({ game: this }));
    }
  };

  Game.prototype.addShip = function () {
    var ship = new Asteroids.Ship({
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0
      pos: this.randomPosition(),
      game: this
    });

<<<<<<< HEAD
    this.add(puppy);

    return puppy;
  };

  Game.prototype.allObjects = function () {
    return [].concat(this.puppies, this.ghosts, this.bullets);
=======
    this.add(ship);

    return ship;
  };

  Game.prototype.allObjects = function () {
    return [].concat(this.ships, this.asteroids, this.bullets);
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0
  };

  Game.prototype.checkCollisions = function () {
    var game = this;

    this.allObjects().forEach(function (obj1) {
      game.allObjects().forEach(function (obj2) {
        if (obj1 == obj2) {
<<<<<<< HEAD
=======
          // don't allow self-collision
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0
          return;
        }

        if (obj1.isCollidedWith(obj2)) {
          obj1.collideWith(obj2);
        }
      });
    });
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(function (object) {
      object.draw(ctx);
    });
  };

  Game.prototype.isOutOfBounds = function (pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  };

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function (object) {
      object.move();
    });
  };

  Game.prototype.randomPosition = function () {
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  };

  Game.prototype.remove = function (object) {
<<<<<<< HEAD
    if (object instanceof PuppyShooter.Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof PuppyShooter.Ghost) {
      var idx = this.ghosts.indexOf(object);
      this.ghosts[idx] = new PuppyShooter.Ghost({ game: this });
    } else if (object instanceof PuppyShooter.Puppy) {
      this.puppies.splice(this.puppies.indexOf(object), 1);
=======
    if (object instanceof Asteroids.Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof Asteroids.Asteroid) {
      var idx = this.asteroids.indexOf(object);
      this.asteroids[idx] = new Asteroids.Asteroid({ game: this });
    } else if (object instanceof Asteroids.Ship) {
      this.ships.splice(this.ships.indexOf(object), 1);
>>>>>>> 8546ba7538aeeddadbbaa4b0b66ed41543db3dc0
    } else {
      throw "wtf?";
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.wrap = function (pos) {
    return [
      wrap(pos[0], Game.DIM_X), wrap(pos[1], Game.DIM_Y)
    ];

    function wrap(coord, max) {
      if (coord < 0) {
        return max - (coord % max);
      } else if (coord > max) {
        return coord % max;
      } else {
        return coord;
      }
    }
  };
})();
